import React, { useState, useEffect } from 'react'
import {Redirect} from 'react-router-dom'

//queries
import {useMutation} from '@apollo/client'
import {addDocumentMutation, addStudentMutation, updateStudentMutation} from '../../../../queries/mutations'

// material ui 
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel';
import InputBase from '@material-ui/core/InputBase';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';

//components
import PopUp from '../../../Reusable_Components/PopUp'
import RoundButton from '../../../Reusable_Components/RoundButton'
import SquareButton from '../../../Reusable_Components/SquareButton'

//dropdown info
import { studentStatusDropDown, financialAidStatusDropDown } from '../../../../static/dropdowns'


const StudentInfo = props => {
    let currentYear, documents

    let currentDate = new Date().toISOString().split('T')[0]
    
    if(props.student) {
        currentYear = props.student.academicYearStatus.filter(year => year.academicYear.isActive)
        console.log('PROPS STUDENT INFO', props.student)
        // *********** TO DO: IF AN OLD STUDENT, WONT HAVE CURRENT ACTIVE YEAR - HOW DO WE FIND THE MOST RECENT YEAR? ********
        // if (!currentYear )
    }
    
    const classes = useStyles()

/*__________________________________________________  STATE  __________________________________________________  */

    /* --------------- STUDENT INFO STATE   ---------------  */
    let [firstName, setFirstName] = useState(props.student ? props.student.firstName : '')
    let [lastName, setLastName] = useState(props.student ? props.student.lastName : '')
    let [studentStatus, setStudentStatus] = useState(currentYear ? currentYear[0].studentStatus : '')
    let [faStatus, setFaStatus] = useState(currentYear ? currentYear[0].financialAidStatus : '')
    let [ubbId, setUbbId] = useState(props.student ? props.student.ubbId : '')
    let [docNum, setDocNum] = useState(props.student ? props.student.docNum : '')
    let [dateOfBirth, setDateOfBirth] = useState(props.student ? props.student.dateOfBirth : null)
    let [race, setRace] = useState(props.student ? props.student.race : '')
    let [location, setLocation] = useState(props.student ? props.student.location.name : '')
    let [runwayCohort, setRunwayCohort] = useState(props.student ? props.student.runwayCohort : '')
    let [gpa, setGpa] = useState(props.student ? props.student.gpa.value : '')
    let [newStudent, setNewStudent] = useState(props.student ? props.student.newStudent : false)
    let [archiveStudent, setArchiveStudent] = useState(props.student ? props.student.archiveStudent : false)
    let [locationAsOf, setLocationAsOf] = useState(props.student ? props.student.location.asOfDate : currentDate)
    let [gpaAsOf, setGpaAsOf] = useState(props.student ? props.student.gpa.asOfDate : currentDate)
    let [fafsaReceived, setFafsaReceived] = useState(props.student ? props.student.fafsaReceived : false)
    let [readyToAward, setReadyToAward] = useState(props.student ? props.student.readyToAward : false)
    let [sentToAccounting, setSentToAccounting] = useState(props.student ? props.student.sentToAccounting : false)
    let [newStudentId, setNewStudentId] = useState('')
    let [redirectToNewStudent, setRedirectToNewStudent] = useState(false)


     /* --------------- DOCUMENTS STATE   ---------------  */
    let [docName, setDocName] = useState('')
    let [link, setLink] = useState('')
    let [showPopUp, setShowPopUp] = useState(false)
    let [docs, setDocs] = useState(props.student? props.student.documents : [])

    /* --------------- OTHER STATE   ---------------  */
    let [message, setMessage] = useState('')

/*____________________________________________________________________________________________________  */



/*__________________________________________________  MUTATIONS  __________________________________________________  */


     /* ---------------  ADD DOCUMENT  ---------------  */   
     const [addDocument, { data, error }] = useMutation(addDocumentMutation)

    /* ---------------  ADD STUDENT  ---------------  */ 
     const [addStudent] = useMutation(
        addStudentMutation,
        {
            onCompleted({addStudent}) {
                setNewStudentId(addStudent.id)
                setRedirectToNewStudent(true)
            }
        }
    )

    /* ---------------  UPDATE STUDENT  ---------------  */ 
    const [updateStudent] = useMutation(updateStudentMutation)

/*__________________________________________________  STUDENT INFO  __________________________________________________  */

     /* ---------------  FORM FIELDS SETUP  ---------------  */
    let disabled = false
    if(props.lockInfo) {
        disabled = true
    }

    let studentStatusDropOptions = (
        studentStatusDropDown.map((status, i) => {
            return <option key={i} value={status}>{status}</option>
        })
    )

    let financialAidStatusDropOptions = (
        financialAidStatusDropDown.map((status, i) => {
            return <option key={i} value={status}>{status}</option>
        })
    )

    /**************  TO DO: FIGURE OUT HOW TO TRACK WHICH FIELDS CHANGED ???  ***************/
    // const handleChange = () => {
    // }


    /* ---------------  STUDENT INFO FIELDS SUBMIT  ---------------  */
    const handleSubmit = e => {
        e.preventDefault()

        if(!firstName || !lastName || !docNum) {
            setMessage('First name, last name, and Doc# required')
            return
        }

        if(Number.isNaN(Number(docNum))) {
            setMessage('Be sure Doc# is a number only')
            return
        }


        
        let vars
        if(props.student) {
            //if faStatus or studentStatus not equal to current student's statuses: send academic year id, and the changed status
            if(faStatus !== currentYear[0].financialAidStatus || studentStatus !== currentYear[0].studentStatus) {
                vars = {
                    id: props.student.id,
                    firstName: firstName,
                    lastName: lastName, 
                    dateOfBirth: dateOfBirth,
                    ubbId: ubbId,
                    docNum: Number(docNum),
                    location: {
                        name: location,
                        asOfDate: locationAsOf
                    },
                    runwayCohort: runwayCohort,
                    race: race,
                    gpa: {
                        value: parseFloat(gpa),
                        asOfDate: gpaAsOf
                    },
                    fafsaReceived: fafsaReceived,
                    sentToAccounting: sentToAccounting,
                    newStudent: newStudent,
                    archiveStudent: archiveStudent,
                    academicYearId: props.activeYear.id, 
                    financialAidStatus: faStatus,
                    studentStatus: studentStatus
                }
            } else {
                //else send everything but those
                vars = {
                    id: props.student.id,
                    firstName: firstName,
                    lastName: lastName, 
                    dateOfBirth: dateOfBirth,
                    ubbId: ubbId,
                    docNum: Number(docNum),
                    location: {
                        name: location,
                        asOfDate: locationAsOf
                    },
                    runwayCohort: runwayCohort,
                    race: race,
                    gpa: {
                        value: parseFloat(gpa),
                        asOfDate: gpaAsOf
                    },
                    fafsaReceived: fafsaReceived,
                    sentToAccounting: sentToAccounting,
                    newStudent: newStudent,
                    archiveStudent: archiveStudent
                }
            }
            updateStudent({variables: vars})
        }
        else {
            vars = {
                firstName: firstName,
                lastName: lastName, 
                dateOfBirth: dateOfBirth,
                ubbId: ubbId,
                docNum: Number(docNum),
                location: {
                    name: location,
                    asOfDate: locationAsOf
                },
                runwayCohort: runwayCohort,
                race: race,
                gpa: {
                    value: parseFloat(gpa),
                    asOfDate: gpaAsOf
                },
                fafsaReceived: fafsaReceived,
                sentToAccounting: sentToAccounting,
                newStudent: newStudent,
                archiveStudent: archiveStudent,
                academicYearStatus: [
                    {
                        academicYearId: props.activeYear.id, 
                        financialAidStatus: faStatus,
                        studentStatus: studentStatus
                    }
                ]
            }
            console.log('ADDING STUDENT', vars)
            //add student mutation
            addStudent({variables: vars})
        }
        
        props.setLockInfo(true)

    }

/*____________________________________________________________________________________________________  */


 /*__________________________________________________  DOCUMENTS INFO  __________________________________________________  */

    
    if(props.student) {
        documents = docs.map((doc, i) => <a key={i} href={doc.link} target="_blank" rel="noopener noreferrer">{doc.title}</a>)
    }

    useEffect(() => {
        if(data) {
            setDocs([...docs, data.addDocument])
        }
    }, [data])


    /* ------------------------------   ADD DOCUMENT POP UP ------------------------------   */ 
    /* ---------------  POP UP OPEN/CLOSE  ---------------  */    
    const handleOpen = () => {
        setShowPopUp(true)
    }

    const handleClose = () => {
        setShowPopUp(false)
    }


    /* ---------------  POP UP SUBMIT FUNCTION  ---------------  */  
    const handleAddDocument = () => {
        addDocument({variables: {title: docName, link: link, studentId: props.student.id}})
        handleClose()
    }

    if(error) {
        console.log('DOCUMENT MUTATION ERROR', error)
    }

    /* ---------------  POP UP BODY  ---------------  */
    let body = (
        <div className="add-document">
            <h3>Add Document</h3>
            <form className="add-doc-form">
                <label>Document Name</label>
                <TextField label="document" variant="outlined" style={{width: 375}} value={docName} onChange={e => setDocName(e.target.value)} />
                <label>Link</label>
                <TextField label="link" variant="outlined" style={{width: 375}} value={link} onChange={e => setLink(e.target.value)} />
            </form>
                <button className="doc-cancel" onClick={handleClose}>CANCEL</button>
                <button className="doc-save" onClick={handleAddDocument}>SAVE</button>
        </div>
    )
/*____________________________________________________________________________________________________  */


/*__________________________________________________  COMPONENT RENDER  __________________________________________________  */

    if(redirectToNewStudent) {
        return <Redirect to={`/studentrecord/${newStudentId}`} />
    }

    return (
        <div className='student-info'>
            <Card>
                <CardContent>

                {/* ---------------  STUDENT INFO  ---------------  */}
                    {message}
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="line-one">
                                <label>First Name</label>
                                <TextField disabled={disabled} variant="outlined" placeholder={"First Name"} value={firstName} style={{width: 200}} 
                                    onChange={e => setFirstName(e.target.value)} 
                                />
                            </div>
                            <div className="line-one">
                                <label>Last Name</label>
                                <TextField disabled={disabled} placeholder="Last Name" variant="outlined" value={lastName} style={{width: 250}} onChange={e => setLastName(e.target.value)} />
                            </div>
                            <div className="line-one">
                                <label>Student Status</label>
                                <FormControl>
                                    <NativeSelect
                                        id="studentStatus"
                                        disabled={disabled}
                                        defaultValue={studentStatus}
                                        onChange={e => setStudentStatus(e.target.value)}
                                        input={<BootstrapInput />}
                                    >
                                        <option value={studentStatus} disabled>{studentStatus}</option>
                                        {studentStatusDropOptions}
                                    </NativeSelect>
                                </FormControl>
                            </div>
                            <div className="line-one">
                            <FormControl>
                                    <label>Financial Aid Status</label>
                                    <NativeSelect
                                        id="faStatus"
                                        disabled={disabled}
                                        value={faStatus}
                                        onChange={e => setFaStatus(e.target.value)}
                                        input={<BootstrapInput />}
                                        >
                                        <option value={faStatus} disabled>{faStatus}</option>
                                        {financialAidStatusDropOptions}
                                    </NativeSelect>
                                </FormControl>
                            </div>
                        </div>
                        <div className="row">
                            <div className="line-two">
                                <label>Student ID</label>
                                <TextField disabled={disabled} placeholder="Student ID" variant="outlined" value={ubbId} onChange={e => setUbbId(e.target.value)} />
                            </div>
                            <div className="line-two">
                                <label>DOC#</label>
                                <TextField disabled={disabled} placeholder="DOC#" variant="outlined" value={docNum} onChange={e => setDocNum(e.target.value)} />
                            </div>
                            <div className="line-one">
                                <label>Date of Birth</label>
                                <TextField type="date" disabled={disabled} placeholder="Date of Birth" variant="outlined" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} />
                            </div>
                            <div className="line-two">
                                <label>Race</label>
                                <TextField disabled={disabled} placeholder="Race" variant="outlined" value={race} onChange={e => setRace(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="line-two">
                                <label>Location</label>
                                <TextField disabled={disabled} placeholder="Location" variant="outlined" value={location} onChange={e => setLocation(e.target.value)} />
                            </div>
                            <div className="line-two">
                                <label>Runway Cohort</label>
                                <TextField disabled={disabled} placeholder="Runway Cohort" variant="outlined" value={runwayCohort} onChange={e => setRunwayCohort(e.target.value)} />
                            </div>
                            <div className="line-two">
                                <label>GPA</label>
                                <TextField disabled={disabled} placeholder="GPA" variant="outlined" value={gpa} onChange={e => setGpa(e.target.value)} />
                            </div>
                            <div className="line-three"> 
                                <FormControl>
                                    <FormGroup  >
                                        <div className="checkbox">
                                            <FormControlLabel
                                                value={newStudent}
                                                control={<Checkbox color="primary" disabled={disabled} checked={newStudent} onChange={() => setNewStudent(!newStudent)}/>}
                                                label={<span style={{ fontSize: '15px' }}>New Student</span>}
                                                labelPlacement="start"
                                                onChange={e => setNewStudent(e.target.value)}
                                            />
                                        </div>
                                        <div className="checkbox">
                                            <FormControlLabel
                                                value={archiveStudent}
                                                control={<Checkbox color="primary" disabled={disabled} checked={archiveStudent} onChange={() => setArchiveStudent(!archiveStudent)}/>}
                                                style={{fontSize: 10}}
                                                label={<span style={{ fontSize: '15px' }}>Archive Student</span>}
                                                labelPlacement="start"
                                                onChange={e => setArchiveStudent(e.target.value)}
                                            />
                                        </div>
                                    </FormGroup>
                                </FormControl>
                            </div>
                        </div>
                            <div className="row">
                                <div className="line-one">
                                    <label>Location as Of:</label>
                                    <TextField type="date" disabled={disabled} placeholder="Location as Of" variant="outlined" value={locationAsOf} onChange={e => setLocationAsOf(e.target.value)} />
                                </div>
                                <div className="line-one">
                                    <label>GPA as Of:</label>
                                    <TextField type="date" disabled={disabled} placeholder="GPA as Of" variant="outlined" value={gpaAsOf} onChange={e => setGpaAsOf(e.target.value)} />
                                </div>
                            </div>
                    <div className='scc'>
                        <FormControl>
                            <FormLabel><h4 className="scc-title"><strong>SCC Use Only</strong></h4></FormLabel>
                            <FormGroup>
                                <div className="scc-row">
                                <FormControlLabel
                                    value={fafsaReceived}
                                    control={<Checkbox color="primary" disabled={disabled} checked={fafsaReceived} onChange={() => setFafsaReceived(!fafsaReceived)} />}
                                    label={<span style={{ fontSize: '20px' }}>FAFSA Received</span>}
                                    labelPlacement="start"
                                    onChange={e => setFafsaReceived(e.target.value)}
                                />
                                </div>
                                <div className="scc-row">
                                <FormControlLabel
                                    value={readyToAward}
                                    control={<Checkbox color="primary" disabled={disabled} checked={readyToAward} onChange={() => setReadyToAward(!readyToAward)} />}
                                    label={<span style={{ fontSize: '20px' }}>Ready to Award</span>}
                                    labelPlacement="start"
                                    onChange={e => setReadyToAward(e.target.value)}
                                />
                                </div>
                                <div className="scc-row">
                                <FormControlLabel
                                    value={sentToAccounting}
                                    control={<Checkbox color="primary" disabled={disabled} checked={sentToAccounting} onChange={() => setSentToAccounting(!sentToAccounting)} />}
                                    label={<span style={{ fontSize: '20px' }}>Sent to Accounting</span>}
                                    labelPlacement="start"
                                    onChange={e => setSentToAccounting(e.target.value)}
                                />
                                </div>
                            </FormGroup>
                        </FormControl>
                    </div>
                </form>
                
                {/* ---------------  DOCUMENTS  ---------------  */ }
                    <div>
                        <Card className={classes.root + " documents"}>
                                <div className='card-header'>Documents</div>
                            <CardContent>
                                {documents}
                            </CardContent>
                        </Card>
                    </div>

                { /* ---------------  SAVE BUTTON FOR STUDENT INFO ---------------  */}
                    {props.lockInfo ? '' : <SquareButton className="save-si" text="SAVE" onClick={handleSubmit}/>}

                { /* ---------------  POP UP  ---------------  */}
                    <PopUp 
                        body={body} 
                        showPopUp={showPopUp}
                        open={showPopUp}
                        onClose={handleClose}
                        handleOpen={handleOpen}
                    /> 
                </CardContent>
            </Card>
            <RoundButton className="round-button-si" onClick={handleOpen} />
            
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        "border-radius": "0",
        overflow: "scroll"
    }
  });


const BootstrapInput = withStyles((theme) => ({
root: {
    'label + &': {
        marginTop: theme.spacing(0),
        // marginBottom: '20px'
        borderColor: '#2a2e32',
    },
    },
    input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 186,
    height: 40,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
        'Roboto',
    ].join(','),
    '&:focus': {
        borderRadius: 4,
        borderColor: '#2a2e32',
        boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2);',
    },
    },
}))(InputBase);


export default StudentInfo
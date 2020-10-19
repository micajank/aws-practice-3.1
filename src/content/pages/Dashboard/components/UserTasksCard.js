import React, { useEffect, useState } from 'react'

//material ui
import { Chip } from '@material-ui/core';
import { FormControl } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DoneIcon from '@material-ui/icons/Done'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FlagIcon from '@material-ui/icons/Flag';
import FlagOutlined from '@material-ui/icons/FlagOutlined'
import InputBase from '@material-ui/core/InputBase'
import NativeSelect from '@material-ui/core/NativeSelect'
import TextField from '@material-ui/core/TextField';

//components
import PopUp from '../../../Reusable_Components/PopUp'
import RoundButton from '../../../Reusable_Components/RoundButton';
import ReactTable from '../../../Reusable_Components/ReactTable'

//mutations
import { useMutation, useQuery } from '@apollo/client';
import { getStudentsQuery, getUsersSimplified } from '../../../../queries/queries'
import { addTaskMutation } from '../../../../queries/mutations'

const UserTasksCard = props => {

    // let [activeChip1, setActiveChip1] = useState(true)
    // let [activeChip2, setActiveChip2] = useState(true)
    // let [activeChip3, setActiveChip3] = useState(true)
    // let [activeChip4, setActiveChip4] = useState(true)
    // let [activeChip5, setActiveChip5] = useState(true)
    // let [activeChip6, setActiveChip6] = useState(true)
    // let [activeChip7, setActiveChip7] = useState(true)
    // let [activeChip8, setActiveChip8] = useState(true)
    let [taskNote, setTaskNote]     = useState('')
    let [dateDue, setDateDue]       = useState('')
    let [teamMember, setTeamMember] = useState('')
    let [addDoc, setAddDoc]         = useState('')
    // let [citizenship, setCitizenship] = useState('')
    // let [courseEnrollment, setCourseEnrollment] = useState('')
    // let [dataSheet, setDataSheet] = useState('')
    // let [dueDate, setDueDate] = useState('')
    // let [fafsa, setFafsa] = useState('')
    // let [firstName, setFirstName] = useState('')
    let [flag, setFlag] = useState(false)
    // let [lastName, setLastName] = useState('')
    // let [otherCourse, setOtherCourse] = useState('')
    // let [otherFa, setOtherFa] = useState('')
    // let [reimbursement, setReimbursement] = useState('')
    // let [selectiveService, setSelectiveService] = useState('')
    let [showPopUp, setShowPopUp] = useState(false)
    let [studentId, setStudentId] = useState('')
    // let [taskDetail, setTaskDetail] = useState('')
    const [addTask, {data, loading, error}] = useMutation(addTaskMutation)

    let documents = ["FAFSA", "Data Sheet", "Citizenship", "Selective Service", "Course Enrollment", "Reimbursement", "Other - FA", "Other - CE"]

    // useEffect(() => {
    //     // let data = {
    //     // setFirstName,
    //     // setLastName,
    //     // setTeamMember,
    //     // setDueDate,
    //     // setTaskDetail
    //     // }
    //     if (data) {
    //         console.log('Line 62', props.task)
    //         // props.task(data)
    //     }
    // }, [data])

    // if (error) {
    //     console.log("Error", error)
    // }

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
            width: 180,
            height: 48,
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
        
        const useStyles = makeStyles((theme) => ({
            margin: {
            margin: theme.spacing(1),
        },
    }));
    
    const classes = useStyles()

    
    const users = useQuery(getUsersSimplified) // has three properties: loading, error, and data.
    // Set the users data to a variable if there is any. Otherwise, send a blank array.
    var usersData = (users.data) ? users.data.users : []
    
    let {loading: loadingS, error: errorS, data: dataS} = useQuery(getStudentsQuery)
    console.log("LINE 120", dataS)

    if (loadingS) return <p>Loading...</p>

    if (errorS) {
        // console.log(error)
        return <p>Error :(</p>
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Team Member Data:", teamMember)
        addTask({variables: {
            flag:           flag, //Boolean
            userId:         teamMember, //ID
            document:       addDoc, //String; the "chips"
            studentId:      studentId, //ID
            assignedDate:   new Date(), //Date, as a string
            dueDate:        dateDue, //Date, as a string
            completed:      false, //Boolean, false by default
            completedDate:  null, //Date, null by default
            detail:         taskNote, //String, the note describing the task
        }})
        setShowPopUp(false)
        // console.log('Line 116', task({variables: {flag: flag, userId: props.user.id, firstName: firstName, lastName: lastName, teamMember: teamMember, dueDate: dueDate, taskDetail: taskDetail}}))
        // task(props.task.data)
    }

     // Change the currently selected document for a new task
     const addDocumentChange = (document) => {
        setAddDoc(document)
    }
    // The document chips for new tasks
    let addDocChips = documents.map(d => {
        return addDoc != d ? <Chip label={d} className="task-chip-unselected" style={{marginRight: 10, marginBottom: 10}} onClick={() => addDocumentChange(d)} /> : <Chip label={d} className="task-chip-selected" style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} />

    })

    // const handleClick1 = () => {
    //     console.log('clicked')
    //     if (activeChip1 === true) {
    //         setActiveChip1(false)
    //     } else {
    //         setActiveChip1(true)
    //     }
    // }

    // const handleClick2 = () => {
    //     if (activeChip2 === true) {
    //         setActiveChip2(false) 
    //     } else {
    //         setActiveChip2(true)
    //     }
    // }

    // const handleClick3 = () => {
    //     if (activeChip3 === true) {
    //         setActiveChip3(false) 
    //     } else {
    //         setActiveChip3(true)
    //     }
    // }

    // const handleClick4 = () => {
    //     if (activeChip4 === true) {
    //         setActiveChip4(false) 
    //     } else {
    //         setActiveChip4(true)
    //     }
    // }

    // const handleClick5 = () => {
    //     if (activeChip5 === true) {
    //         setActiveChip5(false) 
    //     } else {
    //         setActiveChip5(true)
    //     }
    // }

    // const handleClick6 = () => {
    //     if (activeChip6 === true) {
    //         setActiveChip6(false) 
    //     } else {
    //         setActiveChip6(true)
    //     }
    // }

    // const handleClick7 = () => {
    //     if (activeChip7 === true) {
    //         setActiveChip7(false) 
    //     } else {
    //         setActiveChip7(true)
    //     }
    // }

    // const handleClick8 = () => {
    //     if (activeChip8 === true) {
    //         setActiveChip8(false) 
    //     } else {
    //         setActiveChip8(true)
    //     }
    // }

    const handleToggle = () => {
        console.log('handle flag icon toggle')
        if (flag === true) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }

    const handleOpen = () => {
        console.log('Open Task Pop-up')
        setShowPopUp(true)
    }

    const handleClose = () => {
        console.log('Closing Documents Pop-up')
        setShowPopUp(false)
    }
    

    let taskBody = (
        <div className="add-task">
            <div className="add-task">
            <div className="add-task-row-one">
                <h4>Add Task -</h4>
                <FormControl>
                    <label className="dropdown-label">What student is this task for?</label>
                    <NativeSelect id="studentId" value={studentId} onChange={e => setStudentId(e.target.value)} input={<BootstrapInput />} style={{width: 200, marginRight: 30}} >
                        <option aria-label="None" value="" />
                        {dataS.studentsCurrent.map(student => {
                            return <option value={student.id}>{student.firstName} {student.lastName}</option>
                        })}
                    </NativeSelect>
                </FormControl>
            </div>
            <div className="task-flag">
                {flag ? <FlagIcon onClick={handleToggle} /> : <FlagOutlined onClick={handleToggle} />}
            </div>
            <div className="add-task-row-two">
                <FormControl>
                    <label className="dropdown-label">Who will be completing the task?</label>
                    <NativeSelect id="teamMember" value={teamMember} onChange={e => setTeamMember(e.target.value)} input={<BootstrapInput />} style={{width: 200, marginRight: 30}} >
                        <option aria-label="None" value="" />
                        {usersData.map(user => {
                            return <option value={user.id}>{user.firstName} {user.lastName}</option>
                        })}
                    </NativeSelect>
                </FormControl>
                <FormControl>
                    <label className="dropdown-label">When should the task be completed by?</label>
                    <TextField id="dueDate"
                        variant="outlined"
                        type="date"
                        value={dateDue}
                        onChange={e => setDateDue(e.target.value)}
                        defaultValue=""
                        InputLabelProps={{ shrink: true }}
                    />
                </FormControl>
            </div>
            <div className="add-task-row-three">
                <div className="add-task-note">
                    <label>What needs to be completed?</label>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={8}
                        variant="outlined"
                        style={{width: 300, marginRight: 5}}
                        value={taskNote}
                        onChange={e => setTaskNote(e.target.value)}
                    />
                </div>
                <div className="add-task-doc">
                    <label>What type of document is the task related to?</label>
                    {/* {chips} */}
                    {addDocChips}
                </div>
            </div>
            <button className="task-cancel" onClick={handleClose}>CANCEL</button>
            <button className="task-save" onClick={handleSubmit}>ADD TASK</button>
            </div>
        </div>
    )

    return(
        <div className="my-tasks">
            <Card className={classes.root}>
                <div className="card-header">My Tasks</div>
                <CardContent className={classes.content}>
                <div className="task-table-dashboard">
                <ReactTable data = {props.tasks} columnsForTable = {columnsForTable} />
                </div>
                <PopUp 
                    body={taskBody} 
                    showPopUp={showPopUp}
                    open={showPopUp}
                    onClose={handleClose}
                    handleOpen={handleOpen}
                /> 
                </CardContent>
            </Card>
                <RoundButton className="round-button-dashboard-task" onClick={handleOpen} />
        </div>
    )
}

let columnsForTable = [
    {
        Header:()=><h3 className="my_custom_class"><FlagOutlined style={{height: 30, width: 30}} /> </h3>,
        accessor: 'flag'
    },
    {
        Header:()=><h3 className="my_custom_class">Last Name </h3>,
        accessor: 'lastName'
    },
    {
        Header:()=><h3 className="my_custom_class">First Name </h3>,
        accessor: 'firstName'
    },
    {
        Header:()=><h3 className="my_custom_class">Student ID </h3>,
        accessor: 'ubbId'
    },
    {
        Header:()=><h3 className="my_custom_class">Document </h3>,
        accessor: 'document'
    },
    {
        Header:()=><h3 className="my_custom_class">Due <ExpandMoreIcon fontSize="small" /></h3>,
        accessor: 'dueDate'
    },
    {
        Header:()=><h3 className="my_custom_class">Task in Detail </h3>,
        accessor: 'detail'
    }
]

export default UserTasksCard
import React, { useState, useEffect } from 'react'
import {useLazyQuery, useMutation, useQuery} from '@apollo/client'
import Moment from 'react-moment'

// Test commit

//material ui
import {Avatar, Chip} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import FlagOutlined from '@material-ui/icons/FlagOutlined'
import FlagIcon from '@material-ui/icons/Flag'
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect'
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'

//components
import AccordianDivider from './AccordianDivider'

import EditPopUp from '../../../Reusable_Components/EditPopUp'
import PopUp from '../../../Reusable_Components/PopUp'
import ReactTable from '../../../Reusable_Components/ReactTable'
import RoundButton from '../../../Reusable_Components/RoundButton'

// Queries and Mutations
import { getStudentTasks, getUsersSimplified } from '../../../../queries/queries'
import { addTaskMutation } from '../../../../queries/mutations'

const StudentTasks2 = props => {

    /**
     * CHIPS FOR CREATING NEW TASKS
     */
    let [activeChip1, setActiveChip1] = useState(true)
    let [activeChip2, setActiveChip2] = useState(true)
    let [activeChip3, setActiveChip3] = useState(true)
    let [activeChip4, setActiveChip4] = useState(true)
    let [activeChip5, setActiveChip5] = useState(true)
    let [activeChip6, setActiveChip6] = useState(true)
    let [activeChip7, setActiveChip7] = useState(true)
    let [activeChip8, setActiveChip8] = useState(true)

    /**
     * CHIPS FOR EDITING PREVIOUS TASKS
     */
    let [activeEditChip1, setActiveEditChip1] = useState(true)
    let [activeEditChip2, setActiveEditChip2] = useState(true)
    let [activeEditChip3, setActiveEditChip3] = useState(true)
    let [activeEditChip4, setActiveEditChip4] = useState(true)
    let [activeEditChip5, setActiveEditChip5] = useState(true)
    let [activeEditChip6, setActiveEditChip6] = useState(true)
    let [activeEditChip7, setActiveEditChip7] = useState(true)
    let [activeEditChip8, setActiveEditChip8] = useState(true)

    /**
     * OTHER STATES
     * 
     * Thought: Are the Document Variables necessary if their values aren't being set?
     */
    let [flag, setFlag]             = useState(false)
    let [editFlag, setEditFlag]     = useState(false)
    let [documents, setDocuments]   = useState('')
    let [taskNote, setTaskNote]     = useState('')
    let [dateDue, setDateDue]       = useState('')
    let [showPopUp, setShowPopUp]   = useState(false)
    let [editPopUp, setEditPopUp]   = useState(false)
    let [teamMember, setTeamMember] = useState('')
    let [usersList, setUsersList]   = useState([])

    const [getStudentTasksQuery, {loading, error, data}] = useLazyQuery(getStudentTasks)
    const [addTask, {taskData, taskError}] = useMutation(addTaskMutation)
    const users = useQuery(getUsersSimplified) // has three properties: loading, error, and data.
    if (users.data) var usersData = users.data.users
    else var usersData = []

    if(props.student) {
        var taskTitle = <h4 className="add-class-title" style={{width: 300, marginRight: 5}}>Add Task for {props.student.firstName} {props.student.lastName}</h4>
    } else {
        var taskTitle = <h4 className="add-class-title" style={{width: 300, marginRight: 5}}>NO STUDENT SELECTED</h4>
    }

    useEffect(() => {
        if(props.student) {
            getStudentTasksQuery({
                variables: {id: props.student.id}
            })
        }   
    },[props.student])

    console.log('STUDENT?', props.student)
    if (loading) return <p>Loading...</p>
    if (error) {
        console.log(error)
        return <p>Error fetching data :(</p> 
    }

        
    let completeTableContent
    let incompleteTableContent
    
    if(!data || !data.studentTasks.length) {
        completeTableContent = <p>No completed tasks yet!</p>
        incompleteTableContent = <p>Yay! No incomplete tasks!</p>
    } else {

        console.log('🚣🏻‍♀️student task data', data)

        let incompleteTasks = mapData(data.studentTasks.filter(task => !task.completed))
        let completeTasks = mapData(data.studentTasks.filter(task => task.completed))
    
        //made this a function here so i could pass it whether it is in the complete or incomplete table, because the headers change accordingly (see line 53)
            //this can usually just be a variable i.e. columnsForTable = [{header: blah, accessor: blah}, etc..]
        
        // TODO: Fix the last column being wrapped around
            // 
        const columnsForTable = (subtitle) => {
            return (
                [
                    {
                        Header: <FlagOutlined />,
                        accessor: 'flag'
                    },
                    {
                        Header: 'Team M.',
                        accessor: 'user'
                    },
                    {
                        Header: 'Document',
                        accessor: 'document'
                    },
                    {
                        Header: subtitle === 'Complete' ? 'Completed' : 'Due',
                        accessor: subtitle === 'Complete' ? 'completedDate' : 'dueDate'
                    },
            
                    {
                        Header: 'Assigned',
                        accessor: 'assignedDate'
                    },
                    {
                        Header: 'Task in detail',
                        accessor: 'detail'
                    },
                    {
                        Header: 'Edit Task',
                        accessor: 'edit'
                    }
                ]
            )
        } 
    
        let tableClassNames = {
            headerRow: 'accordian-task__row',
            listItem: 'accordian-task__row task__item'
        }
            if(completeTasks.length) {
                completeTableContent = (
                    <ReactTable 
                        data={completeTasks} 
                        columnsForTable={columnsForTable("Complete")} 
                        classNames={tableClassNames}
                    />
                )
            }
    

            if(incompleteTasks.length) {
                incompleteTableContent = (
                    <ReactTable 
                        data={incompleteTasks} 
                        columnsForTable={columnsForTable("Incomplete")} 
                        classNames={tableClassNames}
                    />
                )
            }
    } 

    /**
     * EDIT TASK HANDLERS
     */
    const handleEditClick1 = () => {
        console.log('clicked')
        if (activeEditChip1 === true) {
            setActiveEditChip1(false)
        } else {
            setActiveEditChip1(true)
        }
    }
    const handleEditClick2 = () => {
        if (activeEditChip2 === true) {
            setActiveEditChip2(false) 
        } else {
            setActiveEditChip2(true)
        }
    }
    const handleEditClick3 = () => {
        if (activeEditChip3 === true) {
            setActiveEditChip3(false) 
        } else {
            setActiveEditChip3(true)
        }
    }
    const handleEditClick4 = () => {
        if (activeEditChip4 === true) {
            setActiveEditChip4(false) 
        } else {
            setActiveEditChip4(true)
        }
    }
    const handleEditClick5 = () => {
        if (activeEditChip5 === true) {
            setActiveEditChip5(false) 
        } else {
            setActiveEditChip5(true)
        }
    }
    const handleEditClick6 = () => {
        if (activeEditChip6 === true) {
            setActiveEditChip6(false) 
        } else {
            setActiveEditChip6(true)
        }
    }
    const handleEditClick7 = () => {
        if (activeEditChip7 === true) {
            setActiveEditChip7(false) 
        } else {
            setActiveEditChip7(true)
        }
    }
    const handleEditClick8 = () => {
        if (activeEditChip8 === true) {
            setActiveEditChip8(false) 
        } else {
            setActiveEditChip8(true)
        }
    }
    
    /**
     * NEW ADD TASK HANDLERS
     * If doc state is *inactive, remove from docs state and set *active; vice versa
     */
    const handleFafsa = () => {
        console.log(documents)
        if (activeChip1 === true) {
            setDocuments(documents + 'fafsa,')
            setActiveChip1(false)
        } else {
            setDocuments(documents.replace('fafsa,',''))
            setActiveChip1(true)
        }
    }
    const handleDataSheet = () => {
        if(activeChip2 === true) {
            setDocuments(documents + 'dataSheet,')
            setActiveChip2(false)
        } else {
            setDocuments(documents.replace('dataSheet,',''))
            setActiveChip2(true)
        }
    }
    const handleCitizenship = () => {
        if(activeChip3 === true) {
            setDocuments(documents + 'citizenship,')
            setActiveChip3(false)
        } else {
            setDocuments(documents.replace('citizenship,',''))
            setActiveChip3(true)
        }
    }
    const handleSelectiveService = () => {
        if(activeChip4 === true) {
            setDocuments(documents + 'selectiveService,')
            setActiveChip4(false)
        } else {
            setDocuments(documents.replace('selectiveService,',''))
            setActiveChip4(true)
        }
    }
    const handleCourseEnrollment = () => {
        if(activeChip5 === true) {
            setDocuments(documents + 'courseEnrollment,')
            setActiveChip5(false)
        } else {
            setDocuments(documents.replace('courseEnrollment,',''))
            setActiveChip5(true)
        }
    }
    const handleReimbursement = () => {
        if(activeChip6 === true) {
            setDocuments(documents + 'reimbursement,')
            setActiveChip6(false)
        } else {
            setDocuments(documents.replace('reimbursement,',''))
            setActiveChip6(true)
        }
    }
    const handleOtherFA = () => {
        if(activeChip7 === true) {
            setDocuments(documents + 'otherFa,')
            setActiveChip7(false)
        } else {
            setDocuments(documents.replace('otherFa,',''))
            setActiveChip7(true)
        }
    }
    const handleOtherCE = () => {
        if(activeChip8 === true) {
            setDocuments(documents + 'otherCourse,')
            setActiveChip8(false)
        } else {
            setDocuments(documents.replace('otherCourse,',''))
            setActiveChip8(true)
        }
    }
    const clearStates = () => {
        setActiveChip1(true)
        setActiveChip2(true)
        setActiveChip3(true)
        setActiveChip4(true)
        setActiveChip5(true)
        setActiveChip6(true)
        setActiveChip7(true)
        setActiveChip8(true)
        setDocuments('')
    }

    /**
     * OTHER HANDLERS
     */
    const handleOpen = () => {
        setShowPopUp(true)
    }
    const handleClose = () => {
        setShowPopUp(false)
    }
    const handleEditOpen = () => {
        setEditPopUp(true)
    }
    const handleEditClose = () => {
        setEditPopUp(false)
    }
    const handleEditSave = () => {
        console.log('Edit save button was clicked')
    }
    const handleEditDelete = () => {
        console.log('Edit delete button was clicked')
    }
    const handleToggle = () => {
        console.log('handle flag icon toggle')
        if (flag === true) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }
    const handleEditToggle = () => {
        console.log('handle flag icon toggle')
        if (editFlag === true) {
            setEditFlag(false)
        } else {
            setEditFlag(true)
        }
    }

    /**
     * MUTATION FUNCTIONS
     */
    const newTaskSubmit = (e) => {
        addTask({variables: {
            flag:           flag, //Boolean
            userId:         teamMember, //ID
            document:       documents, //String; the "chips"
            studentId:      props.student.id, //ID
            assignedDate:   new Date(), //Date, as a string
            dueDate:        dateDue, //Date, as a string
            completed:      false, //Boolean, false by default
            completedDate:  null, //Date, null by default
            detail:         taskNote, //String, the note describing the task
        }})
        setShowPopUp(false)
    }
    const handleEdit = (row) => {

    }
    const editTaskSubmit = (e) => {

    }
    

    // let chips = ["FAFSA", "Data Sheet", "Citizenship / SSN", "Selective Service", "Course Enrollment", "Reimbursement", "Other - Financial Aid", "Other - Course Enrollment"]
    //     chips.map((chip, i) => {
    //         return (
    //             <Chip lable={chip}
    //                 // icon={<DoneIcon />} 
    //                 key={i} 
    //                 // style={{marginRight: 10, marginBottom: 10}}
    //                 onClick={handleClick}
    //                 className={chip.activeChip ? <Chip label={chip} /> : <Chip label={chip} value={chip} style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} onClick={handleClick} /> }
    //             />
    //         )
    //     })

    let editBody = (
        <div className="edit-task-pop-up">
            <h4 className="edit-task-title">Task Details - Edit</h4>
            <div className="edit-flag">
                {editFlag ? <FlagIcon onClick={handleEditToggle} /> : <FlagOutlined onClick={handleEditToggle} />}
            </div>
            <h6 className="edit-task-title">Due Date: </h6>
            <br />
            <FormControl>
                <label className="dropdown-label">Team Member</label>
                <NativeSelect
                id="teamMember"
                value={teamMember}
                onChange={e => setTeamMember(e.target.value)}
                input={<BootstrapInput />}
                style={{width: 200, marginRight: 30}}
                >
                <option aria-label="None" value="" />
                <option value="">Test</option>
                <option value="">Test</option>
                <option value="">Test</option>
                </NativeSelect>
            </FormControl>
            <h6 className="edit-task-title">Student Name: </h6>
            <h6 className="edit-task-title">Student ID: </h6>
            <h6 className="edit-task-title">DOC#: </h6>
            <h6 className="edit-task-title">FA Status: </h6>
            <div className="edit-task-note">
                <h6>Task in detail: </h6>
                <TextField
                    id="outlined-multiline-static"
                    // label="Note"
                    multiline
                    rows={8}
                    variant="outlined"
                    style={{width: 400, marginRight: 30}}
                />
            </div>
            <h6 className="edit-task-title">Task Document: </h6> 
            {activeEditChip1 ? <Chip label="FAFSA"                      style={{marginRight: 10, marginBottom: 10}} onClick={handleEditClick1} /> : <Chip label="FAFSA"                     style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} onClick={handleEditClick1} />}
            {activeEditChip2 ? <Chip label="Data Sheet"                 style={{marginRight: 10, marginBottom: 10}} onClick={handleEditClick2} /> : <Chip label="Data Sheet"                style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} onClick={handleEditClick2} />}
            {activeEditChip3 ? <Chip label="Citizenship / SSN"          style={{marginRight: 10, marginBottom: 10}} onClick={handleEditClick3} /> : <Chip label="Citizenship / SSN"         style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} onClick={handleEditClick3} />}
            {activeEditChip4 ? <Chip label="Selective Service"          style={{marginRight: 10, marginBottom: 10}} onClick={handleEditClick4} /> : <Chip label="Selective Service"         style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} onClick={handleEditClick4} />}
            {activeEditChip5 ? <Chip label="Course Enrollment"          style={{marginRight: 10, marginBottom: 10}} onClick={handleEditClick5} /> : <Chip label="Course Enrollment"         style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} onClick={handleEditClick5} />}
            {activeEditChip6 ? <Chip label="Reimbursment"               style={{marginRight: 10, marginBottom: 10}} onClick={handleEditClick6} /> : <Chip label="Reimbursment"              style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} onClick={handleEditClick6} />}
            {activeEditChip7 ? <Chip label="Other - Financial Aid"      style={{marginRight: 10, marginBottom: 10}} onClick={handleEditClick7} /> : <Chip label="Other - Financial Aid"     style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} onClick={handleEditClick7} />}
            {activeEditChip8 ? <Chip label="Other - Course Enrollment"  style={{marginRight: 10, marginBottom: 10}} onClick={handleEditClick8} /> : <Chip label="Other - Course Enrollment" style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} onClick={handleEditClick8} />}    
            <div className="edit-buttons">
                <button className="edit-task-cancel" onClick={handleEditClose}>CLOSE</button>
                <button className="edit-task-save" onClick={handleEditSave}>SAVE</button>
            </div>
            <div className="edit-delete">
                <button className="edit-task-delete" onClick={handleEditDelete}>DELETE TASK</button>
            </div>
        </div>
    )

    let body = (
        <div className="add-task">
            <div className="add-task-row-one">
                {taskTitle}
                {/* <EditIcon 
                    style={{marginLeft: 200}}
                    onClick={openEditPopUp}
                /> */}
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
                        // label="Note"
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
                    {activeChip1 ? <Chip label="FAFSA"                      style={{marginRight: 10, marginBottom: 10}} onClick={handleFafsa} /> :              <Chip label="FAFSA"                     style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} onClick={handleFafsa} />}
                    {activeChip2 ? <Chip label="Data Sheet"                 style={{marginRight: 10, marginBottom: 10}} onClick={handleDataSheet} /> :          <Chip label="Data Sheet"                style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} onClick={handleDataSheet} />}
                    {activeChip3 ? <Chip label="Citizenship / SSN"          style={{marginRight: 10, marginBottom: 10}} onClick={handleCitizenship} /> :        <Chip label="Citizenship / SSN"         style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} onClick={handleCitizenship} />}
                    {activeChip4 ? <Chip label="Selective Service"          style={{marginRight: 10, marginBottom: 10}} onClick={handleSelectiveService} /> :   <Chip label="Selective Service"         style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} onClick={handleSelectiveService} />}
                    {activeChip5 ? <Chip label="Course Enrollment"          style={{marginRight: 10, marginBottom: 10}} onClick={handleCourseEnrollment} /> :   <Chip label="Course Enrollment"         style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} onClick={handleCourseEnrollment} />}
                    {activeChip6 ? <Chip label="Reimbursment"               style={{marginRight: 10, marginBottom: 10}} onClick={handleReimbursement} /> :      <Chip label="Reimbursment"              style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} onClick={handleReimbursement} />}
                    {activeChip7 ? <Chip label="Other - Financial Aid"      style={{marginRight: 10, marginBottom: 10}} onClick={handleOtherFA} /> :            <Chip label="Other - Financial Aid"     style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} onClick={handleOtherFA} />}
                    {activeChip8 ? <Chip label="Other - Course Enrollment"  style={{marginRight: 10, marginBottom: 10}} onClick={handleOtherCE} /> :            <Chip label="Other - Course Enrollment" style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} onClick={handleOtherCE} />}    
                </div>
            </div>
            <button className="task-cancel" onClick={handleClose}>CANCEL</button>
            <button className="task-save" onClick={newTaskSubmit} disabled={!props.lockInfo}> {props.student ? "ADD TASK" : "CANNOT ADD"} </button>
        </div>
    )
        

    return (
        <div>
            <PopUp 
                body={body} 
                showPopUp={showPopUp}
                open={showPopUp}
                onClose={handleClose}
                handleOpen={handleOpen}
            /> 
            <EditIcon className="edit-task" style={{color: 'white'}} onClick={handleEditOpen} />
            <EditPopUp
                body={editBody}
                editPopUp={editPopUp}
                open={editPopUp}
                onClose={handleEditClose}
                handleOpen={handleEditOpen}
            />
            <RoundButton className='round-button-record-tasks' onClick={handleOpen}/>
            <AccordianDivider 
                subtitle="Incomplete" 
                content={incompleteTableContent}
                headerBackground={"#0094BC"}
            />
            <AccordianDivider 
                subtitle="Complete" 
                content={completeTableContent}
                headerBackground={"#0094BC"}
            />
        </div>
    )
}

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


const mapData = (data) => {
    return data.map(d => {
        return {
                flag:           d.flag ? <FlagIcon /> : '',
                user:           <Chip size="small" avatar={<Avatar>{d.user.avatar}</Avatar>} label={d.user.firstName} />,
                document:       <Chip size="small" label={d.document} />,
                dueDate:        d.dueDate ? <Moment format="MM/DD/YY">{d.dueDate}</Moment> : '',
                assignedDate:   d.dueDate ? <Moment format="MM/DD/YY">{d.assignedDate}</Moment> : '',
                completedDate:  d.completedDate ? <Moment format="MM/DD/YY">{d.completedDate}</Moment> : '',
                detail:         <div className="task__detail-ellipsis">{d.detail}</div>,
                edit:           <button> Edit </button> // onClick={() => handleEdit(row.original)}
            }
    })
}

export default StudentTasks2

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { CSVLink } from "react-csv";

//material UI
import DoneIcon from '@material-ui/icons/Done'
import EditIcon from '@material-ui/icons/Edit'
import FlagIcon from '@material-ui/icons/Flag'
import FlagOutlined from '@material-ui/icons/FlagOutlined'
import GetAppIcon from '@material-ui/icons/GetApp';
import {FormControl, InputLabel, Input, InputAdornment, Avatar, Chip} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import NativeSelect from '@material-ui/core/NativeSelect'
// import SearchOutlined from '@material-ui/icons/SearchOutlined'
import TextField from '@material-ui/core/TextField'

//queries
import { useMutation, useQuery } from '@apollo/client'
import { getStudentsQuery, getTasksQuery, getUsersSimplified }  from '../../../queries/queries'

// mutations
import { addTaskMutation, completeTaskMutation, updateTaskMutation, deleteTaskMutation } from '../../../queries/mutations'

//components
import EditPopUp from '../../Reusable_Components/EditPopUp'
import PopUp from '../../Reusable_Components/PopUp'
import TaskBox from './components/TaskBox'
import SearchBar from '../../Reusable_Components/SearchBar'
import RoundButton from '../../Reusable_Components/RoundButton'

const TaskDatabase = props => {

    const [activeTab, setActiveTab] = useState('All')
    let [addDoc, setAddDoc]         = useState('')
    let [dueDate, setDueDate] = useState('')
    let [firstName, setFirstName] = useState('')
    let [flag, setFlag] = useState(false)
    let [lastName, setLastName] = useState('')
    let [showPopUp, setShowPopUp] = useState(false)
    let [teamMember, setTeamMember] = useState('')
    let [taskNote, setTaskNote]     = useState('')
    let [dateDue, setDateDue]       = useState('')
    let [completed, setCompleted] = useState(false)
    let [studentId, setStudentId] = useState('')
    // const [searchInput, setSearchInput] = useState('')
    // let [activeChip1, setActiveChip1] = useState(true)
    // let [activeChip2, setActiveChip2] = useState(true)
    // let [activeChip3, setActiveChip3] = useState(true)
    // let [activeChip4, setActiveChip4] = useState(true)
    // let [activeChip5, setActiveChip5] = useState(true)
    // let [activeChip6, setActiveChip6] = useState(true)
    // let [activeChip7, setActiveChip7] = useState(true)
    // let [activeChip8, setActiveChip8] = useState(true)
    // let [citizenship, setCitizenship] = useState('')
    // let [courseEnrollment, setCourseEnrollment] = useState('')
    // let [dataSheet, setDataSheet] = useState('')
    // let [fafsa, setFafsa] = useState('')
    // let [otherCourse, setOtherCourse] = useState('')
    // let [otherFa, setOtherFa] = useState('')
    // let [reimbursement, setReimbursement] = useState('')
    // let [selectiveService, setSelectiveService] = useState('')

    // EDIT STATES
    let [editFlag, setEditFlag]             = useState(false)
    let [editTaskNote, setEditTaskNote]     = useState('')
    let [editDateDue, setEditDateDue]       = useState('')
    let [editPopUp, setEditPopUp]           = useState(false)
    let [editTeamMember, setEditTeamMember] = useState('')
    let [editDoc, setEditDoc]               = useState('')
    let [currentEdit, setCurrentEdit]       = useState()
    let [student, setStudent]               = useState('')

    const [updateTask] = useMutation(updateTaskMutation)
    const [deleteTask] = useMutation(deleteTaskMutation)
    const [completeTask] = useMutation(completeTaskMutation)
    const users = useQuery(getUsersSimplified) // has three properties: loading, error, and data.

    const [addTask] = useMutation(addTaskMutation)
    // Set the users data to a variable if there is any. Otherwise, send a blank array.
    var usersData = (users.data) ? users.data.users : []
    let documents = ["FAFSA", "Data Sheet", "Citizenship", "Selective Service", "Course Enrollment", "Reimbursement", "Other - FA", "Other - CE"]

    let {loading: loadingS, error: errorS, data: dataS} = useQuery(getStudentsQuery)
    console.log("LINE 85", dataS)

    useEffect(() => {
        props.setActiveTab('Tasks')
    })

    const {loading, error, data} = useQuery(getTasksQuery)
    // console.log('line 62', data)

    if (loading) return <p>Loading...</p>
    if (error) {
        console.log(error)
        return <p>Error fetching data :(</p> 
        }

    //helper functions
    const mapData = (data) => {
        return data.map(d => {
            return {
                    flag: d.flag ?  <FlagIcon /> : '',
                    userId: d.user.id,
                    user:<Chip
                            size="small"
                            avatar={<Avatar id={d.user.color} style={{fontWeight: 600}}>{d.user.avatar}</Avatar>}
                            label={d.user.firstName}
                        />,
                    document: <Chip
                                size="small"
                                label={d.document}
                            />,
                    lastName: <Link to={`/studentrecord/${d.student.id}`}>{ d.student.lastName }</Link>,
                    firstName: <Link to={`/studentrecord/${d.student.id}`}>{ d.student.firstName }</Link>,
                    docNum: <Link to={`/studentrecord/${d.student.id}`}>{ d.student.docNum }</Link>,
                    ubbId: <Link to={`/studentrecord/${d.student.id}`}>{ d.student.ubbId }</Link>,
                    dueDate: d.dueDate ? <Moment format="MM/DD/YY">{d.dueDate}</Moment> : '',
                    assignedDate: d.dueDate ? <Moment format="MM/DD/YY">{d.assignedDate}</Moment> : '',
                    completedDate: d.completedDate ? <Moment format="MM/DD/YY">{d.completedDate}</Moment> : '',
                    detail: <div className="task__detail-ellipsis">{d.detail}</div>,
                    edit:           <EditIcon onClick={() => handleEditOpen(d)} />
                }
        })
    }

    let incompleteTasks = mapData(data.tasks.filter(task => !task.completed))
    let completeTasks = mapData(data.tasks.filter(task => task.completed))
    // let assignedIncompleteTasks = mapData(incompleteTasks.filter(task => task.user.id === props.user.id))
    //let assignedCompleteTasks = mapData(completeTasks.filter(task => task.user.id === props.user.id))
    let assignedIncompleteTasks = incompleteTasks.filter(task => (task.userId === props.user._id))
    let assignedCompleteTasks = completeTasks.filter(task => (task.userId === props.user._id))

    let allActive
    let assignedActive
    let tasks

    if (activeTab === 'All') {
        allActive = 'task-tabs__tab__active'
        assignedActive = ''
        tasks = (
            <div>
                <TaskBox 
                    // user={props.user} 
                    filter={"Total"}
                    status = {"Incomplete"}
                    tasks = {incompleteTasks}
                />
                <TaskBox 
                    // user={props.user} 
                    filter={"Total"}
                    status = {"Complete"}
                    tasks = {completeTasks}
                />
            </div>
        )
    }

    if (activeTab === 'Assigned') {
        assignedActive = "task-tabs__tab__active"
        allActive = ''

        tasks = (

            <div>
                <TaskBox 
                    // user={props.user} 
                    filter={"Assigned"}
                    status = {"Incomplete"}
                    tasks={assignedIncompleteTasks}
                />

                <TaskBox 
                    // user={props.user} 
                    filter={"Assigned"}
                    status = {"Complete"}
                    tasks={assignedCompleteTasks}
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

    const handleOpen = () => {
        console.log('Open Task Pop-up')
        setShowPopUp(true)
    }

    const handleClose = () => {
        console.log('Closing Task Pop-up')
        setShowPopUp(false)
    }

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

    const addTaskSubmit = e => {
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
    }

    const handleToggle = () => {
        console.log('handle flag icon toggle')
        if (flag === true) {
            setFlag(false)
        } else {
            setFlag(true)
        }
    }
     // Change the currently selected document for a new task
     const addDocumentChange = (document) => {
        setAddDoc(document)
    }
    // The document chips for new tasks
    let addDocChips = documents.map(d => {
        return addDoc != d ? <Chip label={d} className="task-chip-unselected" style={{marginRight: 10, marginBottom: 10}} onClick={() => addDocumentChange(d)} /> : <Chip label={d} className="task-chip-selected" style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} />

    })

    // const handleSearch = () => {
    //     console.log('searching for', searchInput)
    // }

    let body = (
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
            <button className="task-save" onClick={addTaskSubmit}>ADD TASK</button>
            </div>
        </div>
    )


    /*********************
     * EDIT CHIPS AND HANDLERS
     *********************/
    const handleEditOpen = (taskData) => {
        console.log("LINE 388",taskData)
        setStudent(taskData.student)
        setEditFlag(taskData.flag)
        setEditTaskNote(taskData.detail)
        setEditDateDue(taskData.dueDate)
        setEditTeamMember(taskData.user.id)
        setEditDoc(taskData.document)
        setCurrentEdit(taskData)
        setEditPopUp(true)
    }

    // Close the box for updating existing tasks
    const handleEditClose = () => {
        setEditPopUp(false)
    }

    // Toggle whether an existing task is flagged
    const handleEditFlagToggle = () => {
        console.log('edit flag icon toggle')
        if (editFlag === true) {
            setEditFlag(false)
        } else {
            setEditFlag(true)
        }
    }

    // Change the currently selected document for an existing task
    const editDocumentChange = (document) => {
        setEditDoc(document)
    }

    const handleTaskComplete = () => {
        console.log('BUTTON CLICKED', currentEdit.id, completed)
        completeTask({variables: {
            id: currentEdit.id,
            completed: true,
            completedDate: new Date(),
        }})
        // setCompleted(true)
        setEditPopUp(false)
    }

    
    // If the page doesn't have a student's data, let the user know when attempting to add a task.
    let taskPhrase = (student) ? (`Task for ${student.firstName} ${student.lastName}`) : "NO STUDENT SELECTED"
    var taskTitle = <h4 className="add-class-title" style={{width: 300, marginRight: 5}}> {taskPhrase} </h4>
    // The document chips for existing tasks
    let editDocChips = documents.map(d => {
        return editDoc != d ?   <Chip label={d} className="task-chip-unselected" style={{marginRight: 10, marginBottom: 10}} onClick={() => editDocumentChange(d)} /> : <Chip label={d} className="task-chip-selected" style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} />
    })

     // Update an existing task
    const updateTaskSubmit = e => {
        console.log("Editing a task")
        console.log(currentEdit.id, editFlag, editTeamMember, editDoc, editDateDue, editTaskNote)
        updateTask({variables: {
            id: currentEdit.id,
            flag: editFlag,
            userId: editTeamMember, 
            document: editDoc,
            dueDate: editDateDue,
            detail: editTaskNote
        }})
        setEditPopUp(false)
    }
    // Delete a task
    const deleteTaskSubmit = () => {
        console.log('Edit delete button was clicked')
        // Same thing as editsave but for delete
        deleteTask({variables: {
            id: currentEdit.id
        }})
        setEditPopUp(false)
    }


    /*********************
     * EDIT TASK CARD
     *********************/
    let editBody = (
        <div className="edit-task-pop-up">
            <div className="add-task-row-one">
                {taskTitle} - Edit
            </div>
            <div className="edit-flag">
                {editFlag ? <FlagIcon onClick={handleEditFlagToggle} /> : <FlagOutlined onClick={handleEditFlagToggle} />}
            </div>
            <div className="add-task-row-two">
                <FormControl>
                    <label className="dropdown-label">Who will be completing the task?</label>
                    <NativeSelect id="teamMember" value={editTeamMember} onChange={e => setEditTeamMember(e.target.value)} input={<BootstrapInput />} style={{width: 200, marginRight: 30}} >
                        <option aria-label="None" value="" />
                        {usersData.map(user => {
                            return <option value={user.id} >{user.firstName} {user.lastName}</option>
                        })}
                    </NativeSelect>
                </FormControl>
                <FormControl>
                    <label className="dropdown-label">When should the task be completed by?</label>
                    <TextField id="dueDate"
                        variant="outlined"
                        type="date"
                        value={editDateDue}
                        onChange={e => setEditDateDue(e.target.value)}
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
                        value={editTaskNote}
                        onChange={e => setEditTaskNote(e.target.value)}
                    />
                </div>
                <div className="add-task-doc">
                    <label>What type of document is the task related to?</label>
                    {/* {chips} */}
                    {editDocChips}
                </div>
            </div>
            <div className="edit-buttons">
                <button className="task-complete" onClick={handleTaskComplete}>TASK COMPLETE</button>
                <button className="edit-task-cancel" onClick={handleEditClose}>CLOSE</button>
                <button className="edit-task-save" onClick={updateTaskSubmit}>SAVE</button>
            </div>
            <div className="edit-delete">
                <button className="edit-task-delete" onClick={deleteTaskSubmit}>DELETE TASK</button>
            </div>
        </div>
    )

    const headers = [
        { label: "Team M", key: "user.firstName" },
        { label: "Document", key: "document" },
        { label: "Last Name", key: "student.lastName" },
        { label: "First Name", key: "student.firstName" },
        { label: "DOC #", key: "student.docNum" },
        { label: "UBB ID", key: "student.ubbId" },
        { label: "Due Date", key: "dueDate" },
        { label: "Assigned", key: "assignedDate" },
        { label: "Completed", key: "completedDate" },
        { label: "Detail", key: "detail" }
    ]
    
    return (
        <div className="db">
            <div className="export-tasks">
            <CSVLink data={data.tasks} headers={headers}>
                <GetAppIcon />
            </CSVLink>
            </div>

            <SearchBar />
            {/* tabs */}
            <div className='task-tabs'>
                <div className={`task-tabs__tab ${allActive}`} onClick={(e) => setActiveTab('All')}><p className='headline6'>All Tasks</p></div>
                <div className={`task-tabs__tab ${assignedActive}` } onClick={(e) => setActiveTab('Assigned')}><p className='headline6'>My Assigned Tasks</p></div>
            </div>

            {/* tasks */}
            <div className='db_background'>
                <div className="full-database">{tasks}</div>
                <RoundButton className="round-button-taskdb" onClick={handleOpen} />
                <PopUp 
                    body={body} 
                    showPopUp={showPopUp}
                    open={showPopUp}
                    onClose={handleClose}
                    handleOpen={handleOpen}
                /> 
                <EditPopUp
                body={editBody}
                editPopUp={editPopUp}
                open={editPopUp}
                onClose={handleEditClose}
                handleOpen={handleEditOpen}
            />
            </div>

        </div>
    )
}

export default TaskDatabase
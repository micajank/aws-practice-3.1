import React, { useState, useEffect } from 'react'
import {useLazyQuery, useMutation, useQuery, gql} from '@apollo/client'
import Moment from 'react-moment'
// Test commit
//material ui
import {Avatar, Chip} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import FlagOutlined from '@material-ui/icons/FlagOutlined'
import FlagIcon from '@material-ui/icons/Flag'
import Lock from '@material-ui/icons/Lock'
import LockOpen from '@material-ui/icons/LockOpen'
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
import { addTaskMutation, updateTaskMutation, deleteTaskMutation } from '../../../../queries/mutations'
const StudentTasks = props => {

    /*********************
     * STATE VARIABLES
     *********************/
     // ADD STATES
    let [flag, setFlag]             = useState(false)
    let [taskNote, setTaskNote]     = useState('')
    let [dateDue, setDateDue]       = useState('')
    let [showPopUp, setShowPopUp]   = useState(false)
    let [teamMember, setTeamMember] = useState('')
    let [addDoc, setAddDoc]         = useState('')

    // EDIT STATES
    let [editFlag, setEditFlag]             = useState(false)
    let [editTaskNote, setEditTaskNote]     = useState('')
    let [editDateDue, setEditDateDue]       = useState('')
    let [editPopUp, setEditPopUp]           = useState(false)
    let [editTeamMember, setEditTeamMember] = useState('')
    let [editDoc, setEditDoc]               = useState('')
    let [currentEdit, setCurrentEdit]       = useState()


    // OTHER VARIABLES
    let documents = ["FAFSA", "Data Sheet", "Citizenship", "Selective Service", "Course Enrollment", "Reimbursement", "Other - FA", "Other - CE"]
    /*********************
     * ADD CHIPS AND HANDLERS
     *********************/

    // Toggle whether a new task is flagged
    const handleAddFlagToggle = () => {
        console.log('add flag icon toggle')
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
    // Open the box for addingnew tasks
    const handleOpen = () => {
        setShowPopUp(true)
    }
    // Close the box for adding new tasks
    const handleClose = () => {
        setShowPopUp(false)
    }


    /*********************
     * EDIT CHIPS AND HANDLERS
     *********************/
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
    // The document chips for existing tasks
    let editDocChips = documents.map(d => {
        return editDoc != d ?   <Chip label={d} className="task-chip-unselected" style={{marginRight: 10, marginBottom: 10}} onClick={() => editDocumentChange(d)} /> : <Chip label={d} className="task-chip-selected" style={{marginRight: 10, marginBottom: 10, backgroundColor: 'lightBlue'}} icon={<DoneIcon />} />
    })

    // Open the box for updating existing tasks
    const handleEditOpen = (taskData) => {
        console.log(taskData)
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

    /*********************
     * QUERIES
     *********************/
    // Create function to gather tasks for a student and variables for said data to save to
    const [getStudentTasksQuery, {loading, error, data}] = useLazyQuery(getStudentTasks)
    // Retrive all User ID's so that tasks added can be associated with a desired user
    const users = useQuery(getUsersSimplified) // has three properties: loading, error, and data.
    // Set the users data to a variable if there is any. Otherwise, send a blank array.
    var usersData = (users.data) ? users.data.users : []

    /*********************
     * MUTATIONS
     *********************/

     // Declare the functions for creating, updating, and deleting tasks
    const [addTask] = useMutation(addTaskMutation)
    const [updateTask] = useMutation(updateTaskMutation)
    const [deleteTask] = useMutation(deleteTaskMutation)

    // Add a new task
    const addTaskSubmit = e => {
        console.log("Team Member Data:", teamMember)
        addTask({variables: {
            flag:           flag, //Boolean
            userId:         teamMember, //ID
            document:       addDoc, //String; the "chips"
            studentId:      props.student.id, //ID
            assignedDate:   new Date(), //Date, as a string
            dueDate:        dateDue, //Date, as a string
            completed:      false, //Boolean, false by default
            completedDate:  null, //Date, null by default
            detail:         taskNote, //String, the note describing the task
        }})
        setShowPopUp(false)
    }
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
     * OTHER FUNCTIONS AND VARIABLES
     *********************/

    // Returns the components each piece of task data occupies in the React Table
    const mapDataComponents = (data) => {
        return data.map(d => {
            return {
                    flag:           d.flag ? <FlagIcon /> : '',
                    user:           <Chip size="small" avatar={<Avatar>{d.user.avatar}</Avatar>} label={d.user.firstName} />,
                    document:       <Chip size="small" label={d.document} />,
                    dueDate:        d.dueDate ? <Moment format="MM/DD/YY">{d.dueDate}</Moment> : '',
                    assignedDate:   d.dueDate ? <Moment format="MM/DD/YY">{d.assignedDate}</Moment> : '',
                    completedDate:  d.completedDate ? <Moment format="MM/DD/YY">{d.completedDate}</Moment> : '',
                    detail:         <div className="task__detail-ellipsis">{d.detail}</div>,
                    edit:           <EditIcon onClick={() => handleEditOpen(d)} />
                }
        })
    }

     // Checks if there is a student associated with the page. If so, get tasks associated with them.
    useEffect(() => {
        if(props.student) {
            getStudentTasksQuery({
                variables: {id: props.student.id}
            })
        }   
    },[props.student])

    // Handlers for loading and error 
    if (loading) {
        return <p>Loading...</p>
    } else if (error) {
        console.log(error)
        return <p>Error fetching data :(</p> 
    }

    // If the page doesn't have a student's data, let the user know when attempting to add a task.
    let taskPhrase = (props.student) ? (`Task for ${props.student.firstName} ${props.student.lastName}`) : "NO STUDENT SELECTED"
    var taskTitle = <h4 className="add-class-title" style={{width: 300, marginRight: 5}}> {taskPhrase} </h4>
    /*************************************
     * COMPLETE AND INCOMPLETE TASK TABLES
     *************************************/

     // If there is data and there is at least 1 task, then continue with displaying it.
    if(data && data.studentTasks.length) {
        // Map the complete and incomplete tasks so that they can have separate accordians.
        let incompleteTasks = mapDataComponents(data.studentTasks.filter(task => !task.completed))
        let completeTasks = mapDataComponents(data.studentTasks.filter(task => task.completed))

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

        var completeTableContent = (completeTasks.length) ? (
            <ReactTable 
                data={completeTasks} 
                columnsForTable={columnsForTable("Complete")} 
                classNames={tableClassNames}
            />
        ) : <p>No completed tasks yet!</p>

        var incompleteTableContent = (incompleteTasks.length) ? (
            <ReactTable 
                data={incompleteTasks} 
                columnsForTable={columnsForTable("Incomplete")} 
                classNames={tableClassNames}
            />
        ) : <p>Yay! No incomplete tasks!</p>
    }

    /*********************
     * ADD TASK CARD
     *********************/
    let body = (
        <div className="add-task">
            <div className="add-task-row-one">
                {taskTitle}
            </div>
            <div className="task-flag">
                {flag ? <FlagIcon onClick={handleAddFlagToggle} /> : <FlagOutlined onClick={handleAddFlagToggle} />}
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
            <button className="task-save" onClick={addTaskSubmit} disabled={!props.lockInfo}> {props.student ? "ADD TASK" : "CANNOT ADD"} </button>
        </div>
    )

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
                <button className="edit-task-cancel" onClick={handleEditClose}>CLOSE</button>
                <button className="edit-task-save" onClick={updateTaskSubmit}>SAVE</button>
            </div>
            <div className="edit-delete">
                <button className="edit-task-delete" onClick={deleteTaskSubmit}>DELETE TASK</button>
            </div>
        </div>
    )
    // Bring it all together
    return (
        <div>
            <PopUp 
                body={body} 
                showPopUp={showPopUp}
                open={showPopUp}
                onClose={handleClose}
                handleOpen={handleOpen}
            /> 
            {/* <EditIcon className="edit-task" style={{color: 'white'}} onClick={handleEditOpen} /> */}
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
export default StudentTasks


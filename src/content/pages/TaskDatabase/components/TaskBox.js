import React from 'react'

//material ui
import FlagOutlined  from '@material-ui/icons/FlagOutlined'
import FilterListIcon from '@material-ui/icons/FilterList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//components
import ReactTable from '../../../Reusable_Components/ReactTable'
import RoundButton from '../../../Reusable_Components/RoundButton'

const TaskBox = props => {


    let columnsForTable = [
        {
            Header: <FlagOutlined />,
            accessor: 'flag'
        },
        {
            Header:()=><h4 className="my_custom_class">Team M.<ExpandMoreIcon fontSize="small" /></h4>,
            accessor: 'user',
        },
        {
            Header:()=><h4 className="my_custom_class">Document<FilterListIcon fontSize="small" /></h4>,
            accessor: 'document'
        },
        {
            Header:()=><h4 className="my_custom_class">Last Name<ExpandMoreIcon fontSize="small" /></h4>,
            accessor: 'lastName'
        },
        {
            Header:()=><h4 className="my_custom_class">First Name<ExpandMoreIcon fontSize="small" /></h4>,
            accessor: 'firstName'
        },
        {
            Header:()=><h4 className="my_custom_class">DOC#<ExpandMoreIcon fontSize="small" /></h4>,
            accessor: 'docNum'
        },
        {
            Header:()=><h4 className="my_custom_class">Student ID<ExpandMoreIcon fontSize="small" /></h4>,
            accessor: 'ubbId'
        },
        {
            Header: props.status === 'Complete' ? 'Completed' : ()=><h4 className="my_custom_class">Due<ExpandMoreIcon fontSize="small" /></h4>,
            accessor: props.status === 'Complete' ? 'completedDate' : 'dueDate'
        },

        {
            Header:()=><h4 className="my_custom_class">Assigned<ExpandMoreIcon fontSize="small" /></h4>,
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

    let boxClass = `box__${props.status.toLowerCase()}`
    if (!props.tasks.length) {
        boxClass=`box__${props.status.toLowerCase()}__none`
    }

    let tableClassNames = {
        headerRow: 'table-column-grid-tasks task__row task__headers',
        listItem: 'table-column-grid-tasks task__row task__item'
    }

    return (
        <div className="task-box"> 
            {/* <div className={`data_header data_header__${props.status.toLowerCase()}`}><h1 className='headline6'>{props.filter.toUpperCase()} {props.status.toUpperCase()} TASKS</h1></div> */}
            <div className="data_header"><h1 className='headline6'>{props.filter.toUpperCase()} {props.status.toUpperCase()} TASKS</h1></div>
            <div className={boxClass}> 
                {!props.tasks.length ? 
                    ( props.status === 'Incomplete' ? 
                        <p>Yay! All tasks are complete!</p> : <p>No completed tasks yet.</p> ) : 
                    <ReactTable data = {props.tasks} columnsForTable = {columnsForTable} classNames={tableClassNames}/>}
            </div>
        </div>
    )
}


export default TaskBox
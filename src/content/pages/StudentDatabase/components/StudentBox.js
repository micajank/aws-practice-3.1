import React from 'react'
// import {useTable} from 'react-table'

import FilterListIcon from '@material-ui/icons/FilterList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


//components
import ReactTable from '../../../Reusable_Components/ReactTable'
// import TaskBox from '../TaskDBComponents/TaskBox';
// import { getTasksQuery } from '../../../queries/queries';

const StudentBox = props => {

    console.log("line 9", props.student)

    // let headerClass = `data_header data_header__${props.status.toLowerCase()}`
    // let boxClass = `box box__${props.student}`


    // let data = props.student.map((student, i) => {
    //     return (
    //         {
    //             lastName: student.lastName,
    //             firstName: student.firstName,
    //             docNum: student.docNum,
    //             ubbId: student.ubbId,
    //             financialAidStatus: student.academicYearStatus.financialAidStatus,
    //             studentStatus: student.academicYearStatus.studentStatus,
    //             tasks: student.tasks,
    //             notes: student.notes
    //         }
    //     )
    // })

    let tableClassNames = {
        headerRow: 'student__row student__headers',
        listItem: 'student__row student__item'
    }

    return (
        <div className="full-database">
            <div className="label-container">
                <h1 className='headline6'>Current Students</h1>
            </div>

            <div className="student-box"> 
                <ReactTable data={props.student} columnsForTable={columnsForTable} />
            </div>
        </div>
    )
}

let columnsForTable = [
    {
        Header:()=><h3 className="my_custom_class">New <ExpandMoreIcon fontSize="small" /></h3>,
        accessor: 'new'
    },
    {
        Header:()=><h3 className="my_custom_class">Last Name <ExpandMoreIcon fontSize="small" /></h3>,
        accessor: 'lastName'
        // sortType: 'basic'
    },
    {
        Header:()=><h3 className="my_custom_class">First Name <ExpandMoreIcon fontSize="small" /></h3>,
        accessor: 'firstName'
        // sortType: 'basic'
    },
    {
        Header:()=><h3 className="my_custom_class">DOC# <ExpandMoreIcon fontSize="small" /></h3>,
        accessor: 'docNum'
    },
    {
        Header:()=><h3 className="my_custom_class">Student ID <ExpandMoreIcon fontSize="small" /></h3>,
        accessor: 'ubbId'
    },
    {
        Header:()=><h3 className="my_custom_class">FA Status <FilterListIcon fontSize="small" /></h3>, 
        accessor: 'financialAidStatus'
    },
    {
        Header:()=><h3 className="my_custom_class">Student Status <FilterListIcon fontSize="small" /></h3>,
        accessor: 'studentStatus'
    },
    {
        Header:()=><h3 className="my_custom_class">Tasks <FilterListIcon fontSize="small" /></h3>,
        accessor: 'flag',
    },
    {
        Header:()=><h3 className="my_custom_class">Notes <FilterListIcon fontSize="small" /></h3>,
        accessor: 'note'
    }
]

export default StudentBox
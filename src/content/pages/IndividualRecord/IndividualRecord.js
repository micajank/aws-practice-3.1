import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import { Dropdown } from "semantic-ui-react";
import {useQuery} from '@apollo/client'
// import DropdownSearch from '../../Reusable_Components/DropdownSearch'


//components
import StudentInfo from './components/StudentInfo'
import StudentClasses from './components/StudentClasses'
import StudentRecordAccordian from './components/StudentRecordAccordian'
import StudentTasks from './components/StudentTasks'
import SearchBar from '../../Reusable_Components/SearchBar'
import NotesCard from './components/NotesCard'

//queries
import {useLazyQuery} from '@apollo/client'
import {getStudentInfoQuery} from '../../../queries/queries'
import { getStudentsQuery } from '../../../queries/queries'

const IndividualRecord = props => {
    const [searchedStudents, setSearchedStudents] = useState(null)
    const {loading: sloading, error: serror, data: sdata} = useQuery(getStudentsQuery);

    useEffect(() => {
        props.setActiveTab('StudentRecord')
    })
    
    const { studentId } = useParams()
    const [getStudentInfo, {loading, error, data}] = useLazyQuery(getStudentInfoQuery)
    const [lockInfo, setLockInfo] = useState(studentId ? true : false)

    useEffect(() => {
        if(studentId) {
            getStudentInfo({
                variables: {id: studentId}
            })
        }   
    },[studentId])

    if (loading) return <p>Loading...</p>
    if (error) {
        console.log(error)
        return <p>Error fetching data :(</p> 
        }

    let classHeaders =  [
        'Status', 
        'Awarded', 
        'Voucher', 
        'Undetermined', 
        'Invoiced', 
        'Paid', 
        'Date ', 
        'Reimbursed',
        'Date'
    ]
    console.log("This is sdata", sdata)
    let students = sdata ? sdata.studentsCurrent.map(student => {
        return {
            key: student.id,
            value: student.firstName,
            text: <Link to={`/studentrecord/${student.id}`}> student.firstName + " " + student.lastName</Link>
            
        }
    }) : console.log("Nopers  lie 65 individrecord")
    console.log("Students from indiRecord:", students)


    return (
      <div className="student-record">
            <SearchBar 
                // dropdownStudents={students}
                // {...<Dropdown
                // placeholder="Select Country"
                // fluid
                // search
                // selection
                // options={students}
                // /> }
                // {
                //     ...<DropdownSearch />
                // }
                searchedStudents={searchedStudents} 
                setSearchedStudents={setSearchedStudents}  />

            <div className="student-heading">
                <p className="headline4">{data ? data.student.firstName + ' ' + data.student.lastName : 'ADD NEW STUDENT'}</p>
                {data ?  <Link to="/newstudent"><button className="new-student-button">NEW STUDENT</button></Link> : '' }
            </div>
            {/* Student Information ---> */}
            <StudentRecordAccordian
                content={
                    <StudentInfo 
                        student={data ? data.student : null} lockInfo={lockInfo} setLockInfo={setLockInfo} activeYear={props.activeYear} 
                        // setFetchQuery={setFetchQuery}
                    />}
                type="Student Information"
                lockInfo={lockInfo}
                setLockInfo={setLockInfo}
            />
            {/* <--- Student Information*/}



            {/* Classes -------------> */}
            <div className="student-record-classes">
                <StudentRecordAccordian 
                    content={<StudentClasses headers={classHeaders} studentId={studentId} />} 
                    type="Classes" 
                    additionalHeaders={classHeaders}
                    additionalHeadersGrid={"table-column-grid-classes-header"}
                    student={data ? data.student : null}
                />
            </div>
            {/* <--------------- Classes*/}



            {/* Tasks -------------> */}
            <StudentRecordAccordian 
                content={<StudentTasks 
                    student={data ? data.student : null} 
                    user={props.user}
                    lockInfo={lockInfo}
                />} 
                type="Tasks"
            />
            {/* <--------------- Tasks*/}



            {/* Notes -------------> */}
            <StudentRecordAccordian 
                content={<NotesCard 
                    student={data ? data.student : null} 
                    user={props.user}
                />} 
                type="Notes" 
            />
            {/* <--------------- Notes*/}


        </div>
    )
}

export default IndividualRecord
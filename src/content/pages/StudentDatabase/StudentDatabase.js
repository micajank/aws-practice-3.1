import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { CSVLink } from "react-csv";

// components
import StudentBox from './components/StudentBox'
import SearchBar from '../../Reusable_Components/SearchBar'
// import RoundButton from '../../Reusable_Components/RoundButton'

// material ui
import GetAppIcon from '@material-ui/icons/GetApp';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import NotificationsIcon from '@material-ui/icons/Notifications';

// import IndividualRecord from './IndividualRecord/IndividualRecord'

// queries
import {useQuery} from '@apollo/client'
import { getStudentsQuery } from '../../../queries/queries'


const StudentDatabase = props => {

    const [searchedStudents, setSearchedStudents] = useState(null)

    useEffect(() => {
        props.setActiveTab('StudentDatabase')
    })
    
    //useQuery hooks
    const {loading, error, data} = useQuery(getStudentsQuery)
    // console.log('line 30', data)

    if (loading) return <p>Loading...</p>

    if (error) {
        console.log(error)
        return <p>Error: {error}</p>
    }

    // console.log('Line 30', data)
    // let activeYear = data.studentsCurrent.academicYearStatus.academicYear.year
    // console.log("line 18", data)
    // let studentList = data.studentsCurrent.map((student, i) => {
    //     return (
    //         <div key={i}>
    //             <StudentBox student={student} />
    //         </div>
    //     )
    // })

    let students = data.studentsCurrent.map(student => {
        
        let flaggedTasks = student.tasks.filter(task => {
            return task.flag
        })
        let bookmarkedNotes = student.notes.filter(note => {
            return note.bookmarked
        })
            return {
                new: student.new,
                lastName: <Link to={`/studentrecord/${student.id}`}>{student.lastName}</Link>,
                firstName: <Link to={`/studentrecord/${student.id}`}>{student.firstName}</Link>,
                docNum: <Link to={`/studentrecord/${student.id}`}>{student.docNum}</Link>,
                ubbId: <Link to={`/studentrecord/${student.id}`}>{student.ubbId}</Link>,
                financialAidStatus: student.academicYearStatus[0].financialAidStatus,
                studentStatus: student.academicYearStatus[0].studentStatus,
                flag: flaggedTasks.length ? <NotificationsIcon /> : <NotificationsNoneIcon />,
                note: bookmarkedNotes.length ? <BookmarkIcon /> : <BookmarkBorderIcon />
            }
    })
    
    let studentsToSend = []
    studentsToSend = searchedStudents != null ? searchedStudents : students;
    console.log("These are the SD students:", students)
    console.log("These are the Searched students:", searchedStudents)

    const headers = [
        { label: "New", key: "new" },
        { label: "Last Name", key: "lastName" },
        { label: "First Name", key: "firstName" },
        { label: "DOC #", key: "docNum" },
        { label: "UBB ID", key: "ubbId" },
        { label: "FA Status", key: "academicYearStatus[0].financialAidStatus" },
        { label: "Student Status", key: "academicYearStatus[0].studentStatus" }
    ]

    return (
        <div className="db">
            <div className="export-students">
                <CSVLink data={data.studentsCurrent} headers={headers}>
                    <GetAppIcon />
                </CSVLink>
            </div>
            <SearchBar students={students} searchedStudents={searchedStudents} setSearchedStudents={setSearchedStudents} />
            <div className="student-tabs">
                <div className="headline6">2020-2021</div>
                {/* {activeYear} */}
            </div>
            {/* <div  className="table-container"> */}
            <div className="db_background">
                <StudentBox student={studentsToSend} />
            </div>
            {/* <Link to="/studentrecord">
                <RoundButton className="round-button-sd" />
            </Link> */}
            {/* <IndividualRecord students={students} /> */}
        </div>
    )
}

export default StudentDatabase


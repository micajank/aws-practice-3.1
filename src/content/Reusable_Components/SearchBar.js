import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import {useQuery} from '@apollo/client'
import { getStudentsQuery } from '../../queries/queries'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import { Dropdown } from "semantic-ui-react";


export default function SearchBar(props) {

    const [filterValue, setFilterValue] = useState("");
    const {loading, error, data} = useQuery(getStudentsQuery)
    let names = [];
    let searched = [];

    // if (props.dropdownStudents) {
    //     <Dropdown
    //         placeholder="Select Country"
    //         fluid
    //         search
    //         selection
    //         options={students}
    //     /> 
    // }

    useEffect(() => {
        // if(searched.length > 0) {
        if(filterValue != "") {
            props.setSearchedStudents(searched)
            console.log("SearchBar students:", searched)
        }
        // else if (filterValue == "" && data.studentsCurrent) {
        //     props.setSearchedStudents(noFilterStudents)
        //     console.log("No Filter students:", noFilterStudents)
        // }

    },[filterValue])
    console.log("FilterValue:", filterValue)
    
    let students = data ? data.studentsCurrent.map(student => {
        if(student.firstName.toLowerCase().includes(filterValue.toLowerCase()) || student.lastName.toLowerCase().includes(filterValue.toLowerCase()) || student.ubbId.includes(filterValue)) {
            names.push(student)
            }
    }) : console.log("Search Bar line 29: NO DATA")


    if (props.searchedStudents != null) {
        searched = names.map(student => {
            console.log("StudentId:", student.id)
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
    }

    let noFilterStudents = data ? data.studentsCurrent.map(student => {
        
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
    }) : console.log("Search Bar line 82: NO DATA")



    return (
        <div>
            <input className="search-bar" type="text" placeholder="Search" name="search" onChange={e => setFilterValue(e.target.value)}></input>
            <SearchIcon className="search-icon" fontSize="small" color="disabled"/>
        </div>
    )
}
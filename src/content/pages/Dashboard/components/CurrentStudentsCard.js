import React from 'react';
import { Link } from 'react-router-dom';

//material ui
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FilterListIcon from '@material-ui/icons/FilterList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

//queries
import { useQuery } from '@apollo/client';
import { getStudentsQuery } from '../../../../graphql/custom';

//components
import ReactTable from '../../../Reusable_Components/ReactTable';
import RoundButton from '../../../Reusable_Components/RoundButton';


const CurrentStudentCard = props => {

    const useStyles = makeStyles({
        root: props.cardStyles,
        content: props.cardContent
    });
    
    const classes = useStyles()

    const {loading, error, data} = useQuery(getStudentsQuery)

    if (loading) return <p>Loading...</p>

    if (error) {
        // console.log(error)
        return <p>Error :(</p>
    }

    // console.log(data)

    let students = data.studentsCurrent.map(student => {
        let flaggedTasks = student.tasks.filter(task => {
            return task.flag
        })
        let bookmarkNotes = student.notes.filter(note => {
            return note.bookmark
        })
            return {
                new: student.new,
                lastName: student.lastName,
                firstName: student.firstName,
                docNum: student.docNum,
                ubbId: student.ubbId,
                financialAidStatus: student.academicYearStatus[0].financialAidStatus,
                studentStatus: student.academicYearStatus[0].studentStatus,
                flag: flaggedTasks.length ? <NotificationsIcon /> : <NotificationsNoneIcon />,
                note: bookmarkNotes.length ? <BookmarkIcon /> : <BookmarkBorderIcon />
            }
    })

    return (
        <div className="current-students">
            <Card className={classes.root}>
            <div className='card-header'>Current Students</div>
                <CardContent className={classes.content}>
                <div className="current-student-table">
                <ReactTable data = {students} columnsForTable = {columnsForTable} />
                </div>
                <Link to="/newstudent"><RoundButton className="round-button-dashboard-student" /></Link>
                </CardContent>
            </Card>
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
    },
    {
        Header:()=><h3 className="my_custom_class">First Name <ExpandMoreIcon fontSize="small" /></h3>,
        accessor: 'firstName'
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
        Header:()=><h3 className="my_custom_class">Tasks <FilterListIcon fontSize="small" /></h3>,
        accessor: 'flag'
    },
    {
        Header:()=><h3 className="my_custom_class">Notes <FilterListIcon fontSize="small" /></h3>,
        accessor: 'note'
    }

    ]

export default CurrentStudentCard;
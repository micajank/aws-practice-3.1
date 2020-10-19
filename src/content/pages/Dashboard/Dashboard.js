import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

//material UI
import {Avatar, Chip} from '@material-ui/core';
import FlagIcon from '@material-ui/icons/Flag';
// import EditIcon from '@material-ui/icons/Edit'
import { makeStyles, withStyles } from '@material-ui/core/styles'


//queries
import { useQuery } from '@apollo/client';
import { getUserTasksQuery, getTasksQuery, getStudentsQuery} from '../../../queries/queries';

//components
import CurrentStudentsCard from './components/CurrentStudentsCard';
import FundingCard from './components/FundingCard';
import QuickLinksCard from './components/QuickLinksCard';
import PopUp from '../../Reusable_Components/PopUp'
import StudentStatusCard from './components/StudentStatusCard';

import UserTasksCard from './components/UserTasksCard';
import { addTask } from '../../../queries/mutations'

const Dashboard = props => {

    useEffect(() => {
        props.setActiveTab('Dashboard')
    })


    //useQuery hooks
    //need to map out how to do multiples of these
    //TODO: Still need to figure the getUserTasksQuery on client
    const {loading, error, data} = useQuery(getTasksQuery)
    
    // console.log('are we even loading?')
    if (loading) return <p>Loading...</p>

    if (error) {
        console.log(error)
        return <p>Error</p>
    }

    // console.log(` 👑${data.tasks[0].user.firstName} 👑`)
    // console.log(data.tasks.user)
    
    // let userName = data.tasks[0].user.firstName;

    let incompleteTasks = mapData(data.tasks.filter(task => !task.completed))
    let assignedIncompleteTasks = incompleteTasks.filter(task => (task.userId === props.user._id))
    

    // let userTaskStyles = { width: "865px", maxHeight: "200px", "border-radius": "0" }
    // let cardTaskContent = { maxHeight: "100px", overflow: "auto" }
    // let currentStudentContent = { height: "100%", overflowY: 'scroll' }
    // let studentStatusStyles = { width: "260px", height: "250px", "border-radius": "0" }
    // let studentFundingStyles = { width: "225px", height: "250px", "border-radius": "0" }
    // let currentStudentStyles = { width: "865px", height: "265px", "border-radius": "0" }
    // let quickLinksStyles = { width: "495px", height: "265px", "border-radius": "0" }


    return(
        <div className="dashboard">
            <div className="headline4 greeting">Well hello {props.user.firstName}!</div>
            <div className="dashboard-row-one">
                <div className="my-tasks">
                    <UserTasksCard
                        // userId={'5f11cbf555024d182dc51731'}
                        filter={"Assigned"}
                        status = {"Incomplete"}
                        tasks = {assignedIncompleteTasks}
                        // cardStyles={userTaskStyles}
                        // cardContent={cardTaskContent}
                    />
                </div>
                <div className="student-status">
                    <StudentStatusCard
                        // cardStyles={studentStatusStyles}
                    />
                </div>
                <div>
                    <FundingCard
                        // cardStyles={studentFundingStyles}
                    />
                </div>
            </div>
            <div className="dashboard-row-two">
                <div className="current-students">
                    <CurrentStudentsCard 
                        // cardStyles={currentStudentStyles}
                        // cardContent={currentStudentContent}
                    />
                    
                </div>
                <div className="quick-links">
                    <QuickLinksCard 
                        // cardStyles={quickLinksStyles}
                        // cardContent={cardTaskContent}
                        user={props.user}
                    />
                    {/* <PopUp 
                        body={body} 
                        showPopUp={showPopUp}
                        open={quickLinkPopUp}
                        onClose={handleQuickLinkClose}
                        handleOpen={handleQuickLinkOpen}
                    /> 
                    <RoundButton className="rount-button-dashboard-quicklink" onClick={handleQuickLinkOpen} /> */}
                </div>
            </div>
        </div>
    )
}

//mapData function
const mapData = (data) => {
    return data.map(d => {
        console.log('Line 118', data)
        return {
                flag: d.flag ?  <FlagIcon style={{height: 30, width: 30}}/> : '',
                userId: d.user.id,
                user:<Chip
                        size="small"
                        avatar={<Avatar>{d.user.avatar}</Avatar>}
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
                assignedDate: d.dueDate ? <Moment format="MM/DD/YY">{d.dueDate}</Moment> : '',
                detail: <div className="task__detail-ellipsis">{d.detail}</div>
            }
    })
}

export default Dashboard
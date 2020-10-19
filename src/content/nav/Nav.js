import React, { useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import Login from '../Pages/Login'
import jwtDecode from 'jwt-decode'
// import GetAppIcon from '@material-ui/icons/GetApp';


//material ui
import Avatar from '@material-ui/core/Avatar'

const NavigationBar = props => {
    const history = useHistory();
    // const [theToken, setTheToken] = useState("") 

    let links = (
        <span>
            <Link to="/dashboard" className={props.activeTab === "Dashboard" ? "active" : "link"} onClick={() => props.setActiveTab('Dashboard')}><li>Dashboard</li></Link>
            <Link to="/studentdatabase" className={props.activeTab === "StudentDatabase" ? "active" : "link"} onClick={() => props.setActiveTab('StudentDatabase')} ><li>Student Database</li></Link>
            <Link to="/newstudent" className={props.activeTab === "StudentRecord" ? "active" : "link"} onClick={() => props.setActiveTab('StudentRecord')}><li>Individual Records</li></Link>
            <Link to="/tasks" className={props.activeTab === "Tasks" ? "active" : "link"} onClick={() => props.setActiveTab('Tasks')}><li>Tasks</li></Link>
            <Link to="/reports" className={props.activeTab === "Reports" ? "active" : "link"} onClick={() => props.setActiveTab('Reports')} ><li>Reports</li></Link>
        </span>
    )

    if(!props.user) {
        return <div className="no-nav"></div>
    }

    const handleLogout = e => {
        e.preventDefault()
        let token = localStorage.getItem('userToken')
        // let decoded = jwtDecode(token)
        localStorage.clear(token)
        // TODO: Update the state of the App
        props.updateUser();
        history.push("/");

    }
    
    return (
        <div className="nav">
            {links}
            {/* <GetAppIcon /> */}
            <div className="profile_tabs">
                {props.user && props.user.admin ? <Link to="/admin" className={props.activeTab === "Admin" ? "active" : "link"} onClick={() => props.setActiveTab('Admin')}><li>Admin</li></Link> : ''}
                <Link to="/profile" className={props.activeTab === "Profile" ? "active" : "link"} onClick={() => props.setActiveTab('Profile')}>
                    <li>
                        Profile
                        {/* <Avatar sizes="small">{props.user.avatar}</Avatar> */}
                    </li>
                </Link>
                <Link to="/logout" onClick={handleLogout} className={props.activeTab === "Logout" ? "active" : "link"} >
                    {/* onClick={() => props.setActiveTab('Logout')} */}
                    <li>
                        Logout
                        {/* <Avatar sizes="small">{props.user.avatar}</Avatar> */}
                    </li>
                </Link>
            </div>
        </div>
    )
}

export default NavigationBar
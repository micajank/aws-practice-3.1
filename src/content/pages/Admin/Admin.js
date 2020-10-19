import React, {useEffect} from 'react'

//components
import UserCard from '../Admin/components/UserCard'
import DeleteStudent from '../Admin/components/DeleteStudent'
import ChangeActiveYear from '../Admin/components/ChangeActiveYear'

const Admin = props => {

    useEffect(() => {
        props.setActiveTab('Admin')
    })

    // let cardUserStyles = { width: "20vw", height: "50vh", "border-radius": "0"}
    // let cardDeleteStudentStyles = { width: "23vw", height: "50vh", "border-radius": "0"}
    // let cardChangeActiveYearStyles = { width: "28vw", height: "50vh", "border-radius": "0"}
    let cardContent = { height: "55vh", overflowY: "scroll"}

    //need to set rule if not admin can't see this

    return (
        <div className="admin-page">
            <div className="user-card">
                <UserCard  user={props.user} cardContent={cardContent} />
            </div>
            <div className="delete-student-card">
                <DeleteStudent user={props.user} cardContent={cardContent} />
            </div>
            <div className="change-active-year-card">
                <ChangeActiveYear cardContent={cardContent} />
            </div>
        </div>
    )
}

export default Admin
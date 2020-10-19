import React, {useEffect, useState} from 'react'
import { Redirect } from 'react-router-dom'

//components
import ChangePassword from './components/ChangePassword'
import ChangeAvatar from './components/ChangeAvatar'

//material ui
import Avatar from '@material-ui/core/Avatar'

const UserSettings = props => {

    let cardStyles = { width: "32vw", height: "50vh", "border-radius": "0"}
    let cardContent = { height: "70%"}


    useEffect(() => {
        props.setActiveTab('Profile')
    }, [])

    console.log('user settings props', props)

    if(!props.user) {
        return <div>Loading...</div>
    }

    // if(!props.user) {
    //     return <Redirect to="/"/>
    // }

    return (
        <div className="user-settings">
            <div>
                <h1 className="headline4">Hello {props.user.firstName} {props.user.lastName}! </h1>
                <h2 className="headline5">{props.user.email}</h2>
                <Avatar>{props.user.avatar}</Avatar>
            </div>

            <div className="user-settings__cards">
                <ChangePassword cardStyles={cardStyles} cardContent={cardContent} user={props.user} updateUser={props.updateUser} />
                <ChangeAvatar cardStyles={cardStyles} cardContent={cardContent} user={props.user} updateUser={props.updateUser} />
            </div>

        </div>
    )
}

export default UserSettings
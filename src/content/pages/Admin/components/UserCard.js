import React, { useState } from 'react'

//material ui
import { Avatar, Chip } from '@material-ui/core';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

//queries
import { useQuery, useMutation } from '@apollo/client';
import { getUsersQuery } from '../../../../queries/queries'
import { addUserMutation, deleteUserMutation } from '../../../../queries/mutations'

//reusable components
import PopUp from '../../../Reusable_Components/PopUp'
import RoundButton from '../../../Reusable_Components/RoundButton'

const UserCard = props => {

    let [addUserPopUp, setAddUserPopUp] = useState(false)
    let [showPopUp, setShowPopUp] = useState(false)
    let [userAdmin, setUserAdmin] = useState(false)
    let [userEmail, setUserEmail] = useState('')
    let [userFirstName, setUserFirstName] = useState('')
    let [userLastName, setUserLastName] = useState('')
    let [userPassword, setUserPassword] = useState('')
    let [addUser] = useMutation(addUserMutation)
    let [deleteUser] = useMutation(deleteUserMutation)

    const useStyles = makeStyles({
        root: props.cardStyles,
        content: props.cardContent
    });
    
    const classes = useStyles()

    const {loading, error, data} = useQuery(getUsersQuery)

    console.log('Line 23 Users', data)

    if (loading) return <p>Loading...</p>

    if (error) {
        console.log(error)
        return <p>Error :(</p>
    }

    const handleDeleteUser = (e) => {
        console.log('clicked icon to delete user', e.target.value)
        console.log('USERID', props.user)
        deleteUser({variables: {id: e.target.value, userId: props.user._id }})
    }

    const handleAddUserOpen = () => {
        console.log('clicked to open pop up')
        setAddUserPopUp(true)
    }

    const handleAddUserClose = () => {
        console.log('closing pop up')
        setAddUserPopUp(false)
    }

    const handleSubmit = () => {
        console.log('trying to add new user')
        addUser({variables: {firstName: userFirstName, lastName: userLastName, email: userEmail, password: userPassword, admin: userAdmin}})
        setAddUserPopUp(false)
    }

    let users = data.users.map((u, i) => {
        // console.log('Line 73', u.id)
        return (
            <div key={i} className="delete-user">
                <Avatar className="avatar">{u.avatar}</Avatar>
                <h3 className="user-first-name">{u.firstName}</h3>
                <h3 className="user-last-name">{u.lastName}</h3>
                <button className="delete-user-icon" value={u.id} onClick={handleDeleteUser}>🗑</button>
            </div>
        )
    })

    let body = (
        <div className="add-user-pop-up">
            <div className="add-user-row-one">
                <label>First Name</label>
                <TextField
                    id="outlined-multiline-static"
                    variant="outlined"
                    style={{width: 400, marginRight: 30}}
                    value={userFirstName}
                    onChange={e => setUserFirstName(e.target.value)}
                />
            </div>
            <div className="add-user-row-two">
                <label>Last Name</label>
                <TextField
                    id="outlined-multiline-static"
                    variant="outlined"
                    style={{width: 400, marginRight: 30}}
                    value={userLastName}
                    onChange={e => setUserLastName(e.target.value)}
                />
            </div>
            <div className="add-user-row-three">
                <label>User Email</label>
                <TextField
                    id="outlined-multiline-static"
                    variant="outlined"
                    style={{width: 400, marginRight: 30}}
                    value={userEmail}
                    onChange={e => setUserEmail(e.target.value)}
                />
            </div>
            <div className="add-user-row-four">
            <label>Password</label>
            <TextField
                id="outlined-multiline-static"
                variant="outlined"
                style={{width: 400, marginRight: 30}}
                value={userPassword}
                onChange={e => setUserPassword(e.target.value)}
            />
            </div>
            <div className="user-checkbox">
                <FormControl>
                    <FormGroup>
                        <FormControlLabel
                            value={userAdmin}
                            control={<Checkbox color="primary" checked={userAdmin} />}
                            label={<span style={{ fontSize: '15px' }}>Admin</span>}
                            labelPlacement="top"
                            onChange={e => setUserAdmin(e.target.checked)}
                        />
                    </FormGroup>
                </FormControl>
            </div>
            <button className="user-cancel" onClick={handleAddUserClose}>CANCEL</button>
            <button className="user-save" onClick={handleSubmit}>ADD USER</button>
        </div>
    )

    return (
        <div>
            <Card className={classes.root}>
                <div className="card-header">Users</div>
                <RoundButton className="add-user-round-button" onClick={handleAddUserOpen}/>
                <CardContent className={classes.content}>
                    {users}
                    <PopUp 
                        body={body} 
                        showPopUp={showPopUp}
                        open={addUserPopUp}
                        onClose={handleAddUserClose}
                        handleOpen={handleAddUserOpen}
                    /> 
                </CardContent>
            </Card>
        </div>
    )
}

export default UserCard
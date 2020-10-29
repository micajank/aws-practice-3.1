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
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { getUsersQuery } from '../../../../graphql/custom'
import { addUserMutation, deleteUserMutation } from '../../../../graphql/custom'

//reusable components
import PopUp from '../../../Reusable_Components/PopUp'
import RoundButton from '../../../Reusable_Components/RoundButton'

const UserCard = props => {

    // STATES
    let [usersData, setUsersData] = useState([])
    let [addUserPopUp, setAddUserPopUp] = useState(false)
    let [showPopUp, setShowPopUp] = useState(false)
    let [userAdmin, setUserAdmin] = useState(false)
    let [userEmail, setUserEmail] = useState('')
    let [userFirstName, setUserFirstName] = useState('')
    let [userLastName, setUserLastName] = useState('')
    let [userPassword, setUserPassword] = useState('')
    let [addUser] = useMutation(addUserMutation)
    let [deleteUser] = useMutation(deleteUserMutation)

    // STYLES
    const useStyles = makeStyles({
        root: props.cardStyles,
        content: props.cardContent
    });
    const classes = useStyles()

    // QUERIES
    const {loading, error, data} = useQuery(getUsersQuery)
    async function getUsers() {
        try {
            const usersQueryData = await API.graphql(graphqlOperation(getUsersQuery))
            setUsersData(usersQueryData.data.getUsersQuery.items)
        } catch (err) { 
            console.log("Error fetching ") 
            return <p> Error :( </p>
        }
    }
    if (!usersQueryData) return <p>Loading...</p>

    // MUTATIONS
    async function addUser(newUserData) {
        try { await API.graphql(graphqlOperation(addUserMutation, {input: newUserData})) } 
        catch { return <p> Error :( </p> }
    }
    async function deleteUser(userId) {
        try { await API.graphql(graphqlOperation(deleteUserMutation, {input:userId})) }
        catch { return <p> Error :( </p> }
    }

    // HELPER FUNCTIONS
    const handleSubmit = () => {
        console.log('trying to add new user')
        let newUserData = {
            firstName: userFirstName,
            lastName: userLastName,
            email: userEmail,
            admin: userAdmin
        }
        addUser(newUserData)
        /**
         * @TODO ADD SIGNUP FUNCTIONALITY FROM COGNITO AND AUTH
         */
        setAddUserPopUp(false)
    }
    const handleDeleteUser = (e) => {
        console.log('Trying to delete user:', e.target.value)
        if(props.user.admin) deleteUser(e.target.value)
        else return {message: "PERMISSION DENIED"}
        /**
         * @TODO ADD DELETE FUNCTIONALITY FROM COGNITO AND AUTH
         */
    }
    const handleAddUserOpen = () => {
        console.log('clicked to open pop up')
        setAddUserPopUp(true)
    }
    const handleAddUserClose = () => {
        console.log('closing pop up')
        setAddUserPopUp(false)
    }

    // USER COMPONENTS
    let users = usersData.map((u, i) => {
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

    // POP UP BODY
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

    // MAIN COMPONENT
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
import React, {useState, useEffect} from 'react'

//queries
import {useMutation} from '@apollo/client'
import {updateUserPasswordMutation} from '../../../../queries/mutations'

//material ui
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const ChangePassword = props => {

    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPasswordMatch, setNewPasswordMatch] = useState('')
    const [passwordValidationMessage, setPasswordValidationMessage] = useState('')
    const [message, setMessage] = useState('')
    const [updateUserPassword, { data, error }] = useMutation(updateUserPasswordMutation)


    useEffect(() => {
        if(newPasswordMatch) {
            passwordCheck()
        }
    }, [newPasswordMatch])

    useEffect(() => {
        if(data) {
            if(data.updateUserPassword === null) {
                //set message to error message
                setMessage('Error! Current password is not correct.')
            } else {
                //set message to confirmation message
                setMessage('Success! Your password was updated.')
            }
        }
    }, [data])
    

    const useStyles = makeStyles({
        root: props.cardStyles,
        content: props.cardContent
      });
    
    const classes = useStyles()

    if(error) {
        setMessage(error)
    }

    /* handle new password check */
    const passwordCheck = () => {
        if (newPassword !== newPasswordMatch) {
            setPasswordValidationMessage("New password inputs don't match")
        }
        else if(newPassword.length < 8 || newPassword.length > 100) {
            setPasswordValidationMessage("Password must be between 8 and 100 characters")
        }
        else {
            setPasswordValidationMessage('')
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        //VALIDATE PASSWORD CONSTRAINTS BEFORE MUTATION
        if(newPassword !== newPasswordMatch) {
            setMessage("New Passwords Don't Match!")
        }
        else if(newPassword.length < 8 || newPassword.length > 100) {
            setMessage("New Password must be between 8 and 100 characters")
        }
        else {
            //updateUserPassword mutation with newPassword
            updateUserPassword({variables: {id: props.user._id, currentPassword, password: newPassword}})
            setCurrentPassword('')
            setNewPassword('')
            setNewPasswordMatch('')
            setPasswordValidationMessage('')
        }

    }



    // handle cancel - clears fields
   const handleCancel = () => {
       setCurrentPassword('')
       setNewPassword('')
       setNewPasswordMatch('')
       setPasswordValidationMessage('')
       setMessage('')
   }

    return (
        <Card className={classes.root}> 
            <div className="card-header">Change Password</div>
            <CardContent className={classes.content}>
                <div className="change-pw-form">
                    <p>{message}</p>
                    <TextField 
                        // type="password"
                        label = "Current Password"
                        variant="outlined" 
                        // name="currentPassword" 
                        value={currentPassword} 
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <TextField 
                        // type="password"
                        label = "New Password"
                        variant="outlined" 
                        // name="newPassword" 
                        value={newPassword} 
                        onChange={(e) => {
                            if(e.target.value.includes(" ")) {
                                setPasswordValidationMessage('No spaces')
                            }
                            else {
                                setNewPassword(e.target.value)
                            }
                        }}
                    />
                    <TextField 
                        // type="password"
                        label = "Re-enter New Password"
                        variant="outlined" 
                        name="newPasswordMatch" 
                        value={newPasswordMatch} 
                        onChange={(e) => {setNewPasswordMatch(e.target.value)}}
                    />
                    <p className="assistive-text">{passwordValidationMessage}</p>
                </div>
            </CardContent>
            <CardActions>
                <div className="change-buttons">
                    <button className="change-cancel" onClick={handleCancel}>CANCEL</button>
                    <button className="change-save" onClick={(e) => handleSubmit(e)}>CHANGE PASSWORD</button>
                </div>
            </CardActions>
        </Card>
    )
}


export default ChangePassword
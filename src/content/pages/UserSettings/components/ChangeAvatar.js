import React, {useState, useEffect} from 'react'
import {useMutation} from '@apollo/client'
import {updateUserMutation} from '../../../../queries/mutations'

//material ui
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
// import { deepOrange, deepPurple } from '@material-ui/core/colors';

const ChangeAvatar = props => {

    const [avatar, setAvatar] = useState('')
    const [color, setcolor] = useState('')
    const [message, setMessage] = useState('')
    const [updateUser, { data, error }] = useMutation(updateUserMutation)

    const useStyles = makeStyles((theme) => ({
        root: props.cardStyles,
        content: props.cardContent,
        // orange: {
        //     color: theme.palette.getContrastText(deepOrange[500]),
        //     backgroundColor: deepOrange[500],
        // },
    }));
    
    const classes = useStyles()

    /**
     * Okay I am struggling to understand this code.
     * I think it's trying to update the user token when their avatar is changed to extend their session.
     * What I don't get is why enter this confusing duplicate code???
     */
    useEffect(() => {
        if(data) {
            props.updateUser(data.updateUser.token)
            setMessage('Avatar updated!')
            setAvatar('')
        }
    }, [data])

    if(error) {
        console.log('MUTATION ERROR', error)
    }

    // handle submit - user mutation updates avatar 
    const handleSubmit = (e) => {
        e.preventDefault()
        updateUser({variables: {id: props.user._id, avatar: avatar, color: color}})
    }

   

    // handle cancel - clears avatar to empty string 

    const handleCancel = () => {
        setAvatar('')
    }
    // const AvatarClassName = classes.color

    const handleColor = e => {
        console.log('Changing color to', e.target.id)
        let color = e.target.id
        setcolor(e.target.id)
        console.log("LINE 62 AVATAR COLOR", color)
    }


    return (
        <Card className={classes.root}>
            <div className="card-header">Change Avatar</div>
            <p>{message}</p>
            <CardContent className={classes.content}>
                <div className="change-av-form">
                    <TextField 
                        // type="password"
                        placeholder="Initials" 
                        label = "Initials"
                        variant="outlined" 
                        name="avatar" 
                        value={avatar} 
                        onChange={(e) => setAvatar(e.target.value.toUpperCase())}
                    />
                    <div className="avatar-colors">
                        <Avatar id="red" onClick={(e) => handleColor(e)}>{avatar}</Avatar>
                        <Avatar id="orange" onClick={(e) => handleColor(e)}>{avatar}</Avatar>
                        <Avatar id="yellow" onClick={(e) => handleColor(e)}>{avatar}</Avatar>
                        <Avatar id="green" onClick={(e) => handleColor(e)}>{avatar}</Avatar>
                        <Avatar id="blue" onClick={(e) => handleColor(e)}>{avatar}</Avatar>
                        <Avatar id="purple" onClick={(e) => handleColor(e)}>{avatar}</Avatar>
                    </div>
                    <p>Preview</p>
                    <Avatar id={color} style={{fontWeight: 600}}>{avatar}</Avatar>
                </div>
            </CardContent>
            <CardActions>
                <div className="change-buttons">
                    <button className="change-cancel" onClick={handleCancel}>CANCEL</button>
                    <button className="change-save" onClick={(e) => handleSubmit(e)}>CHANGE AVATAR</button>
                </div>
            </CardActions>
        </Card>
    )
}

export default ChangeAvatar
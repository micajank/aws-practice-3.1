import React, { useState } from 'react';
import Moment from 'react-moment';

//material ui
import EditIcon from '@material-ui/icons/Edit';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Avatar, Chip} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import TextField from '@material-ui/core/TextField';

//queries
import { useQuery, useMutation } from '@apollo/client';
import { getTasksQuery, getNotesQuery } from '../../../../queries/queries';
import { newNoteMutation } from '../../../../queries/mutations'

//components
import PopUp from '../../../Reusable_Components/PopUp'
import ReactTable from '../../../Reusable_Components/ReactTable';
import RoundButton from '../../../Reusable_Components/RoundButton'

const NotesCard = props => {

    let [showPopUp, setShowPopUp] = useState(false)

    const {loading, error, data} = useQuery(getNotesQuery)
    const [newNote, { noteData, noteError }] = useMutation(newNoteMutation)
    const [noteContent, setNoteContent] = useState('')

    if (loading) return <p>Loading...</p>

    if (error) {
        console.log(error)
        return <p>Error :( </p>
    }

    let notes = data.notes.map(n => {

        // let bookmarkedNotes = notes.bookmark = true ? notes.bookmark : null

        // let bookmarkedNotes = notes.filter(note => {
        //     return note.bookmarked
        // })

            return {
                bookmark: n.bookmark ? <BookmarkIcon /> : <BookmarkBorderIcon />,
                user:<Chip
                        size="small"
                        avatar={<Avatar id={n.user.color} style={{fontWeight: 600}}>{n.user.avatar}</Avatar>}
                        label={n.user.firstName}
                    />,
                // user: n.user.firstName,
                note: n.note,
                date: <Moment format="MM/DD/YY">{n.createdDate}</Moment> 
            }
    })

    const handleOpen = () => {
        console.log('Open Documents Pop-up')
        setShowPopUp(true)
    }

    const handleClose = () => {
        console.log('Closing Documents Pop-up')
        setShowPopUp(false)
    }

    const newNoteSubmit = (e) => {
        console.log("Creating new mutation")
        newNote({variables: {
            userId:         props.user._id, 
            note:           noteContent, 
            createdDate:    new Date(), 
            bookmark:       false, 
            studentId:      props.studentId
        }})
        setShowPopUp(false)
    }

    
    let body = (
        <div className="add-note">
            <h3>Add Note</h3>
            <TextField
                id="outlined-multiline-static"
                label="Note"
                multiline
                rows={8}
                variant="outlined"
                style={{width: 400}}
                onChange={e => setNoteContent(e.target.value)}
            />
                <button className="doc-cancel" onClick={handleClose}>CANCEL</button>
                <button className="doc-save" onClick={newNoteSubmit}>SAVE</button>
        </div>
    )


    return (
        <div className="notes">
            <Card>
                <CardContent>
                    <ReactTable 
                    data = {notes} columnsForTable = {columnsForTable}
                    />
                    <PopUp 
                        body={body} 
                        showPopUp={showPopUp}
                        open={showPopUp}
                        onClose={handleClose}
                        handleOpen={handleOpen}
                    /> 
                    <RoundButton className="round-button-notes" onClick={handleOpen} />
                </CardContent>
            </Card>
        </div>
    )
}

let columnsForTable = [
    {
        Header:()=><h3 className="my_custom_class"> <BookmarkIcon /> </h3>,
        accessor: 'bookmark'
    },
    {
        Header:()=><h3 className="my_custom_class">Team Member <ExpandMoreIcon fontSize="small" /></h3>,
        accessor: 'user'
    },
    {
        Header:()=><h3 className="my_custom_class">Notes </h3>,
        accessor: 'note'
    },
    {
        Header: ()=><h3 className="my_custom_class">Date <ExpandMoreIcon fontSize="small" /></h3>,
        accessor: 'date'
    }
]

export default NotesCard;
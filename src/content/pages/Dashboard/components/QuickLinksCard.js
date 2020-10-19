import React, { useEffect, useState } from 'react';

//material ui
// import EditIcon from '@material-ui/icons/Edit';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

//queries
import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client';
import { addQuickLinkMutation, deleteQuickLinkMutation } from '../../../../queries/mutations'
// import { useQuery } from '@apollo/client';
// import { getUserQLQuery, getUsersQuery } from '../../../../queries/queries';

//components
import PopUp from '../../../Reusable_Components/PopUp'
import RoundButton from '../../../Reusable_Components/RoundButton';
// import { updateLocale } from 'moment';
// import { isCompositeType } from 'graphql';

const QuickLinksCard = props => {

    

    let quickLink

    let [link, setLink] = useState('')
    let [title, setTitle] = useState('')
    let [quickLinkPopUp, setQuickLinkPopUp] = useState(false)
    let [showPopUp, setShowPopUp] = useState(false)
    let [quickLinks, setQuickLinks] = useState(props.user ? props.user.quickLinks : [])
    let [addQuickLink, { data }] = useMutation(addQuickLinkMutation, {
        update(cache, { data: { addQuickLink } }) {
            cache.modify({
                fields: {
                    quickLinks(existingQuickLinks = []) {
                        const newQuickLinkRef = cache.writeFragment({
                            data: addQuickLink,
                            fragment: gql`
                                fragment newQuickLink on QuickLink {
                                    id
                                    title
                                    link
                                }
                            `
                        })
                        return [...existingQuickLinks, newQuickLinkRef]
                    }
                }
            })
        }
    })

    useEffect(() => {
        if(data) {
            // console.log("line 58", data)
            setQuickLinks([...quickLinks, data.addQuickLink])
        }
    }, [data])

    let [deleteQuickLink] = useMutation(deleteQuickLinkMutation)

    const useStyles = makeStyles({
        root: props.cardStyles,
        content: props.cardContent
    });
    
    const classes = useStyles()

    // console.log('quick links', props.user)

    // const {loading, error, data} = useQuery(getUsersQuery)

    // if (loading) return <p>Loading...</p>

    // if (error) {
    //     console.log(error)
    //     return <p>Error :(</p>
    // }

    // console.log(data.users)
    // console.log(data.users[0])
    // console.log(data.users[0].quickLinks.link)

    const handleDelete = (e) => {
        console.log("clicked delete", e.target.value)
        deleteQuickLink({variables: {id: e.target.value, userId: props.user._id}})
    }

    if(props.user) {
        // console.log('Line 53', props.user)
        quickLink = quickLinks.map((ql, i) => <li><a key={i} target="_blank" rel="noopener noreferrer" href={`//${ql.link}`}>{ql.title}</a><button value={ql._id} className="delete-quick-link" onClick={handleDelete}>X</button></li>)
    }

    const handleAddQuickLink = () => {
        console.log("line 64", {variables: {userId: props.user._id, title: title, link: link}})
        addQuickLink({variables: {userId: props.user._id, title: title, link: link}})
        handleQuickLinkClose()
    }

    const handleQuickLinkOpen = () => {
        console.log('Open Documents Pop-up')
        setQuickLinkPopUp(true)
    }

    const handleQuickLinkClose = () => {
        console.log('Open Documents Pop-up')
        setQuickLinkPopUp(false)
    }

    // let links = data.users.map((user, i) => {
    //     return (
            
    //         <div>
    //             <ul>
    //                 <li key={`link-${i}`} href={user.quickLinks.link}>{user.quickLinks.title}</li>
    //             </ul>
    //         </div>
            
    //     )
    // })

    let body = (
        <div className="quick-link-pop-up">
            <form>
            <h1>Add Quick Link</h1>
                <label>Link Name</label>
                <TextField id="outlined-basic" label="Link Name" variant="outlined" style={{width: 375}} name={title} onChange={e => setTitle(e.target.value)} /> 
                <label>Link</label>
                <TextField id="outlined-basic" label="Link" variant="outlined" style={{width: 375}} name={link} onChange={e => setLink(e.target.value)} /> 
            </form>
            <button className="link-cancel" onClick={handleQuickLinkClose}>CANCEL</button>
            <button className="link-save" onClick={handleAddQuickLink}>SAVE</button>
        </div>
    )

    return (
        <div className="quick-links">
            <Card className={classes.root}>
                <div className="card-header">Quick Links</div>
                    <CardContent className={classes.content}>
                        <div>
                            <ul className="ql">
                                {quickLink}
                            </ul>
                        </div>
                        <PopUp 
                            body={body} 
                            showPopUp={showPopUp}
                            open={quickLinkPopUp}
                            onClose={handleQuickLinkClose}
                            handleOpen={handleQuickLinkOpen}
                        /> 
                    <RoundButton className="round-button-dashboard-quicklink" onClick={handleQuickLinkOpen} />
                    </CardContent>
            </Card>
        </div>
    )
}

export default QuickLinksCard;
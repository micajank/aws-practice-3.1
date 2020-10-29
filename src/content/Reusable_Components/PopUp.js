import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
// import RoundButton from '../Reusable_Components/RoundButton'


const PopUp = props => {
    
    useEffect(() => {
        if (props.showPopUp === true) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }, [props.showPopUp])

    const [modalStyle] = useState(getModalStyle);
    let [open, setOpen] = useState(false)


    // function rand() {
    //     return Math.round(Math.random() * 20) - 10;
    // }
    
    function getModalStyle() {
    const top = 50;
    const left = 50;
    
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        };
    }
    
    const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 1000,
        height: 650,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(0, 0, 0),
    },
    }));

    const classes = useStyles();

    const handleClose = () => {
        console.log('Closing Documents Pop-up')
        setOpen(false)
    }

    return (
        <div >
            <Modal
                open={props.open}
                onClose={props.handleClose}
                style={modalStyle}
                className={classes.paper}
            >
                {props.body}
            </Modal>
        </div>
    )
}

export default PopUp
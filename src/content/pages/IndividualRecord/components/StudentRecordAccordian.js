import React from 'react'

//material ui
import Accordian from '@material-ui/core/Accordion'
import AccordianSummary from '@material-ui/core/AccordionSummary'
import AccordianDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Lock from '@material-ui/icons/Lock'
import LockOpen from '@material-ui/icons/LockOpen'



/*---------- PROPS ACCEPTED ----------------*/

// REQUIRED PROPS:
    // type = STRING : main header text (i.e. "Student Info", "Classes", "Tasks", "Notes")
    // content = whatever content you want to be inside of the accordian (likely another component)

// OPTIONAL PROPS:
    // additionalHeaders = ARRAY OF STRINGS : only need to pass these in if any additional headers needed in main header (ex: classes has field headers inside main accordian header)
    // additionalHeadersGrid = STRING: classname for grid layout of additional headers
/*-------------------------------------------*/


const StudentRecordAccordian = props => {
    const classes = useStyles()

    let accordianHeaderFields = ''
    if(props.additionalHeaders) {
        accordianHeaderFields = props.additionalHeaders.map((header, i) => {
            return (
                <p key={i} className="subtitle2-white">{header}</p>
            )
        })
    }

    let lock = ''
    if(props.type === "Student Information") {
        lock = (
            props.lockInfo ? 
            <Lock onClick={(e) => {
                e.stopPropagation()
                props.setLockInfo(false)
            }}/> : 
            <LockOpen onClick={(e) => {
                e.stopPropagation()
                props.setLockInfo(true)
            }}/>
        )
    }

    return (
        <div className="accordian">
            <Accordian  defaultExpanded={true} >
                <AccordianSummary
                    expandIcon={<ExpandMoreIcon />}
                    className={classes.root}
                >
                    <div className="accordian__header">
                        <p className="headline6-white">{props.type}</p>
                        {lock}
                        <div className={"accordian__center-fields " + (props.additionalHeadersGrid ? props.additionalHeadersGrid : '')}>{accordianHeaderFields}</div>
                    </div>
                </AccordianSummary>
                <StyledAccordianDetails>
                    <div className="accordian__content">
                        {props.content}
                    </div>
                </StyledAccordianDetails>
            </Accordian>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    root: {
        "background-color": "#0063A0",
        "min-height": `36px !important`,
        "height": `36px !important`
        },
    expanded: {
        "height": `36px !important`
    }
}))

const StyledAccordianDetails = withStyles({
    root: {
        "padding": "0"
    }
})(AccordianDetails)


export default StudentRecordAccordian
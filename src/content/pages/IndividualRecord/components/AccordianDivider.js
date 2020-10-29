import React from 'react'

//material ui
import Accordian from '@material-ui/core/Accordion'
import AccordianSummary from '@material-ui/core/AccordionSummary'
import AccordianDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles, withStyles } from '@material-ui/core/styles'

/*---------- PROPS ACCEPTED ----------------*/

// REQUIRED PROPS:
    // subtitle = STRING : main divider header text (i.e. "Student Info", "Classes", "Tasks", "Notes")
    // content = whatever content you want to be inside of the accordian (likely another component or jsx code)

// *** OPTIONAL PROPS likely only needed for the CLASSES accordian ***:
    // additionalHeaders = ARRAY OF STRINGS : only need to pass these in if any additional headers needed in divider header 
                           //(ex: classes has certain aggregated fields inside this divider header)
    // additionalHeadersGrid = STRING: classname for grid layout of additional headers
    // headerType = STRING: this is probably only needed was so i could set different styles for the inner dividers that are smaller than the outer on classes
    // headerBackground = STRING: color (will only work with both headerType and headerSize props)
    // headerSize = STRING: size (will only work with both headerType and headerSize props)
/*-------------------------------------------*/



const AccordianDivider = props => {
    let useStyles = makeStyles(() => ({
        root: {
            'background-color': '#0094BC',
            "min-height": `36px !important`,
            "height": `36px !important`
            },
        expanded: {
            "height": `36px !important`
        }
    }))

    if(props.headerType) {
        useStyles = makeStyles(() => ({
            root: {
                "background-color": `${props.headerBackground}`,
                "min-height": `${props.headerSize} !important`,
                "height": `${props.headerSize} !important`
            },
            expanded: {
                "height": `${props.headerSize} !important`
            }
        }))
    }
    
    const classes = useStyles()

    let accordianHeaderFields = ''
    if(props.additionalHeaders) {
        accordianHeaderFields = props.additionalHeaders.map((header, i) => {
            return (
                <p key={i} className={props.headerType ? "subtitle2" : "subtitle2-white"}>{header}</p>
            )
        })
    }

    return (
        <Accordian className="accordian__divider" defaultExpanded={true}>
            <AccordianSummary
                expandIcon={<ExpandMoreIcon />}
                className={classes.root}
            >
                <div className="accordian__header">
                     <p className={props.headerType ? "subtitle2" : "subtitle2-white"}>{props.subtitle}</p>
                    <div className={"accordian__center-fields " + (props.additionalHeadersGrid ? props.additionalHeadersGrid : '')}>{accordianHeaderFields}</div>
                </div>
                    
            </AccordianSummary>
            <StyledAccordianDetails>
                {props.content}
            </StyledAccordianDetails>
        </Accordian>
    )
}

const useStyles = makeStyles(() => ({
    root: {
        'background-color': '#0094BC'
    }
}))

const StyledAccordianDetails = withStyles({
    root: {
        "padding": "0"
    }
})(AccordianDetails)

export default AccordianDivider
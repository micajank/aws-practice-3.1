import React, {useState} from 'react'
import Moment from 'react-moment'

//material ui
import { makeStyles } from '@material-ui/core/styles'
import AccordianDivider from './AccordianDivider'
import EditIcon from '@material-ui/icons/Edit'

const ClassQuarters = props => {

    /* --- filter for each quarter -- */
    //first need to know what quarters this student has classes associated with
    let quarters = props.data.classes.map(c => c.quarter)
    let uniqueQuarters = Array.from(new Set(quarters))

    //then for each quarter, map new accordian with filtered classes by that quarter
    let byQuarter = uniqueQuarters.map(q => {
        return {
            quarter: q,
            classes: props.data.classes.filter(c => c.quarter === q) 
        }
    })

    //get quarter totals for awarded, voucher, undetermined
    let byQuarterWithTotals = byQuarter.map(q => {
        let totalAwarded = 0
        let totalVoucher = 0
        let totalUndetermined = 0

        q.classes.map(c => {
            totalAwarded += c.awarded
            totalVoucher += c.voucher
            totalUndetermined += c.undetermined
            return ''
        })

        return {quarter: q.quarter, classes: q.classes, totalAwarded, totalVoucher, totalUndetermined}
    })

    let content = byQuarterWithTotals.map(q => {

        let classHeaders = (
            props.headers.map(h => {
                if(h === "Awarded") {
                    return `$${q.totalAwarded}`
                } else if (h === "Voucher") {
                    return `$${q.totalVoucher}`
                } else if (h === "Undetermined") {
                    return `$${q.totalUndetermined}`
                } else {
                    return ''
                }
            })
        )

        let classContent = (
            <div className="class-rows">
                {q.classes.map(c => {
                    return (
                        <div className="accordian__header">
                            <div className="table-column-grid-classes-row">
                                <p>{c.className}</p>
                                <p>{c.classNumber}</p>
                            </div>
                            
                            <div className="accordian__center-fields table-column-grid-classes-header">
                                <p>{c.status}</p>
                                <p>{c.awarded}</p>
                                <p>{c.voucher}</p>
                                <p>{c.undetermined}</p>
                                <p><input type="checkbox" checked={c.invoice} disabled/></p>
                                <p><input type="checkbox" checked={c.paid} disabled/></p>
                                {c.paidDate ? <p><Moment format="MM/DD/YY">{c.paidDate}</Moment> </p>: <p></p>}
                                <p><input type="checkbox" checked={c.reimbursed} disabled/></p>
                                {c.reimbursedDate ? <p><Moment format="MM/DD/YY">{c.reimbursedDate}</Moment></p> : <p></p>}
                                <EditIcon 
                                    onClick={e => {
                                        props.setShowPopUp(true)
                                        props.setClassToEdit(c.id)
                                    }} 
                                />
                            </div>
                        </div>
                    )}  
                )}
            </div>
        )

        return (
            <AccordianDivider 
                subtitle={q.quarter}
                content={classContent}
                additionalHeaders={classHeaders}
                additionalHeadersGrid={"table-column-grid-classes-header"}
                headerType={'class quarter'}
                headerBackground={"#9AD0E1"}
                headerSize={"30px"}
            />
        )

    })

    return (
        <div className="quarters-accordian">{content}</div>
    )
}

// const useStyles = makeStyles(() => ({
//     root: {
//         "background-color": "#9AD0E1"
//     }
// }))

export default ClassQuarters
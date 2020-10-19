import React from 'react'

//material ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

// queries
import { useQuery, useMutation } from '@apollo/client';
import { getFinancialReportQuery } from '../../../../queries/queries'
import { reduceHooks } from 'react-table';

const Funding = props => {

    const useStyles = makeStyles({
        root: props.cardStyles,
        content: props.cardContent
    });
    const classes = useStyles()

    const {loading, error, data} = useQuery(getFinancialReportQuery)

    // console.log('Line 22 Financial Report Data', data)

    if (loading) return <p>Loading...</p>

    if (error) {
        console.log(error)
        return <p>Error :(</p>
    }
    
    // let pellTotal
    // console.log('line 33', data.classes[0].quarter)
    // if (data.classes[0].quarter === "Fall") {
    //     pellTotal = data.classes.map((c, i) => <span key={i}>{c.awarded}</span>)
    //     console.log('line 35', Number(pellTotal))
    // }

    let activeYear = data.activeAcademicYear.year 
    // console.log('line 40', activeYear)

    let pellTotal
    for (let i=0; i < data.classes.length; i++) {
        if (data.classes[i].quarter === "Fall"){
            // console.log('Line 41', data.classes[i].quarter)
            pellTotal = data.classes.reduce((acc, c) => acc + c.awarded, 0)
        }
        // console.log('Line 43', pellTotal)
    }

    let ubbVoucher 
    for (let i=0; i < data.classes.length; i++) {
        ubbVoucher = data.classes.reduce((acc, v) => acc + v.voucher, 0)
    }
    // console.log('Line 51', ubbVoucher)

    let undetermined
    for (let i=0; i < data.classes.length; i++) {
        undetermined = data.classes.reduce((acc, u) => acc + u.undetermined, 0)
    }
    // console.log('Line 57', undetermined)

    let total = (pellTotal + ubbVoucher + undetermined)

    return(
        <div className="funding">
            <Card className={classes.root}>
            <div className='card-header'>Funding {activeYear}</div>
                <CardContent className={classes.content}>
                {/* <p>Fall Quarter</p> */}
                <br></br>
                <div className="pell-grants"><strong>Pell Grants</strong><span className="pell-grants-report">$ {pellTotal}</span></div>
                <div className="UBB-funded"><strong>UBB Funded</strong><span className="pell-ubb-funded-report">$ {ubbVoucher}</span></div>
                <div className="undetermined"><strong>Undetermined</strong><span className="pell-undetermined-report">$ {undetermined}</span></div>
                <p>-----------------</p>
                <div className="total"><strong>Total</strong><span className="funding-total">$ {total}</span></div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Funding
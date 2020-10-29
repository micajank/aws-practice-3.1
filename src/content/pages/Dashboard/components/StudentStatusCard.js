import React from 'react'

//material ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

// queries
import { useQuery, useMutation } from '@apollo/client';
import { getStudentStatus } from '../../../../graphql/custom'


const StudentStatusCard = props => {

    // const UserTasksCard = props => {

    const useStyles = makeStyles({
        root: props.cardStyles,
        content: props.cardContent
    });
    
    const classes = useStyles()


    const {loading, error, data} = useQuery(getStudentStatus)

    console.log('Line 27 Student Status Data', data)

    if (loading) return <p>Loading...</p>

    if (error) {
        console.log(error)
        return <p>Error :(</p>
    }

    let activeYear = data.activeAcademicYear.year 
   
    let pellEligible = 0
    for (let i=0; i < data.studentsCurrent.length; i++) {
        let pell = data.studentsCurrent[i].academicYearStatus[0]
        console.log('line 41', pell)
        if (pell.financialAidStatus === "🟢 Pell Awardee") {
            pellEligible++
        } 
        // console.log("line 45", pellEligible)
    }

    let pellIneligible = 0
    for (let i=0; i < data.studentsCurrent.length; i++) {
        let ineligible = data.studentsCurrent[i].academicYearStatus[0]
        console.log('line 51', ineligible)
        if (ineligible.financialAidStatus.includes("🔴")) {
            pellIneligible++
        } 
        // console.log("line 55", pellIneligible)
    }

    let pellUndetermined = 0
    for (let i=0; i < data.studentsCurrent.length; i++) {
        let undetermined = data.studentsCurrent[i].academicYearStatus[0]
        console.log('line 61', undetermined)
        if (undetermined.financialAidStatus.includes("🟡")) {
            pellUndetermined++
        } 
        // console.log("line 65", pellUndetermined)
    }

    let pellTotal = pellEligible + pellIneligible + pellUndetermined

    return(
        <div className="student-status">
            <Card className={classes.root}>
            <div className='card-header'>Student Status {activeYear}</div>
                <CardContent className={classes.content}>
                    {/* <p>Fall Quarter</p> */}
                    <br></br>
                    <div className="pell-eligible"><strong>Pell Eligible</strong><span className="pell-eligible-report">{pellEligible}</span></div>
                    <div className="pell-ineligible"><strong>Pell Ineligible</strong><span className="pell-ineligible-report">{pellIneligible}</span></div>
                    <div className="undetermined"><strong>Undetermined</strong><span className="pell-undetermined-report">{pellUndetermined}</span></div>
                    <p>-----------------</p>
                    <div className="total"><strong>Total</strong><span className="pell-total-report">{pellTotal}</span></div>
                </CardContent>
            </Card>
        </div>
    )
}

export default StudentStatusCard
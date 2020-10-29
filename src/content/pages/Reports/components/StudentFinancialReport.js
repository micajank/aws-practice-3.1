import React, { useState } from 'react'
import { CSVLink } from "react-csv";

// material ui
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import GetAppIcon from '@material-ui/icons/GetApp';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles, withStyles } from '@material-ui/core/styles'

// queries
import { useQuery, useMutation } from '@apollo/client';
import { getAllAcademicYearsQuery, getStudentStatus } from '../../../../queries/queries'

const StudentFinancial = props => {

    let [activeAcademicYear, setActiveAcademicYear] = useState('')

    const useStyles = makeStyles({
        root: props.cardStyles,
        content: props.cardContent
      });
    
    const classes = useStyles()

    const {loading, error, data} = useQuery(getAllAcademicYearsQuery)
    const {loading: loadingS, error: errorS, data: dataS} = useQuery(getStudentStatus)
    console.log("Student status data", dataS)

    // console.log('Line 28 Academic Years', data)

    if (loading) return <p>Loading...</p>
    if (loadingS) return <p>Loading...</p>

    if (error) {
        console.log(error)
        return <p>Error :(</p>
    }
    if (errorS) {
        console.log(errorS)
        return <p>Error :(</p>
    }

    let activeYear = data.academicYears.map((y, i) => <option key={i} value={y.year}>{y.year}</option>)

    let pellEligible = 0
    for (let i=0; i < dataS.studentsCurrent.length; i++) {
        let pell = dataS.studentsCurrent[i].academicYearStatus[0]
        // console.log('line 41', pell)
        if (pell.financialAidStatus === "🟢 Pell Awardee") {
            pellEligible++
        } 
        // console.log("line 47", pellEligible)
    }

    let citizenshipIssue = 0
    for (let i=0; i < dataS.studentsCurrent.length; i++) {
        let pell = dataS.studentsCurrent[i].academicYearStatus[0]
        // console.log('line 41', pell)
        if (pell.financialAidStatus === "🔴 Ineligible: Citizenship Issue") {
            citizenshipIssue++
        } 
        // console.log("line 47", citizenshipIssue)
    }

    let lifeWithoutParole = 0
    for (let i=0; i < dataS.studentsCurrent.length; i++) {
        let pell = dataS.studentsCurrent[i].academicYearStatus[0]
        // console.log('line 41', pell)
        if (pell.financialAidStatus === "🔴 Ineligible: Life Without Parole") {
            lifeWithoutParole++
        } 
        // console.log("line 47", lifeWithoutParole)
    }

    let loansInDefault = 0
    for (let i=0; i < dataS.studentsCurrent.length; i++) {
        let pell = dataS.studentsCurrent[i].academicYearStatus[0]
        // console.log('line 41', pell)
        if (pell.financialAidStatus === "🔴 Ineligible: Loans In Default") {
            loansInDefault++
        } 
        // console.log("line 47", loansInDefault)
    }

    let parentInfo = 0
    for (let i=0; i < dataS.studentsCurrent.length; i++) {
        let pell = dataS.studentsCurrent[i].academicYearStatus[0]
        // console.log('line 41', pell)
        if (pell.financialAidStatus === "🔴 Ineligible: Parent Information") {
            parentInfo++
        } 
        // console.log("line 47", parentInfo)
    }
    
    let ssnDiscrepancy = 0
    for (let i=0; i < dataS.studentsCurrent.length; i++) {
        let pell = dataS.studentsCurrent[i].academicYearStatus[0]
        // console.log('line 41', pell)
        if (pell.financialAidStatus === "🔴 Ineligible: SSN Discrepancy") {
            ssnDiscrepancy++
        } 
        // console.log("line 47", ssnDiscrepancy)
    }

    let unresolvedSS = 0
    for (let i=0; i < dataS.studentsCurrent.length; i++) {
        let pell = dataS.studentsCurrent[i].academicYearStatus[0]
        // console.log('line 41', pell)
        if (pell.financialAidStatus === "🔴 Ineligible: Unresolved Selective Service") {
            unresolvedSS++
        } 
        // console.log("line 47", unresolvedSS)
    }

    let ineligibleOther = 0
    for (let i=0; i < dataS.studentsCurrent.length; i++) {
        let pell = dataS.studentsCurrent[i].academicYearStatus[0]
        // console.log('line 41', pell)
        if (pell.financialAidStatus === "🔴 Ineligible: Other") {
            ineligibleOther++
        } 
        // console.log("line 47", ineligibleOther)
    }

    let pendingLoans = 0
    for (let i=0; i < dataS.studentsCurrent.length; i++) {
        let pell = dataS.studentsCurrent[i].academicYearStatus[0]
        // console.log('line 41', pell)
        if (pell.financialAidStatus === "🟡 Pending: Loans in Default") {
            pendingLoans++
        } 
        // console.log("line 47", pendingLoans)
    }

    let pendingParent = 0
    for (let i=0; i < dataS.studentsCurrent.length; i++) {
        let pell = dataS.studentsCurrent[i].academicYearStatus[0]
        // console.log('line 41', pell)
        if (pell.financialAidStatus === "🟡 Pending: Parent Information") {
            pendingParent++
        } 
        // console.log("line 47", pendingParent)
    }

    let pendingSS = 0
    for (let i=0; i < dataS.studentsCurrent.length; i++) {
        let pell = dataS.studentsCurrent[i].academicYearStatus[0]
        // console.log('line 41', pell)
        if (pell.financialAidStatus === "🟡 Pending: Selective Service") {
            pendingSS++
        } 
        // console.log("line 47", pendingSS)
    }

    let pendingSignature = 0
    for (let i=0; i < dataS.studentsCurrent.length; i++) {
        let pell = dataS.studentsCurrent[i].academicYearStatus[0]
        // console.log('line 41', pell)
        if (pell.financialAidStatus === "🟡 Pending: Signature Needed") {
            pendingSignature++
        } 
        // console.log("line 47", pendingSignature)
    }

    let pendingVerification = 0
    for (let i=0; i < dataS.studentsCurrent.length; i++) {
        let pell = dataS.studentsCurrent[i].academicYearStatus[0]
        // console.log('line 41', pell)
        if (pell.financialAidStatus === "🟡 Pending: Verification") {
            pendingVerification++
        } 
        // console.log("line 47", pendingVerification)
    }

    let pendingOther = 0
    for (let i=0; i < dataS.studentsCurrent.length; i++) {
        let pell = dataS.studentsCurrent[i].academicYearStatus[0]
        // console.log('line 41', pell)
        if (pell.financialAidStatus === "🟡 Pending: Other") {
            pendingOther++
        } 
        // console.log("line 47", pendingOther)
    }

    let totalVoucher = citizenshipIssue + lifeWithoutParole + loansInDefault + parentInfo + ssnDiscrepancy + unresolvedSS + ineligibleOther
    let totalUndetermined = pendingLoans + pendingParent + pendingSS + pendingSignature + pendingVerification + pendingOther
    let totalReport = pellEligible + citizenshipIssue + lifeWithoutParole + loansInDefault + parentInfo + ssnDiscrepancy + unresolvedSS + ineligibleOther + pendingLoans + pendingParent + pendingSS + pendingSignature + pendingVerification + pendingOther

    const headers = [
        { label: "Pell Breakdown", key: "academicYearStatus[0].financialAidStatus" },
        // { label: "Citizenship", key: "academicYearStatus[0].citizenshipIssue" },
        // { label: "Life Without Parole", key: "academicYearStatus[0].lifeWithoutParole" },
        // { label: "Loans in Default", key: "academicYearStatus[0].loansInDefault" },
        // { label: "Parent Info", key: "academicYearStatus[0].parentInfo" },
        // { label: "SSN Discrepancy", key: "academicYearStatus[0].ssnDiscrepancy" },
        // { label: "Unresolved Secret Service", key: "academicYearStatus[0].unresolvedSS" },
        // { label: "Ineligible Other", key: "academicYearStatus[0].ineligibleOther" },
        // { label: "Pending Loans in Default", key: "academicYearStatus[0].pendingLoans" },
        // { label: "Pending Parent Info", key: "academicYearStatus[0].pendingParent" },
        // { label: "Pending Selective Service", key: "academicYearStatus[0].pendingSS" },
        // { label: "Pending Signature", key: "academicYearStatus[0].pendingSignature" },
        // { label: "Pending Verification", key: "academicYearStatus[0].pendingVerification" },
        // { label: "Pending Other", key: "academicYearStatus[0].pendingOther" }
    ]

    return (
        <div>
            <div className="download-student-status">
                <CSVLink data={dataS.studentsCurrent} headers={headers}>
                    <span className="export-student-status-report">Download Report <GetAppIcon /></span>
                </CSVLink>
            </div>
            <Card className={classes.root}>
                <div className="card-header">Student Financial Aid Status</div>
                <CardContent className={classes.content}>
                    <FormControl>
                        <NativeSelect
                            id="activeAcademicYear"
                            value={activeAcademicYear}
                            onChange={e => setActiveAcademicYear(e.target.value)}
                            input={<BootstrapInput />}
                        >
                        <option value={null}>Academic Year</option>
                        {activeYear}
                        </NativeSelect> 
                    </FormControl>
                    <div className="funding-table">
                    <table>
                        <colgroup span="2"></colgroup>
                        <thead>
                            <tr>
                                <th className="pell-grants-reports">Total Awarded</th>
                                <th className="pell-grants-reports">{pellEligible}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>----------------------</td>
                            </tr>
                            <tr>
                                <td><strong>Citizenship</strong></td>
                                <td><strong>{citizenshipIssue}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Life Without Parole</strong></td>
                                <td><strong>{lifeWithoutParole}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Loans in Default</strong></td>
                                <td><strong>{loansInDefault}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Parent Information</strong></td>
                                <td><strong>{parentInfo}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>SSN Discrepancy</strong></td>
                                <td><strong>{ssnDiscrepancy}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Unresolved Secret Service</strong></td>
                                <td><strong>{unresolvedSS}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Other</strong></td>
                                <td><strong>{ineligibleOther}</strong></td>
                            </tr>
                            <tr>
                                <td className="UBB-funded-reports"><strong>Total Voucher</strong></td>
                                <td className="UBB-funded-reports"><strong>{totalVoucher}</strong></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>----------------------</td>
                            </tr>
                            <tr>
                                <td><strong>Loans in Default</strong></td>
                                <td><strong>{pendingLoans}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Parent Information</strong></td>
                                <td><strong>{pendingParent}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Selective Service</strong></td>
                                <td><strong>{pendingSS}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Signature Needed</strong></td>
                                <td><strong>{pendingSignature}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Verification</strong></td>
                                <td><strong>{pendingVerification}</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Other</strong></td>
                                <td><strong>{pendingOther}</strong></td>
                            </tr>
                            <tr>
                                <td className="undetermined-reports"><strong>Total Undetermined</strong></td>
                                <td className="undetermined-reports"><strong>{totalUndetermined}</strong></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>----------------------</td>
                            </tr>
                            <tr>
                                <td className="funding-total-reports"><strong>Total</strong></td>
                                <td className="funding-total-reports"><strong>{totalReport}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
                </CardContent>
            </Card>
        </div>
    )
}

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(0),
            // marginBottom: '20px'
            borderColor: '#2a2e32',
        },
        },
        input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 186,
        height: 40,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            'Roboto',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#2a2e32',
            boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2);',
        },
        },
    }))(InputBase);

export default StudentFinancial
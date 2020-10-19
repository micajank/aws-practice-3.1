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
import { getAllAcademicYearsQuery, getFinancialReportQuery, getStudentStatus } from '../../../../queries/queries'

const Funding = props => {

    let [activeAcademicYear, setActiveAcademicYear] = useState('')

    const useStyles = makeStyles({
        root: props.cardStyles,
        content: props.cardContent
      });
    
    const classes = useStyles()

    const {loading, error, data} = useQuery(getAllAcademicYearsQuery)
    const {loading: loadingF, error: errorF, data: dataF} = useQuery(getFinancialReportQuery)
    const {loading: loadingS, error: errorS, data: dataS} = useQuery(getStudentStatus)

    console.log('line 29', dataF)
    // console.log('Line 28 Academic Years', data)

    if (loading) return <p>Loading...</p>
    if (loadingF) return <p>Loading...</p>
    if (loadingS) return <p>Loading...</p>
    
    if (error) {
        console.log(error)
        return <p>Error </p>
    }

    if (errorF) {
        console.log(errorF)
        return <p>Error </p>
    }

    if (errorS) {
        console.log(errorS)
        return <p>Error </p>
    }

    let activeYear = data.academicYears.map((y, i) => <option key={i} value={y.year}>{y.year}</option>)

    let pellTotalFunding
    for (let i=0; i < dataF.classes.length; i++) {
        if (dataF.classes[i].quarter === "Fall"){
            // console.log('Line 41', data.classes[i].quarter)
            pellTotalFunding = dataF.classes.reduce((acc, c) => acc + c.awarded, 0)
        }
        // console.log('Line 43', pellTotalFunding)
    }

    let ubbVoucherFunding 
    for (let i=0; i < dataF.classes.length; i++) {
        ubbVoucherFunding = dataF.classes.reduce((acc, v) => acc + v.voucher, 0)
    }
    // console.log('Line 51', ubbVoucherFunding)

    let undeterminedFunding
    for (let i=0; i < dataF.classes.length; i++) {
        undeterminedFunding = dataF.classes.reduce((acc, u) => acc + u.undetermined, 0)
    }
    // console.log('Line 57', undeterminedFunding)

    let totalFunding = pellTotalFunding + ubbVoucherFunding + undeterminedFunding

    let pellPercentage = ((pellTotalFunding / totalFunding) * 100).toFixed(2)
    let voucherPercentage = ((ubbVoucherFunding / totalFunding) * 100).toFixed(2)
    let undeterminedPercentage = ((undeterminedFunding / totalFunding) * 100).toFixed(2)

    let totalPercentage = Number(parseFloat(pellPercentage) + parseFloat(voucherPercentage) + parseFloat(undeterminedPercentage))

    let pellStudents = 0
    for (let i=0; i < dataS.studentsCurrent.length; i++) {
        let pell = dataS.studentsCurrent[i].academicYearStatus[0]
        // console.log('line 41', pell)
        if (pell.financialAidStatus === "🟢 Pell Awardee") {
            pellStudents++
        } 
        // console.log("line 45", pellStudents)
    }

    let voucherStudents = 0
    for (let i=0; i < dataS.studentsCurrent.length; i++) {
        let ineligible = dataS.studentsCurrent[i].academicYearStatus[0]
        // console.log('line 41', pell)
        if (ineligible.financialAidStatus.includes("🔴")) {
            voucherStudents++
        } 
        // console.log("line 45", voucherStudents)
    }

    let undeterminedStudents = 0
    for (let i=0; i < dataS.studentsCurrent.length; i++) {
        let undetermined = dataS.studentsCurrent[i].academicYearStatus[0]
        // console.log('line 61', undetermined)
        if (undetermined.financialAidStatus.includes("🟡")) {
            undeterminedStudents++
        } 
        // console.log("line 65", undeterminedStudents)
    }

    let totalStudents = pellStudents + voucherStudents + undeterminedStudents
    //  NEED AN ON CHANGE FUNCTION TO TRIGGER NEW REPORTING

    const headers = [
        { label: "Awarded", key: "awarded" },
        { label: "Voucher", key: "voucher" },
        { label: "Undetermined", key: "undetermined" },
        // { label: "DOC #", key: "docNum" },
        // { label: "UBB ID", key: "ubbId" },
        // { label: "FA Status", key: "academicYearStatus[0].financialAidStatus" },
        // { label: "Student Status", key: "academicYearStatus[0].studentStatus" }
    ]

    return (
        <div>
            <div className="download-funding-report">
                <CSVLink data={dataF.classes} headers={headers}>
                    <span className="export-funding-report">Download Report <GetAppIcon /></span>
                </CSVLink>
            </div>
            <Card className={classes.root}>
                <div className="card-header">Funding</div>
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
                            <colgroup span="4"></colgroup>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Tuition</th>
                                    <th>Tuition %</th>
                                    <th># of Students</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="pell-grants-reports"><strong>Awarded</strong></td>
                                    <td><strong>$ {pellTotalFunding}</strong></td>
                                    <td><strong>{pellPercentage}%</strong></td>
                                    <td><strong>{pellStudents}</strong></td>
                                </tr>
                                <tr>
                                    <td className="UBB-funded-reports"><strong>Voucher</strong></td>
                                    <td><strong>$ {ubbVoucherFunding}</strong></td>
                                    <td><strong>{voucherPercentage}%</strong></td>
                                    <td><strong>{voucherStudents}</strong></td>
                                </tr>
                                <tr>
                                    <td className="undetermined-reports"><strong>Undetermined</strong></td>
                                    <td><strong>$ {undeterminedFunding}</strong></td>
                                    <td><strong>{undeterminedPercentage}%</strong></td>
                                    <td><strong>{undeterminedStudents}</strong></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>----------------------</td>
                                    <td>----------------------</td>
                                    <td>----------------------</td>
                                </tr>
                                <tr>
                                    <td className="funding-total-reports"><strong>Total</strong></td>
                                    <td><strong>$ {totalFunding}</strong></td>
                                    <td><strong>{totalPercentage}%</strong></td>
                                    <td><strong>{totalStudents}</strong></td>
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

export default Funding
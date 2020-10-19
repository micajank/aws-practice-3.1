import React, {useState, useEffect} from 'react'

//material ui
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'

const ClassForm = props => {

    let [classNumber, setClassNumber] = useState(props.classEditInfo ? props.classEditInfo.classNumber : '')
    let [className, setClassName] = useState(props.classEditInfo ? props.classEditInfo.className : '')
    let [tuition, setTuition] = useState(props.classEditInfo ? props.classEditInfo.tuition : 0)
    let [fees, setFees] = useState(props.classEditInfo ? props.classEditInfo.fees : 0)
    let [awarded, setAwarded] = useState(props.classEditInfo ? props.classEditInfo.awarded : 0)
    let [voucher, setVoucher] = useState(props.classEditInfo ? props.classEditInfo.voucher : 0)
    let [undetermined, setUndetermined] = useState(props.classEditInfo ? props.classEditInfo.undetermined : 0)
    let [invoice, setInvoice] = useState(props.classEditInfo ? props.classEditInfo.invoice : false)
    let [paid, setPaid] = useState(props.classEditInfo ? props.classEditInfo.paid : false)
    let [paidDate, setPaidDate] = useState(props.classEditInfo ? props.classEditInfo.paidDate : null)
    let [reimbursed, setReimbursed] = useState(props.classEditInfo ? props.classEditInfo.reimbursed : false)
    let [reimbursedDate, setReimbursedDate] = useState(props.classEditInfo ? props.classEditInfo.reimbursedDate : null)
    let [message, setMessage] = useState('')

    // console.log('🏅class edit info', props.classEditInfo)

    const handleRadioSelect = (selected) => {
        if((tuition) <= 0) {
            setMessage('Tuiton input must be greater than $0')
        }

        if(selected === 'awarded') {
            setAwarded(tuition + fees)
            setVoucher(0)
            setUndetermined(0)
 
        } else if(selected === 'voucher') {
            setAwarded(0)
            setVoucher(tuition + fees)
            setUndetermined(0)
        } else {
            setAwarded(0)
            setVoucher(0)
            setUndetermined(tuition + fees)
        }
    }


    useEffect(() => {
        props.setClass({
            classNumber,
            className,
            tuition,
            fees,
            awarded,
            voucher,
            undetermined,
            invoice,
            paid,
            paidDate,
            reimbursed,
            reimbursedDate
        })
    },[classNumber, className, tuition, fees, awarded, voucher, undetermined, invoice, paid, paidDate, reimbursed, reimbursedDate])


    const handleTuitionChange = (value) => {
        setTuition(value)
        
        if(awarded > 0) {
            setAwarded(value)
        } else if (voucher > 0) {
            setVoucher(value)
        } else {
            setUndetermined(value)
        }
    }

    let paidDatePicker = ''
    let reimbursedDatePicker = ''
    if(paid) {
        paidDatePicker = (<><label>Date Paid </label> <TextField type="date" placeholder="Paid Date" variant="outlined" value={paidDate} onChange={e => setPaidDate(e.target.value)} /></>)
    }
    if(reimbursed) {
        reimbursedDatePicker = (<><label>Date Reimbursed</label><TextField type="date" placeholder="Reimbursed Date" variant="outlined" value={reimbursedDate} onChange={e => setReimbursedDate(e.target.value)} /></>)
    }

    return (
        <form>
            <p className="assistive-text">{message}</p>
            <div className="add-class-row-one">
                <TextField label={<span style={{ fontSize: '15px' }}>Class Number</span>} variant="outlined" value={classNumber} style={{width: 200, marginRight: 5}} onChange={e => setClassNumber(e.target.value)} />
                <TextField label={<span style={{ fontSize: '15px' }}>Class Description</span>} variant="outlined" value={className} style={{width: 200, marginRight: 5}} onChange={e => setClassName(e.target.value)} />
                <TextField type="number"  label={<span style={{ fontSize: '15px' }}>Tuition</span>} variant="outlined" value={tuition} style={{width: 200, marginRight: 5}} onChange={e => handleTuitionChange(parseFloat(e.target.value))} />
                <div className="class-radials">
                    <FormControlLabel 
                        value={awarded} 
                        control={
                            <Radio 
                                checked={awarded > 0} 
                                onChange={() => handleRadioSelect('awarded')}/>} 
                        label={<span style={{ fontSize: '15px' }}>Awarded</span>} 
                        labelPlacement="top" />
                    <FormControlLabel 
                        value={voucher} 
                        control={
                            <Radio 
                                checked={voucher > 0} 
                                onChange={() => handleRadioSelect('voucher')} />} 
                        label={<span style={{ fontSize: '15px' }}>Voucher</span>} 
                        labelPlacement="top"/>
                    <FormControlLabel 
                        value={undetermined} 
                        control={
                            <Radio 
                                checked={undetermined > 0} 
                                onChange={() => handleRadioSelect('undetermined')} />} 
                        label={<span style={{ fontSize: '15px' }}>Undetermined</span>} 
                        labelPlacement="top"/>
                </div>
            </div>
            <div className="add-class-row-two">
                <TextField  type="number" label={<span style={{ fontSize: '15px' }}>Other Fees</span>} variant="outlined" value={fees} style={{width: 200, marginRight: 5}} onChange={e => setFees(parseFloat(e.target.value))} />
                <FormControl>
                    <FormGroup>
                        <div className="class-checkbox" style={{ display: 'flex', flexDirection: 'row'}}>
                            <FormControlLabel
                                value={invoice}
                                control={<Checkbox color="primary" checked={invoice} />}
                                label={<span style={{ fontSize: '15px' }}>Invoiced</span>}
                                labelPlacement="top"
                                onChange={e => setInvoice(e.target.checked)}
                            />
                            <FormControlLabel
                                value={paid}
                                control={<Checkbox color="primary" checked={paid}/>}
                                label={<span style={{ fontSize: '15px' }}>Paid</span>}
                                labelPlacement="top"
                                onChange={e => setPaid(e.target.checked)}
                            />
                            <FormControlLabel
                                value={reimbursed}
                                control={<Checkbox color="primary" checked={reimbursed} />}
                                label={<span style={{ fontSize: '15px' }}>Reimbursed</span>}
                                labelPlacement="top"
                                onChange={e => setReimbursed(e.target.checked)}
                            />
                        </div>
                        {paidDatePicker}
                        {reimbursedDatePicker}
                    </FormGroup>
                </FormControl>
            </div>
            <hr className="class-hr" />
        </form>
    )
}

export default ClassForm
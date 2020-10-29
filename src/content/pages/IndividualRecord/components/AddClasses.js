import React, {useState} from 'react'
import { useQuery, useMutation, gql } from '@apollo/client'
//material ui
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect'
import InputBase from '@material-ui/core/InputBase';
//queries
import { getAllAcademicYearsQuery, getStudentClassesQuery } from '../../../../queries/queries'
import { addClassMutation, updateClassMutation } from '../../../../queries/mutations'
//drop down
import {classStatusDropDown, quartersDropDown} from '../../../../static/dropdowns'
//components
import ClassForm from './ClassForm'
const AddClasses = props => {
    let [classOne, setClassOne] = useState({})
    let [classTwo, setClassTwo] = useState({})
    let [classThree, setClassThree] = useState({})
    let [quarter, setQuarter] = useState(props.classEditInfo ?  props.classEditInfo.quarter : '')
    let [year, setYear] = useState(props.classEditInfo ? props.classEditInfo.academicYear.id : '')
    let [status, setStatus] = useState(props.classEditInfo ? props.classEditInfo.status : 'Current')
    let [message, setMessage] = useState('')
    const {loading, error, data} = useQuery(getAllAcademicYearsQuery)
    const [addClass] = useMutation(
        addClassMutation,
        {
            update(cache, {data: {addClass}}) {
                cache.modify({
                    fields: {
                        studentClasses(existingStudentClasses = []) {
                            const newStudentClassRef = cache.writeFragment({
                                data: addClass,
                                fragment: gql `
                                    fragment NewStudentClass on StudentClass {
                                        id
                                        academicYear {
                                            id
                                            year
                                            isActive
                                        }
                                        quarter
                                        classNumber
                                        className
                                        status
                                        tuition
                                        fees
                                        awarded
                                        voucher
                                        undetermined
                                        invoice
                                        paid
                                        paidDate
                                        reimbursed
                                        reimbursedDate
                                    }
                                `
                            })
                            return [...existingStudentClasses, newStudentClassRef]
                        }
                    }
                })
            }
        }
        )
    const [updateClass] = useMutation(updateClassMutation)
    if (loading) return <p>Loading...</p>
    if (error) {
        console.log(error)
        return <p>Error fetching data :(</p> 
        }
    const handleSubmit = () => {
        if(!year || !quarter) {
            setMessage('Please select a year and quarter')
            return
        }
        let addtlFields = {
            academicYearId: year,
            quarter: quarter,
            status: status, 
            studentId: props.studentId
        }
        let classOneData = {
            ...classOne,
            ...addtlFields
        }
        let classTwoData = {
            ...classTwo,
            ...addtlFields
        }
        let classThreeData = {
            ...classThree,
            ...addtlFields
        }
        console.log('Class1:', classOneData, 'Class2:', classTwoData, 'Class3:', classThreeData)
        if(classOne.classNumber) {
            addClass({variables: classOneData})
        }
        if(classTwo.classNumber) {
            addClass({variables: classTwoData})
        }
        if(classThree.classNumber) {
            addClass({variables: classThreeData})
        }
        props.handleClose()  
    }
    const handleEdit = () => {
        let addtlFields = {
            id: props.classEditInfo.id,
            academicYearId: year,
            quarter: quarter,
            status: status, 
            studentId: props.studentId
        }
        let classData = {
            ...classOne,
            ...addtlFields
        }
        console.log('edit:', classData)
        updateClass({
            variables: classData, 
            refetchQueries: [
                {
                    query: getStudentClassesQuery, 
                    variables: {id: props.studentId}
                }
            ]
        })
        props.handleClose()
    }
    let academicYearDropOptions = data.academicYears.map((year, i) => <option key={i} value={year.id}>{year.year}</option> )
    let quarterDropOptions = quartersDropDown.map((quarter, i) => <option key={i} value={quarter}>{quarter}</option>)
    let statusDropOptions = classStatusDropDown.map((status, i) => {
        if(!status["Grade"]) {
            return <option key={i} value={status}>{status}</option>
        } else {
            return (
                <optgroup label="Grade">
                    {status["Grade"].map((s, i) => <option key={i} value={s}>{s}</option>)}
                </optgroup>
            )
        }
    })
    let totalClassCosts = classOne.tuition + classOne.fees + classTwo.tuition + classTwo.fees + classThree.tuition + classThree.fees
    if(props.classToEdit) {
        return (
            <div className="add-class">
                <div className="edit-class">
                    <h3>Edit Class</h3>
                    <p className="assistive-text">{message}</p>
                    <div className="yearquarter-dropdowns">
                        <FormControl>
                            <NativeSelect
                                onChange={e => setYear(e.target.value)}
                                input={<BootstrapInput />}
                            >
                                <option value={props.classEditInfo.academicYear.id} >{props.classEditInfo.academicYear.year} </option>
                                {academicYearDropOptions}
                            </NativeSelect>
                        </FormControl>
                        <FormControl>
                            <NativeSelect
                                onChange={e => setQuarter(e.target.value)}
                                input={<BootstrapInput />}
                            >
                                <option value={props.classEditInfo.quarter} >{props.classEditInfo.quarter}</option>
                                {quarterDropOptions}
                            </NativeSelect>
                        </FormControl>
                        <FormControl>
                            <NativeSelect
                                onChange={e => setStatus(e.target.value)}
                                input={<BootstrapInput />}
                            >
                                <option value={props.classEditInfo.status} >{props.classEditInfo.status} </option>
                                {statusDropOptions}
                            </NativeSelect>
                        </FormControl>
                    </div>
                    <h6>{props.classEditInfo.classNumber}</h6>
                    <ClassForm setClass={setClassOne} classEditInfo={props.classEditInfo} />
                    <div>
                        <button className="class-cancel" onClick={props.handleClose}>CANCEL</button>
                        <button className="class-save" onClick={handleEdit}>SAVE</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="add-class">
            <h3>Add Class</h3>
            <p className="assistive-text">{message}</p>
            <div className="yearquarter-dropdowns">
                <FormControl>
                    <NativeSelect
                        onChange={e => setYear(e.target.value)}
                        input={<BootstrapInput />}
                    >
                        <option value={null} >Academic Year</option>
                        {academicYearDropOptions}
                    </NativeSelect>
                </FormControl>
                <FormControl>
                    <NativeSelect
                        onChange={e => setQuarter(e.target.value)}
                        input={<BootstrapInput />}
                    >
                        <option value={null} >Quarter</option>
                        {quarterDropOptions}
                    </NativeSelect>
                </FormControl>
            </div>
            <h6>Class 1</h6>
            <ClassForm setClass={setClassOne} />
            <h6>Class 2</h6>
            <ClassForm setClass={setClassTwo} />
            <h6>Class 3</h6>
            <ClassForm setClass={setClassThree} />
            <p>Total: {totalClassCosts ? totalClassCosts : 0}</p>
            <div>
                <button className="class-cancel" onClick={props.handleClose}>CANCEL</button>
                <button className="class-save" onClick={handleSubmit}>SAVE</button>
            </div>
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
export default AddClasses
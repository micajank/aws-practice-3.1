import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'

//components
import AccordianDivider from './AccordianDivider'
import AddClasses from './AddClasses'
import ClassQuarters from './ClassQuarters'
import PopUp from '../../../Reusable_Components/PopUp'
import RoundButton from '../../../Reusable_Components/RoundButton'
import SquareButton from '../../../Reusable_Components/SquareButton'

//queries
import { getStudentClassesQuery } from '../../../../queries/queries'

const StudentClasses = props => {

    let [showPopUp, setShowPopUp] = useState(false)
    let [classToEdit, setClassToEdit] = useState('')

    //query for classes by student id
    const [getClassInfo, {loading, error, data}] = useLazyQuery(getStudentClassesQuery)

    useEffect(() => {
        if(props.studentId && !showPopUp) {
            getClassInfo({
                variables: {id: props.studentId}
            })
        }
        // if(props.studentId && !showPopUp) {

        // }
    }, [showPopUp])

    if (loading) return <p>Loading...</p>
    if (error) {
        console.log(error)
        return <p>Error fetching data :(</p> 
        }

    let content
    if(!data || !data.studentClasses.length) {
        content = <p>No classes have been added</p>
    }
    else {
        console.log('CLASSES DATA', data)

        /* --- filter for each academic year -- */
        //first need to know what years this student has classes associated with
        let years = data.studentClasses.map(d => d.academicYear.year)
        let uniqueYears = Array.from(new Set(years))
        
        //then for each year, map to manipulate the data to show that student's classes by year
        let byYear = uniqueYears.map(y => {
            return {
                year: y,
                classes: data.studentClasses.filter(d => d.academicYear.year === y) 
            }
        })

        //get year totals for awarded, voucher, undetermined
        let byYearWithTotals = byYear.map(y => {
            let totalAwarded = 0
            let totalVoucher = 0
            let totalUndetermined = 0

            y.classes.map(c => {
                totalAwarded += c.awarded
                totalVoucher += c.voucher
                totalUndetermined += c.undetermined
                return ''
            })

            return {year: y.year, classes: y.classes, totalAwarded, totalVoucher, totalUndetermined}
        })

        content = byYearWithTotals.map((y, i) => { 
            
            let classHeaders = props.headers.map(h => {
                if(h === "Awarded") {
                    return `$${y.totalAwarded}`
                } else if (h === "Voucher") {
                    return `$${y.totalVoucher}`
                } else if (h === "Undetermined") {
                    return `$${y.totalUndetermined}`
                } else {
                    return ''
                }
            })

            return (
                <AccordianDivider 
                    key={i}
                    subtitle={y.year}
                    content={<ClassQuarters data={y} headers={props.headers} setShowPopUp={setShowPopUp} setClassToEdit={setClassToEdit}/>}
                    additionalHeaders={classHeaders}
                    additionalHeadersGrid={"table-column-grid-classes-header"}
                    headerBackground={"#0094BC"}
                />
            )
        })

    }

    /* ------------------------ ADD/EDIT CLASSES POP UP ------------------------------ */

    const handleOpen = () => {
        setShowPopUp(true)
    }

    const handleClose = () => {
        setShowPopUp(false)
    }

    let classEditInfo = null
    if(classToEdit) {
        classEditInfo = data.studentClasses.filter(c => c.id === classToEdit)[0]
    }

    /* ------------------------ RENDER ------------------------------ */
    return (
        <div>
            <PopUp 
                body={<AddClasses handleClose={handleClose} studentId={props.studentId} classToEdit={classToEdit} classEditInfo={classEditInfo}/>}
                showPopUp={showPopUp}
                open={showPopUp}
                onClose={handleClose}
                handleOpen={handleOpen}
            /> 
            <RoundButton className='round-button-classes' onClick={handleOpen} />
            {content}
            { data && data.length ? <SquareButton text={"SAVE"} className={"square-button-classes"}/> : ''}
        </div>
    )
}


export default StudentClasses
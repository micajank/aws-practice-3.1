import React, { useState, useEffect } from 'react'

// material ui
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'

// queries
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { getAllStudentsQuery } from '../../../../graphql/custom'
import { deleteStudentMutation } from '../../../../graphql/custom'

const DeleteStudent = props => {

    // STATES
    let [students, setStudents] = useState([])

    // STYLES
    const useStyles = makeStyles({
        root: props.cardStyles,
        content: props.cardContent
    });
    const classes = useStyles()

    // const {loading, error, data} = useQuery(getAllStudentsQuery)
    async function getAllStudents() {
        try {
            const studentsData = await API.graphql(graphqlOperation(getAllStudentsQuery))
            const students = studentsData.data.getAllStudentsQuery.items
            setStudents(students)
        } catch(err) {
            return <p> Error fetching students </p>
        }
    }
    if (!students) return <p>Loading...</p>
    // const [deleteStudent] = useMutation(deleteStudentMutation)
    async function deleteStudent(studentId) {
        try {await API.graphql(graphqlOperation(deleteStudentMutation, {input:studentId}))} 
        catch (err) {return <p> Error deleting students </p>}
    }

    const handleDeleteStudent = (e) => {
        console.log('Clicked icon to delete student', e.target.value)
        if (props.user.admin) {deleteStudent(e.target.value)}
        else return {message: "PERMISSION DENIED"}
    }

    let students = data.students.map((s, i) => {
        return (
            <div key={i} className="delete-students">
                <h3 className="delete-student-first-name">{s.firstName}</h3>
                <h3 className="delete-student-last-name">{s.lastName}</h3>
                <h3 className="delete-student-doc-num">{s.docNum}</h3>
                <button className="delete-student-icon" value={s.id} onClick={handleDeleteStudent}>🗑</button>
            </div>
        )
    })
    
    return (
        <div>
            <Card className={classes.root}>
                <div className="card-header">Delete A Student Record</div>
                <CardContent className={classes.content}>
                    {students}
                </CardContent>
            </Card>
        </div>
    )
}

export default DeleteStudent
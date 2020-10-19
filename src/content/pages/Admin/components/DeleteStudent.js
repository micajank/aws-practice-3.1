import React from 'react'

// material ui
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'

// queries
import { useQuery, useMutation } from '@apollo/client';
import { getAllStudentsQuery } from '../../../../queries/queries'
import { deleteStudentMutation } from '../../../../queries/mutations'

const DeleteStudent = props => {

    const useStyles = makeStyles({
        root: props.cardStyles,
        content: props.cardContent
      });
    
    const classes = useStyles()

    const {loading, error, data} = useQuery(getAllStudentsQuery)
    const [deleteStudent] = useMutation(deleteStudentMutation)

    console.log('Line 23 Students', data)

    if (loading) return <p>Loading...</p>

    if (error) {
        console.log(error)
        return <p>Error :(</p>
    }

    const handleDeleteStudent = (e) => {
        console.log('Clicked icon to delete student', e.target.value)
        deleteStudent({variables: {id: e.target.value, userId: props.user._id }})
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
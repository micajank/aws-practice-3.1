import React, { useState, useEffect } from 'react'

// material ui
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect';

// queries
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { getAllAcademicYearsQuery } from '../../../../graphql/custom'

// components
import SquareButton from '../../../Reusable_Components/SquareButton'

/**
 * CHANGE ACTIVE YEAR
 * Purpose is to allow the current active year to be changed
 */
const ChangeActiveYear = props => {
    
    // STATES
    let [allYears, setAllYears] = useState([])
    let [activeAcademicYear, setActiveAcademicYear] = useState('')

    // GRAB THE YEARS
    useEffect(() => {
        getAllAcademicYears()
    }, [])

    /**
     * SAVING ACADEMIC YEARS TO STATE VARIABLES
     */
    // First step is to make the request and save the data that comes back.
    async function getAllAcademicYears() {
        try {
            const yearsData = await API.graphql(graphqlOperation(getAllAcademicYearsQuery))
            const years = yearsData.data.getAllAcademicYears.items
            setAllYears(years)
        } catch (err) { 
            console.log("Error fetching ") 
            return <p> Error :( </p>
        }
    }
    // If the data hasn't yet arrived, let the user know that it is loading.
    if (!allYears) return <p>Loading...</p>
    // Once the data has arrived, save the active year's component to the state
    let activeYear = allYears.map((y, i) => <option key={i} value={y.year}>{y.year}</option>)
    console.log('Line 42', activeYear)

    /**
     * HANDLES CHANGE OF ACTIVE YEAR
     * @TODO Import the mutation and call it here.    
     */
    const handleSubmit = (e) => {
        console.log('Active year changed to', activeAcademicYear)
        // TODO: Insert mutation call
    }


    // STYLES
    const useStyles = makeStyles({
        root: props.cardStyles,
        content: props.cardContent
    });
    const classes = useStyles()
    
    /**
     * COMPONENT
     */
    return (
        <div>
            <Card className={classes.root}>
                <div className="card-header">Change Active Academic Year or Quarter</div>
                <CardContent className={classes.content}>
                    <h3>Active Academic Year</h3>
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
                    <SquareButton className="academic-year-save" text="SAVE" onClick={handleSubmit} />
                </CardContent>
            </Card>
        </div>
    )
}

/**
 * Custom styles for this page
 */
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

export default ChangeActiveYear
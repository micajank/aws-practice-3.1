import React, {useState} from 'react'
import {Auth} from 'aws-amplify'
import { Route } from 'react-router-dom'

//import Dashboard from './Pages/Dashboard/Dashboard'
//import StudentDatabase from './Pages/StudentDatabase/StudentDatabase'
import TestStub from './TestStub'

const Content = props => {

    console.log("From props:", props.user)

    return (
        <main>
            <div className="container">
                <Route exact path="/" render={
                    () => <TestStub user={props.user}/>
                } />
            </div>
        </main>
    )
}

export default Content
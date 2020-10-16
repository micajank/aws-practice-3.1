import React, {useState} from 'react'
import {Auth} from 'aws-amplify'
import { Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard/Dashboard'
import StudentDatabase from './pages/StudentDatabase/StudentDatabase'


const Content = props => {

    console.log("From props:", props.user)

    return (
        <main>
            <div className="container">
                <Route exact path="/" render={
                    () => <Dashboard user={props.user}/>
                } />
                <Route path="/studentdb" render={
                    () => <StudentDatabase user={props.user} />
                } />
            </div>
        </main>
    )
}

export default Content
import React, { useEffect, useState } from 'react'
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify'
import { BrowserRouter as Router } from 'react-router-dom'
import { withAuthenticator } from '@aws-amplify/ui-react'
import Content from './content/Content'

// Stuff we don't have yet
// import jwtDecode from 'jwt-decode'
// import './scss/main.scss' 

const App = props => {

    // implement updateuser function and pass it to content
    
    return (
        <Router>
            <div className="App">
                <Content user={Auth.user.attributes} />
            </div>
        </Router>
    )
}

export default withAuthenticator(App)

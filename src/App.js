import React, { useEffect, useState } from 'react'
import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify'
import awsconfig from './aws-exports';
import { BrowserRouter as Router } from 'react-router-dom'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Authenticator } from "aws-amplify-react";
import Content from './content/Content'
import AuthWrapper from "./AuthWrapper";
Amplify.configure(awsconfig);

// Stuff we don't have yet
// import jwtDecode from 'jwt-decode'
// import './scss/main.scss' 

const App = props => {

    // implement updateuser function and pass it to content
    
    const user = {
        name:"John Doe",
        email:"123@test.com"
    }
    
    return (
        <Router>
            <div className="App">
            {/* <AmplifySignOut /> */}
                {/* <Content user={user} /> */}
                <Authenticator hideDefault={true} amplifyConfig={awsconfig}>
                    <AuthWrapper />
                </Authenticator>
            </div>
        </Router>
    )
}

export default App;

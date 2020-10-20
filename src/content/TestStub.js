import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { addUserMutation, getUsersQuery } from '../graphql/custom'


const TestStub = props => {
    
    

    /*
    useEffect(() => {
        let lars = {
            firstName: "Lars",
            lastName: "Nelson",
            email: "lnelson7820@gmail.com",
            admin: true
        }
        let david = {
            firstName: "David",
            lastName: "Schawel",
            email: "david.schawel@gmail.com",
            admin: true
        }
        let mac = {
            firstName: "Mac",
            lastName: "Jankowski",
            email: "micajank@umich.edu",
            admin: true
        }
        createUser(lars)
        createUser(david)
        createUser(mac)
    })

    async function createUser(userData) {
        try { await API.graphql(graphqlOperation(addUserMutation, {input:userData}))}
        catch (err) { return <p> Error creating user... </p> }
    }
    */
    
    return (
        <div>
            Attempting to request user data...
        </div>
    )
}

export default TestStub
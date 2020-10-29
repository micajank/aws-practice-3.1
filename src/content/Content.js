import React, {useState} from 'react'
import {Auth} from 'aws-amplify'
import { Route } from 'react-router-dom'

// import Dashboard from './pages/Dashboard/Dashboard'
// import StudentDatabase from './Pages/StudentDatabase/StudentDatabase'
import TestStub from './TestStub'


export default function Content(props) {

// =======
// const Content = props => {

    console.log("From props:", props.user)
    if (props.authState === "signedIn") {
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
    else {
        return null;
    }
}
    // }
    // >>>>>>> ccc2ff12715dd73fa756b50853ec10510d1790c2

        // if (props.authState === "signedIn") {
        //   return (
        //     <main>
        //         <div className="container">
        //             <Route exact path="/" render={
        //                 () => <Dashboard user={props.user}/>
        //             } />
        //             <Route path="/studentdb" render={
        //                 () => <StudentDatabase user={props.user} />
        //             } />
        //         </div>
        //     </main>
        //   );
        // } else {
        //   return null;
        // }

    
    
    
    
    // return (
    //     <main>
    //         <div className="container">
    //             <Route exact path="/" render={
    //                 () => <Dashboard user={props.user}/>
    //             } />
    //             <Route path="/studentdb" render={
    //                 () => <StudentDatabase user={props.user} />
    //             } />
    //         </div>
    //     </main>
    // )
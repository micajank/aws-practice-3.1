import React, {useState} from 'react'
import { Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard/Dashboard'
import StudentDatabase from './pages/StudentDatabase/StudentDatabase'

export default function Content(props) {


        if (props.authState === "signedIn") {
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
          );
        } else {
          return null;
        }

    
    
    }
    
    
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
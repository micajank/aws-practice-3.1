import React, { useState, Component } from "react";
import Content from "../src/content/Content";
import CustomLogin from "../src/content/Login";

export default function AuthWrapper(props) {

    const [username, setUsername] = useState("")

//   constructor(props) {
//     super(props);
//     this.state = {
//       username: ""
//     };
//     this.updateUsername = this.updateUsername.bind(this);
// }

    function updateUsername(newUsername) {
        setUsername(newUsername);
    }

    return (
      <div className="flex-1">
        <CustomLogin
          authState={props.authState}
          updateUsername={updateUsername}
          onStateChange={props.onStateChange}
        />
        <Content authState={props.authState} onStateChange={props.onStateChange} />
      </div>
    );
}


import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'
import UBBlogo from '../images/UBBlogo.png'
import TextField from '@material-ui/core/TextField';

const Login = props => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [redirect, setRedirect] = useState(false)


    if(redirect) {
        return <Redirect to="/dashboard" />
    }

    const handleLogin = (e) => {
        e.preventDefault()

        if(!email || !password) {
            setErrorMessage('Please make sure both a valid email and password are provided')
        }
        else {
            let data = {email, password}

            fetch(`${process.env.REACT_APP_SERVER_URL}/auth/login`,
                {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                }
                }
            )
            .then(response => response.json()
                .then(data => {
                    // This is where I assume the token would be passed to the user.
                    // Move the code from the schema here, maybe.
                    props.updateUser(data.token)
                    setRedirect(true)
                })
            )
            .catch(err => {
                console.log(err)
                setErrorMessage('Incorrect email or password. Please try again.')
            })
        }
    }

    if(props.user) {
        setRedirect(true)
    }

    return (
        <div className="login">
            <img src={UBBlogo} alt="logo" />
            <div className="login-form">
                <TextField id="outlined-basic" style={{width: 400}} placeholder="Email" variant="outlined" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Email</label>
                <TextField id="outlined-basic" style={{width: 400}} placeholder="Password" type="password" variant="outlined" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>Password</label>
                <div className="buttons">
                    <button className="forgot-password">FORGOT PASSWORD?</button>
                    <button className="button-login" onClick={handleLogin}>LOG IN</button>
                </div>
            </div>
            <p>{errorMessage}</p>
        </div>
    )
}

export default Login
import "./Login.css"
import { useState } from 'react'

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    function handleFormSubmit(event) {
        event.preventDefault()

        const userData = {
            userName,
            password
        }

        console.log(userData);
        alert(JSON.stringify(userData))
    }

    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Username:
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login
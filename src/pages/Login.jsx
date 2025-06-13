import { Form, useLocation, useNavigate } from "react-router"
import { useAuth } from "../contexts/AuthContext"
import { useState } from "react"

export default function Login() {
    const [error, setError] = useState(null)
    const {login} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/"

    async function handleLogin(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)

        // validér her...

        const response = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        const userdata = await response.json()

        if(!response.ok){
            setError(userdata.message || userdata.error || "Please provide login informations")
        } else {
            login(userdata.accessToken)
            navigate(from, { replace: true })
        }
        
    }
    // for browser try, use username: emilys password: emilyspass
    return(
        <Form onSubmit={handleLogin}>
            <div className="formgroup">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
            </div>
            <div className="formgroup">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            {error && (<div>{error}</div>)}
            <button type="submit">Log in</button>
        </Form>
    )
}
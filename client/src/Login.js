import React, {useState} from 'react';

function Login() {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    function handleSubmit(){
        e.preventDefault()
    }

    function onChange(e){
        const name = e.target.name
        value = e.target.value

        setLoginData(...loginData, {[name]: value})
    }

    render(
        <div id="login">
        <form id="login-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" name="username"/>
            <input type="text" placeholder="Password" name="password"/>
            <button id="submit">Login</button>
        </form>
        </div>
    )
}

export default Login
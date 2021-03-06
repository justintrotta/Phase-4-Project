import React, {useState} from 'react';
import Navbar from './Navbar';

function Login() {
    const [loginData, setLoginData] = useState({
        name: "",
        password: ""
    })

    function handleSubmit(e) {
        e.preventDefault()
        
        
        
        fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }).then(fetch("http://localhost:3000/login").then((response) => response.json()).then(console.log))
      }
    

    function handleChange(e){
        const name = e.target.name
        const value = e.target.value

        setLoginData({...loginData, [name]: value})
    }

    return (
        <div id="login">
          <Navbar/>
          <form id="login-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Username" name="name" onChange={handleChange}/>
              <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
              <button id="submit">Login</button>
        </form>
        </div>
    )
}

export default Login
import React, {useState} from 'react'
import Navbar from './Navbar'

function Signup(){
const [fail, setFail] = useState((<div></div>))
const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    admin: false
})

function handleChange(e){
    setFormData({
        ...formData, [e.target.name]: e.target.value
    })
}

function handleSubmit(e){
    console.log(JSON.stringify(formData.name))
    e.preventDefault()
    if (formData.password === formData.password_confirmation) {
        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify( formData
                // {
                // name: formData.name,
                // email: formData.email,
                // password: formData.password,
                // admin: formData.admin
            // }
            )
        }).then(setFail(<div>Account successfully created.</div>))
    } else {
        setFail(<div>Passwords don't match.</div>)
    }
}


return (
    <div id="signup-form">
        <Navbar/>
        <form onSubmit={handleSubmit}>
            {fail}
            <input type="text" name="name" placeholder="Username" onChange={handleChange} />
            <input type="text" name="email" placeholder="Email" onChange={handleChange}/>
            <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
            <input type="password" name="password_confirmation" placeholder="Confirm Password" onChange={handleChange}/>
            <button type="submit">Create Account</button>
            
        </form>
    </div>
)

}

export default Signup
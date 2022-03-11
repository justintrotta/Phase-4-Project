import React, {useState} from 'react';
import Navbar from './Navbar'

function AddSupplierForm() {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: ""
    })

    function handleChange(e){
        const name = e.target.name
        let value = e.target.value

        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/suppliers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
    }

    return (
        <div id="add-supplier-form">
            <Navbar/>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
                <input type="text" placeholder="Phone Number" name="phone" onChange={handleChange}/>
                <input type="text" placeholder="Address" name="address" onChange={handleChange}/>
                <button id="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddSupplierForm
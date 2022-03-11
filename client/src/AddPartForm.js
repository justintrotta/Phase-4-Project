import React, {useState} from 'react';
import Navbar from './Navbar'

function AddPartForm() {

    const [formData, setFormData] = useState({
        name: "",
        model: "",
        year: "",
        make: "",
        price: 0.00,
        order_id: 0,
        description: ""
    })

    function handleChange(e){
        const name = e.target.name
        let value = e.target.value

        if (name === "price" || name === "order_id") {
            value = parseInt(e.target.value)
        }

        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/parts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
    }

return (
    <>
    <Navbar/>
    <div id="add-part-form">
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
        <input type="text" placeholder="Model" name="model" onChange={handleChange}/>
        <input type="text" placeholder="Year" name="year" onChange={handleChange}/>
        <input type="text" placeholder="Make" name="make" onChange={handleChange}/>
        <input type="text" placeholder="Price" name="price" onChange={handleChange}/>
        <input type="text" placeholder="Order ID Number" name="order_id" onChange={handleChange}/>
        <input type="text" placeholder="Description" name="description" onChange={handleChange}/>
        <button id="submit">Submit</button>
    </form>    
    </div>
    </>
)
}

export default AddPartForm
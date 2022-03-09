import React, {useState} from 'react';

function AddSupplierForm() {

    const [formData, setFormData] = useState({
        date: "",
        arrival: "",
        complete: false,
        suppliers_id: "",
        parts_id: ""
    })

    function handleChange(e){
        const name = e.target.name
        let value = e.target.value

        if (e.target.type === "checkbox"){
            value = e.target.checked
        }

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
        <div id="add-supplier-form" onSubmit={handleSubmit}>
            <form>
                <input type="text" placeholder="Date" name="date" onChange={handleChange}/>
                <input type="text" placeholder="Arrival" name="arrival" onChange={handleChange}/>
                <input id="1" type="checkbox" name="completed" onChange={handleChange}/>
                <label htmlFor="1">Check if order is complete.</label>
                <input type="text" placeholder="Part ID Number" name="parts_id" onChange={handleChange}/>
                <input type="text" placeholder="Supplier ID Number" name="suppliers_id" onChange={handleChange}/>

                <button id="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddSupplierForm
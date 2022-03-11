import React, {useState, useEffect} from 'react'
import Navbar from './Navbar';
import {Link} from 'react-router-dom'

function SupplierList(){

    const [suppliers, setSuppliers] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/suppliers").then((response) => response.json()).then(setSuppliers)
    }, [])

    function handleDelete(e){
        fetch(`http://localhost:3000/suppliers/${e.target.name}`, {
            method: "DELETE"
        }).then((response) => response.json()).then(() => {
            setSuppliers(suppliers.splice(suppliers.find((o) => {
                return o.id === e.target.name
            }, 1)))
        })
    }

    function handleUpdate(e){
        fetch(`http://localhost:3000/suppliers/${e.target.name}`, {
            method: 'PATCH',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                [e.target.previousSibling.name]: e.target.previousSibling.value,
                [e.target.previousSibling.previousSibling.name]: [e.target.previousSibling.previousSibling.value],
                [e.target.previousSibling.previousSibling.previousSibling.name]: [e.target.previousSibling.previousSibling.previousSibling.value],
            })
        })
    }

    const suppliersMap = suppliers.map((supplier) => {
        return (
        <div id="supplier-list">
            <input type="text" name="name" defaultValue={supplier.name}/>
            <input type="text" name="address" defaultValue={supplier.address}/>
            <input type="text" name="phone"  defaultValue={supplier.phone}/>
            <button id="update" name={supplier.id} onClick={handleUpdate}>Update</button>
            <button id="delete" name={supplier.id} onClick={handleDelete}>Delete</button>

        </div>
        )
    })

    return (
        <div id="suppliers-list">
            <Navbar/>
            {suppliersMap}
            <Link to="/add-suppliers">Add a Supplier</Link>
        </div>
    )
}

export default SupplierList 
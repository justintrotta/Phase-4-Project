import React, {useState, useEffect} from 'react'

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
        })
    }

    const suppliersMap = suppliers.map((supplier) => {
        return (
        <>
            <input type="text" name="name" value={supplier.name}/>
            <input type="text" name="address" value={supplier.address}/>
            <input type="text" name="phone"  value={supplier.phone}/>
            <button id="update" onClick={handleUpdate}>Update</button>
            <button id="delete" name={supplier.id} onClick={handleDelete}>Delete</button>

        </>
        )
    })

    return (
        <div id="suppliers-list">
            {suppliersMap}
        </div>
    )
}

export default SupplierList 
import React, {useState, useEffect} from 'react'
import Navbar from './Navbar';

function OrderList(){

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/orders").then((response) => response.json()).then(setOrders)
    }, [])

    function handleDelete(e){
        fetch(`http://localhost:3000/orders/${e.target.name}`, {
            method: "DELETE"
        }).then((response) => response.json()).then(() => {
            setOrders(orders.splice(orders.find((o) => {
                return o.id === e.target.name
            }, 1)))
        })
    }

    function handleUpdate(e){
        e.preventDefault()
        fetch(`http://localhost:3000/orders/${e.target.name}`, {
            method: 'PATCH',
            body: JSON.stringify({
                [e.target.previousSibling.previousSibling.name]: [e.target.previousSibling.previousSibling.value],
                [e.target.previousSibling.previousSibling.previousSibling.name]: [e.target.previousSibling.previousSibling.previousSibling.value],
                [e.target.previousSibling.previousSibling.previousSibling.previousSibling.name]: [e.target.previousSibling.previousSibling.previousSibling.previousSibling.value]
            })
        })
    }

    const ordersMap = orders.map((order) => {
        return (
        <form id="orders-form" key={order.id}>
            <input type="text" name="date" placeholder={order.date}/>
            <input type="text" name="arrival" placeholder={order.arrival}/>
            <input type="checkbox" name="completed"  defaultChecked={order.completed}/>
            <label for="checkbox">Completed</label>
            <button id="update" name={order.id} onClick={handleUpdate}>Update</button>
            <button id="delete" onClick={handleDelete}>Delete</button>

        </form>
        )
    })

    return (
        <div id="orders-list">
            <Navbar />
            {ordersMap}
        </div>
    )
}

export default OrderList 
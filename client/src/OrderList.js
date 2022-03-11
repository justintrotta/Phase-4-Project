import React, {useState, useEffect} from 'react'

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
        fetch(`http://localhost:3000/orders/${e.target.name}`, {
            method: 'PATCH',
            body: JSON.stringify({
                [e.target.parentElement.firstChild.name]: [e.target.parentElement.firstChild.value],
                [e.target.parentElement.secondChild.name]: [e.target.parentElement.secondChild.value],
                [e.target.parentElement.thirdChild.name]: [e.target.parentElement.thirdChild.value]
            })
        })
    }

    const ordersMap = orders.map((order) => {
        return (
        <form id="orders-form" key={order.id}>
            <input type="text" name="date" value={order.date}/>
            <input type="text" name="arrival" value={order.arrival}/>
            <input type="checkbox" name="completed"  checked={order.completed}/>
            <label for="checkbox">Completed</label>
            <button id="update" onClick={handleUpdate}>Update</button>
            <button id="delete" name={order.id} onClick={handleDelete}>Delete</button>

        </form>
        )
    })

    return (
        <div id="orders-list">
            {ordersMap}
        </div>
    )
}

export default OrderList 
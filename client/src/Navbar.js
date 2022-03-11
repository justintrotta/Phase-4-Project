import React from 'react';
import {Link} from 'react-router-dom';

function Navbar({user}){

    if (!user) {
        return (
            <div id="navbar">
                <Link to="/">Home</Link>
                <Link to="/login">Orders</Link>
                <Link to="/login">Suppliers</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        )
    } else {
    return (
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/suppliers">Suppliers</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
        </div>
    )
    }
}

export default Navbar
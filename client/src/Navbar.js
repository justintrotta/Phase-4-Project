import React from 'react';
import {Link} from 'react-router-dom';

function Navbar({user, setUser}){

    function handleClick(){
        fetch("http://localhost:3000/logout",{
            method: "DELETE"
        }).then(setUser({}))
    }

    const isLoggedIn = () => {
        if (user){
            return (<button id="logout" onClick={handleClick}>Log Out</button>)
        }
        else {
            return (
                <></>
            )
        }
    }

    const isAdmin = () => {
        if (user.admin) {
            return (
                <>
                <Link to="/orders">Orders</Link>
                <Link to="/suppliers">Suppliers</Link>
                </>
            )
        } else {
            return (<></>)
        }
    }

    return (
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/parts">Parts</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
        </div>
    )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <p><Link to="/">Todo App</Link></p>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">about</Link></li>
                <li><Link to="signIn">Sign In</Link></li>
                <li><Link to="signUp">Sign Up</Link></li>
                <li>Sign Out</li>
                <li>Avatar</li>
            </ul>
        </nav>
    )
}

export default NavBar
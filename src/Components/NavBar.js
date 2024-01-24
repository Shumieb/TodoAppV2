import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="flex flex-row justify-between justify-items-center bg-darkTeal text-lightSlate p-3 mb-7">
            <p className='basis-1/2 px-2 mx-2 text-lightSlate text-xl text-start hover:text-lighterTeal'>
                <Link to="/">Todo App</Link>
            </p>
            <ul className="flex flex-row basis-1/2 px-2 mx-1 justify-end">
                <li className='px-2 mx-1 text-lg text-lightSlate hover:text-lighterTeal'>
                    <Link to="/">Home</Link>
                </li>
                <li className='px-2 mx-1 text-lg text-lightSlate hover:text-lighterTeal'>
                    <Link to="about">About</Link>
                </li>
                <li className='px-2 mx-1 text-lg text-lightSlate hover:text-lighterTeal'>
                    <Link to="signIn">Sign In</Link>
                </li>
                <li className='px-2 mx-1 text-lg text-lightSlate hover:text-lighterTeal'>
                    <Link to="signUp">Sign Up</Link>
                </li>
                <li className='px-2 mx-1 text-lg text-lightSlate hover:text-lighterTeal'>
                    <input
                        className='cursor-pointer'
                        type="button"
                        value="Sign Out"
                    />
                </li>
                <li className='px-2 mx-1 text-lg hover:text-lighterTeal'>
                    <p className='text-lightSlate cursor-pointer hover:text-lighterTeal'>Avatar</p>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
import React from 'react'
import { Outlet } from "react-router-dom"
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

function LayoutPage() {
    return (
        <div className="Layout">
            <NavBar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default LayoutPage
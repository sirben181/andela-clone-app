import React from 'react'
import './navbar.css'
import NavBtn from './NavBtn'
import NavMenu from './NavMenu'

const Navbar = () => {
    return (
        <div className="navbar-container">
            < NavMenu />
            <NavBtn />
            
        </div>
    )
}

export default Navbar

import React from 'react'
import './navbar.css'
import NavBtn from './NavBtn'
import NavMenu from './NavMenu'

const Navbar = ({sidebar,handleSidebar}) => {
    return (
        <div className="navbar-container">
            < NavMenu sidebar={sidebar}
            handleSidebar={handleSidebar} />
            <NavBtn />
            
        </div>
    )
}

export default Navbar

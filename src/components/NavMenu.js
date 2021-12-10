import React from 'react';
import './navmenu.css';
import {FaBars} from 'react-icons/fa'
const NavMenu = () => {
    return (
        <div className="container">
            <div className="hamburger">
                <FaBars />
            </div>
            <div className="logo">
                 <img className='logoimage' src="https://andela.com/wp-content/uploads/2021/06/Andela_PrimaryLogo_TM_2021_AndelaBlue.svg" />
            </div>
            <div className='forcompanies'>
                <p className='companies-text' >For Companies</p>
            </div>
            <div className='forengineers'>
                <p className='companies-text' >For Engineers</p>
            </div>
            <div className='enterprise'>
               <p className='enterprise-text' >Enterprise</p>
            </div>
        </div>
    )
}

export default NavMenu

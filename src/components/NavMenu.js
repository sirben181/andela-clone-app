import React, { useState } from 'react';
import './navmenu.css';
import {FaBars} from 'react-icons/fa'
import CloseIcon from '@mui/icons-material/Close';
import {NavMenuDetails} from './NavMenuDetails'
const NavMenu = () => {
    const [sidebar,setSidebar]=useState(false)
    const handleSidebar=()=>{
        setSidebar(!sidebar)
    }
    return (
        <div className="container">
            <div className="hamburger">
                <FaBars onClick={handleSidebar}/>
               
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
            <nav className={sidebar ? 'nav-menu active' :'navmenu'}>
            <CloseIcon  style={{fontSize:'30px'}} className="closeIcon" onClick={handleSidebar}/>
            < ul onClick={handleSidebar} className="listbg">
                {NavMenuDetails.map((item)=>{
                    return(
                      
                        <li className="item-menu">
                            <a href="#">
                            <div className='hiring'>
                                <h3>{item.title1}</h3>
                                <p>{item.paraH1}</p>
                                <p>{item.paraH2} </p>
                            </div>
                            </a>
                            <a href="#">
                            <div className="joining">
                               <h3>{item.title2}</h3>
                               <p>{item.paraJ1}</p>
                               <p>{item.paraJ2}</p>
                            </div>
                            </a>
                            <a href="#">
                            <div className="aboutus">
                                <h3>{item.title3}</h3>
                                <p>{item.paraA1}</p>
                                <p>{item.paraA2}</p>
                                <p>{item.paraA3}</p>
                                <p>{item.paraA4}</p>
                                <p>{item.paraA5}</p>
                                <p>{item.paraA6}</p>
                            </div></a>
                           
                        </li>
                     
                    )
                })}

            </ul>
            </nav>
        </div>
    )
}

export default NavMenu

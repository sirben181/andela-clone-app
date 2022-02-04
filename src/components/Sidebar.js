import React,{useState} from 'react';
import './navmenu.css';
import CloseIcon from '@mui/icons-material/Close';
import {NavMenuDetails} from './NavMenuDetails'
const Sidebar =({sidebar,handleSidebar})=>{
  return <div>
       <nav className={sidebar ? 'nav-menu active' :'navmenu'}>
            <CloseIcon  style={{fontSize:'30px'}} className="closeIcon" onClick={handleSidebar}/>
            < ul onClick={handleSidebar} className="listbg">
                {NavMenuDetails.map((item)=>{
                    return(
                      
                        <li className="item-menu"
                        key={item.id}>
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

  </div>;
};

export default Sidebar;

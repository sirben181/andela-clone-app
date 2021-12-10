import React from 'react'
import './landingpage.css';
import woman from '../images/woman-rmbg.png'
const LandingPage = () => {
    return (
        <div className="landing-container">
             <div className="welcomeText">
                <h1 className='header'>Build remote engineering teams <br/> with the world's  top talent</h1>
                <button className="btn primary">Hire Talent</button>  
             </div>
             <div className="welcomephoto">
                 <img src={woman}  alt="" />
              </div>       
        </div>
    )
}
export default LandingPage


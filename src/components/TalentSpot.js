import React from 'react'
import './talentspot.css'
import fatma from '../images/fatma.png'
import alfred from '../images/alfred.png'
const TalentSpot = () => {
    return (
        <div className="talents_sample">
            {/* icon */}
            <h2>Talent Spotlight</h2>
            <div className="spots_talent">
            <div>
                <p>Meet a few of the talented <br/> engineers 
                    in our growing community.</p>
            </div>
            <div className="developer1_profile">
                <img src={fatma}alt="" style={{height:'400px'}}/>
            </div>
            <div className='developer1_experience'>
                <h3>SOFTWARE DEVELOPER</h3>
                <h2>Fatma</h2>
                <p>5 years of experience
                  Kenya
                </p>
            </div>
            <div  className="developer2_profile">
                <img src={alfred}alt="" style={{height:'400px'}}/>
            </div>
            <div className='developer1_experience'>
                <h3>FRONTEND DEVELOPER</h3>
                <h2>Alfred</h2>
                <p>4 years of experience
                  Kenya
                </p>
            </div>
            </div>
            
        </div>
    )
}

export default TalentSpot

import React from 'react'
import './community.css'
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Community = () => {
    return (
        <div className="community_container">
            <div className="community-wrapper">
           <Avatar
           className="communityicon" style="">
             <ChevronLeftIcon  />
               <FavoriteIcon />
             <ChevronRightIcon />
           </Avatar>
            <h3>Our Community</h3>
           </div>
            <div className="community_wrapper">
                <div className="community_profile">
                    <div className="person1_profile"></div>
                    <div className="person2_profile"></div>
                </div>
                <div className="community_info">
                    <div className="engineer_info">
                        <h3>175000+ Software Engineers</h3>
                        <p>Who have come together to develop their skills, <br/> 
                        earn from each other, and grow their careers</p>
                    </div>
                     <div className="skills_info">
                        <h3>100+ Technical Skills</h3>
                        <p>Skills include Ruby, Python, Go, Java, JavaScript, 
                            React-Native, Postgres, MongoDB, and many more.</p>
                    </div> 
                    <div className="countries_info">
                        <h3>90+ Countries</h3>
                        <p>With a geographic footprint that covers Africa, 
                            South America, Eastern Europe, and many more.</p>
                    </div>
                    <button className="primary">LEARN MORE</button>
                </div>
            </div>
            
        </div>
    )
}

export default Community

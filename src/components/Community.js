import React from 'react'
import './community.css'
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Community = () => {
    return (
        <div className="community_container">
             <div className="community_wrapper">
                   <div className="community_love">
                        <Avatar
                        className="communityicon" sx={{ width: 80, height: 80,bgcolor:'orange'}}>
                            <ChevronLeftIcon />
                            <FavoriteIcon />
                            <ChevronRightIcon />
                        </Avatar>
                        <h3>Our Community</h3>
                    </div>
                    <div className="profile_wrapper">
                            <div className="community_profile">
                                 <div className="person1_profile">
                                     <div className='person1_wrapper'>
                                       <div className='cardheader'>
                                            <Avatar sx={{width: 50, height: 50}}
                                            src='https://mui.com/static/images/avatar/1.jpg'/>
                                            <div className='cardheader_details'>
                                            <p><strong>Kelechuwa</strong></p>
                                            <p><LocationOnIcon sx={{height: 20, width: 20}}/> Lagos, Nigeria</p>
                                            </div>
                                        </div>
                                        <div className='cardbody'>
                                            <p className='p_experience'> 5 years experience</p>
                                            <p className='firstrow_stack'><span>Data Wrangling</span> <span>Do</span></p>
                                            <p className='row_language'><span>HTML/CSS/Js</span> <span>Kubonts</span></p>
                                            <p className='row_backend'><span>MongoDB</span> <span>NodeJs</span></p>
                                            <p className='row_skill'><span>+ 18 more skills</span></p>

                                        </div>
                                     </div>

                                  </div>
                                  <div className="person2_profile">
                                       <div className='person2_wrapper'>
                                            <div className='cardhead'>
                                                    <Avatar  sx={{width: 50, height: 50}} src='https://mui.com/static/images/avatar/1.jpg'/>
                                                    <div className='cardheader_info'>
                                                    <p><strong>Haiba</strong></p>
                                                    <p><LocationOnIcon sx={{height: 20, width: 20}}/> Cairo,Egypt</p>
                                                    </div>
                                                </div>
                                                <div className='card_body'>
                                                        <p className='cardbody_firstrow'> 5 years experience</p>
                                                        <p className='cardbody_second'><span>.NET</span><span>Angular</span><span>Ansible</span></p>
                                                        <p className='cardbody_third'><span>C #</span><span>Data Modeling</span></p>
                                                        <p className='cardbody_four'><span>React</span><span>RestAPI(Advance)</span></p>
                                                        <p className='cardbody_five'><span>MachineLearning</span></p>
                                                    </div>
                                            
                                       </div>
                                   </div>
                               </div>
                                   <div className="community_info">
                                    <div className="engineer_info">
                                        <h3>175000+ Software Engineers</h3>
                                        <p>Who have come together to develop their skills, <br/> 
                                        earn from each other, and grow their careers</p>
                                    </div>
                                    <div className="skills_info">
                                        <h3>100+ Technical Skills</h3>
                                        <p>Skills include Ruby, Python, Go,<br/> Java, JavaScript, 
                                            React-Native, Postgres, MongoDB, and many more.</p>
                                    </div> 
                                    <div className="countries_info">
                                        <h3>90+ Countries</h3>
                                        <p>With a geographic footprint that covers<br/> Africa, 
                                        South America, Eastern Europe, and many more.</p>
                                    </div>
                                    <div>
                                        <button className="primary">LEARN MORE</button>
                                    </div>
                                </div>
                            

                    </div>
             </div>
                   
            
        </div>
            
      
    )
}

export default Community

import React from 'react'
import './footer.css'
import { FaFacebookSquare, FaGithub, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer_container">
            <div className='growengineer_footer'>
                <span> <p>Grow your engineering team with global talent today.</p>
                <p>Tell us what you are looking for, we’ll take care of the rest.</p></span>
                <button className="primary">Hire Talent</button>
            </div>
            <div className="expertise_footer">
                <h4>Andela has experts in:</h4>
                <div className="skill_blocks">
                <div className="skills_block1">
                    <p>Angular</p>
                    <p>Data Engineering</p>
                    <p>DevOps</p>
                </div>
                <div className="skills_block2">
                    <p>Golang</p>
                    <p>iOS</p>
                    <p>Java</p>
                </div>
                <div className="skills_block3">
                    <p>Python</p>
                    <p>QA</p>
                    <p>React Native</p>
                </div>
                <div className="skills_block4">
                    <p>React.js</p>
                    <p>Ruby</p>
                    <p>Salesforce</p>
                </div>
                </div>
            </div>
            <div className="main_footer">
                <div className='our_links'>
                    <img style={{height:'40px'}}src="https://andela.com/wp-content/uploads/2021/06/Andela_PrimaryLogo_TM_2021_AndelaBlue.svg"alt=""/>
                    <p>Connecting brilliance with opportunity</p>
                    <div className="socialmedia_icons">
                        <FaFacebookSquare style={{marginRight:'20px',fontSize:'40px',color:'blue'}}/>
                        <FaLinkedin  style={{marginRight:'20px',fontSize:'40px',color:'blue'}}/>
                        <FaGithub style={{marginRight:'20px',fontSize:'40px'}}/>
                        <FaTwitterSquare style={{marginRight:'20px',fontSize:'40px',color:'blue'}}/>
                        <FaInstagramSquare style={{marginRight:'20px',fontSize:'40px',color:'purple'}}/>
                    </div>
                </div>
                <div className="hire_block_container">
                    <div className='hire-block'>
                    <h3>Hire talent</h3>
                        <p>For companies</p>
                        <p>Enterprise</p>
                    </div>
                    <div className="joining-andela">
                        <h3>Join Andela</h3>
                    <p>For Engineers</p>
                        <p>Learning Community</p>
                        <p>Technical Leadership Program (Rwanda)</p>
                    </div>
                    <div className='about_us'>
                        <h3>About us</h3>
                        <p>Resources</p><br/>
                        <p>Events</p><br/>
                        <p>Blog</p><br/>
                        <p>Press</p><br/>
                        <p>About Andela</p><br/>
                        <p>Career</p><br/>
                    </div>
                </div>
            </div>
            <div className="actual_footer">
                <a>Copyright &copy;2021</a>
                <a>Modern Slavery Statement</a>
                <a>Data Processing Agreement</a>
                <a>Term of Use</a>
                <a>Privacy Policy</a>
                <a>Code of Conduct</a>
            </div>
        </div>
    )
}

export default Footer

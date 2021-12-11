import React from 'react'
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
                <div>
                    <p>Angular</p>
                    <p>Data Engineering</p>
                    <p>DevOps</p>
                </div>
                <div>
                    <p>Golang</p>
                    <p>iOS</p>
                    <p>Java</p>
                </div>
                <div>
                    <p>Python</p>
                    <p>QA</p>
                    <p>React Native</p>
                </div>
                <div>
                    <p>React.js</p>
                    <p>Ruby</p>
                    <p>Salesforce</p>
                </div>
            </div>
            <div className="main_footer">
                <div className='our_links'>
                    <img style={{height:'40px'}}src="https://andela.com/wp-content/uploads/2021/06/Andela_PrimaryLogo_TM_2021_AndelaBlue.svg"alt=""/>
                    <p>Connecting brilliance with opportunity</p>
                    <div className="socialmedia_icons">
                        <FaFacebookSquare />
                        <FaLinkedin />
                        <FaGithub />
                        <FaTwitterSquare />
                        <FaInstagramSquare />
                    </div>
                </div>
                <div className='hire-block'>
                    <p>For companies</p>
                    <p>Enterprise</p>
                </div>
                <div className="joining-andela">
                <p>For Engineers</p>
                  <p>Learning Community</p>
                    <p>Technical Leadership Program (Rwanda)</p>
                </div>
                <div className='about_us'>
                    <a>Resources</a><br/>
                    <a>Events</a><br/>
                    <a>Blog</a><br/>
                    <a>Press</a><br/>
                    <a>About Andela</a><br/>
                    <a>Career</a><br/>
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

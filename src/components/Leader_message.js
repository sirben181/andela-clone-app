import React from 'react'
import './leader_message.css'
const Leader_message = () => {
    return (
        <div className='leader_message_container'>
            <div className="wrapper_message">
                <div className='logo-testimonial'>
                <img src='https://andela.com/wp-content/uploads/2021/01/img_testimonial.png' height='400px'/>
                    
                </div>
            <div className="themessage">
                <p class="l_message">“Every one of the Andela engineers I have worked with has been stellar. <br/>They are great engineers, really driven to deliver, and they’re just great people.”</p>
                <p className="authorname">Michael Archibald</p>
                <p className="authorTitle">CTO, SalesRabbit</p>
             </div>
         </div>
        </div>
    )
}

export default Leader_message

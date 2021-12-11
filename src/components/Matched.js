import React from 'react'
import {CgArrowLongRight} from 'react-icons/cg'
const Matched = () => {
    return (
        <div className="matched_container">
            <div className="matched_message">
                <h2 className="matched-header">Get matched with vetted engineers from around the world and hire them without the overhead.</h2>
                </div>
            <div className="matched_wrapper">
                <div className="vetted_engineers">
                    <h3>Vetted Engineers</h3>
                    <p className="vetted_text">
                    Spend less time interviewing and more time building by connecting with engineers we’ve already assessed.
                    </p>
                    <button className="btn_learn">LEARN MORE<CgArrowLongRight/></button>
                </div>
                <div className="global_talent">
                    <h3>GLobal talent</h3>
                    <p className="talent_text">
                    Tap into a talent pool that spans multiple regions and multiple countries. The best engineers aren’t always in your backyard
                    </p>
                    <button className="btn_learn">LEARN MORE<CgArrowLongRight/></button>
                </div>
                <div className="driven_matched">
                    <h3>Data-Driven Match</h3>
                    <p className="matched_text">
                    Identify the best fit engineers from our network through our proprietary data-driven, matching process.
                    </p>
                    <button className="btn_learn">LEARN MORE<CgArrowLongRight/></button>
                </div>
                <div className="Hands_support">
                    <h3>Hands-On Support</h3>
                    <p className="support_text">
                    From helping with onboarding to sharing best practices, our success team is there every step of the way.
                    </p>
                    <button className="btn_learn">LEARN MORE<CgArrowLongRight/></button>
                </div>
            </div>
        </div>
    )
}

export default Matched

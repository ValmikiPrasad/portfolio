import React from "react";
import about1 from "./image/about1.png"
const About = () => {
    return (
        <>
            <div className="about_div">
                <div className="sec_head">
                    <p>AboutMe</p>
                </div>
                <div className="about_body">
                    <img src={about1} alt="sdsd" />
                    <p><strong>Hi Everyone!</strong> <br/><br/>My name is VALMIKI PRASAD, I'm persuing my B.tech from JSSATEN in pre-final year. Currently I'm enhancing my skills in the field of Web Development.<br/><br/>
                        I educate, refine and drive myself to be a better person<br/>
                        -I'm constantly learning because I never settle.<br/>
                        -I stay calm when faced with adversity.<br/><br/>
                        </p>
                </div>
            </div>
        </>
    )
}
export default About;
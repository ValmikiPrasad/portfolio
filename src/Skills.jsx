import React from "react";
// import Bootnav from "./Bootnav";
import download14 from "./image/download14.png"
import download11 from "./image/download11.jpeg"
import download12 from "./image/download12.png"
import download13 from "./image/download13.png"
import download15 from "./image/download15.jpeg"
const Skills=()=>{
    return(
        <>
        <div className="main_skill">
            <div className="sec_head">
                
                <p>Skills</p>
            </div>
            <div className="skill_content">
                <p>
                Over the course of my education at Towson University, I have received a tremendous amount of advice on the best ways to excel in the business world. I used what I have learned and worked to continuously improve myself.  In my internships and through my part-time jobs, I gained and developed many competencies that I plan to use to my advantage in any position I accept.<br/><br/>     
            My specialities include quickly learning new skills and programming languages, problem solving, website optimization. <br/><br/>
            So far I have C/C++, HTML, CSS, Javascript, Python under my belt. I have started learning React, Node.Js.
            <br/>
            <br/> I'm still enthusiastically onto other programming languages, framework, or principles I can integrate into the coding web in my head.
            </p>
            </div>
            <div className="skill_images">
                <img src={download14} alt="sds"/>
                <img src={download11} alt="sds"/>
                <img src={download12} alt="sds"/>
                <img src={download13} alt="dfg"/>
                <img src={download15} alt="dfg"/>
            </div>
        </div>
        </>
        
    )
}
export default Skills;
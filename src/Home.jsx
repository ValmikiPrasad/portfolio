import React from "react";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import ConcactMe from "./ContactMe";
import TypewriterComponent from "typewriter-effect";
import Homepic from "./image/Homepic.png"
const Home=()=>{
    return(
        <>
        <div className="main_home">
        <div className="home_intro">
            <h1>
            hi 👋 my name is <span className="head">valmiki.</span>
            </h1>
           <div className="text">
            <TypewriterComponent
                options={{
                    autoStart:true,
                    loop:true,
                    delay:40,
                    strings:[
                        "I'm a Web Developer.",
                        "I'm a Coder.",
                        "I'm a Problem Solver."
                    ]
                }}
                
            />
            </div>
            <p>I’m a software developer and here is my portfolio website. Here you'll learn about my journey as a software developer.</p>
            <div className="btn">
            <button>hire me</button>
            <button>ContactMe</button>
            </div>
            
        </div>
        <div className="home_photo">
                <img src={Homepic} alt="dsd"/>
        </div>
        </div>
        
        {/* <About/>
         <Skills/> */}
        {/* <Project/>
        
        <ConcactMe/> */}
        </>
    )
}
export default Home;
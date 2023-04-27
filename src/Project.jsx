import React from "react";
import Sdata from "./Sdata";
import Projects from "./Projects";
const Project=()=>{
    return(
        <>
        <div className="main_project">
            <div className="sec_head">
                <p>Projects</p>
            </div>
            <div className="projects">
               {
                Sdata.map((val,index)=>{
                    return <Projects key={index}
                    Sno={val.id}
                    title={val.title}
                    des={val.des}
                    />
                })
               } 
            </div>
        </div>
        </>
    )
}
export default Project;
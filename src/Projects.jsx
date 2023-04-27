import React from "react";

const Projects=(props)=>{
    return(
        <>
        <div className="main">
            <div className="div1">{props.Sno}.</div>
            <div className="div2">{props.title}</div>
            <div className="div3">{props.des}</div>
        </div>
        </>
    )
}
export default Projects;
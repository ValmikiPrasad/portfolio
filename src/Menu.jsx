import React from "react";
import { NavLink } from "react-router-dom";
const Menu=()=>{
    return(
        <>
            <div className="navbar">
                <div className="logo">
                    <h1>portFolio.</h1>
                </div>
                <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to ="project">Project</NavLink>
                <NavLink to="skills">Skills</NavLink>
                <NavLink to ="contact">Contact me</NavLink>
                </div>
                
            </div>
        </>
    )
}
export default Menu;
import React from "react";
import { Route,Routes } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import ConcactMe from "./ContactMe";
import Error from "./Error";
import Footer from "./Footer";
const App=()=>{
    return(
        <>
            <Menu/>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route exact path="/about" Component={About} />
                <Route exact path="/project" Component={Project}/>
                <Route exact path="/skills" Component={Skills}/>
                <Route exact path="/contact" Component={ConcactMe}/>
                <Route path="*" Component={Error}/>
            </Routes>
            <Footer/>
        </>
    )
}
export default App;
import React from "react";
import { useNavigate } from "react-router-dom";
const Error=()=>{
    const navigate=useNavigate();
    return(
        <>
        <h1>this is Error page</h1>
        <button onClick={()=>{
            navigate("/")
        }} >back to home</button>
        </>
    )
}
export default Error;
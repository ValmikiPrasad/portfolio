import React, { useEffect } from "react";

const ConcactMe=()=>{
    // const[data,setData]=useEffect({
    //     fname:"",
    //     email:"",
    //     phone:"",
    //     msg:""
    // })
    // const inputEvent=(event)=>{
    //     const value=event.target.value;
    //     const name=event.target.value;
    //     setData((preval)=>{
    //        return{
    //         ...preval,
    //         [name]:value
    //        } 
    //     })
    // }
    // const submitData=(e)=>{
    //     e.preventDefault();
    //     alert(`${data.fname} , ${data.email} , ${data.phone} , ${data.phone} , ${data.msg}`)
    // }
    return(
        <>
        <div className="main_contact">
            <div className="sec_head">
                <p>ContactMe</p>
            </div>
            <div className="form">
                <form >
                    <div className="fname">
                        <p>full name</p>
                    </div>
                    <input type="text" placeholder="enter your name" />
                    <div className="email">
                        <p>eamil</p>
                    </div>
                    <input type="text"  placeholder="enter your email" />
                    <div className="phone">
                        <p>ph no.</p>
                    </div>
                    <input type="text" placeholder="enter your phone number" />

                    <p>message</p>
                    <textarea type="text"  rows={5} placeholder="leave a message"/>
                    <div className="form_button">
                    <button>submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
        </>
    )
}
export default ConcactMe;
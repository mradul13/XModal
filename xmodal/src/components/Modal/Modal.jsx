import { useState, useRef } from "react";

export default function Modal({onClose}){
    
    const [input, setInput] = useState({
        username : "",
        email : "",
        dob: "",
        phone: ""
    })
    const modalOuterRef = useRef(null)
    const handleClose = (e)=>{
        e.stopPropagation()
        if(e.target === modalOuterRef.current){
            onClose()
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!input.email.includes('@')){
            alert("Invalid email. Please check your email address.")
        }
        else if(input.phone.length!==10){
            alert("Invalid phone number. Please enter a 10-digit phone number.")
        }
        else if(new Date(input.dob)> new Date()){
            alert("Invalid date of bith. Date of Birth cannot be in future.")
        }
        onClose()
    }

    const handleChange = (e)=>{
        const {id, value} = e.target;
        setInput((prev)=>{
            return {...prev, [id]: value}
        })
    }

    return (
        <div className="modal" onClick={handleClose} ref={modalOuterRef}>
            <div className="modal-content" onClick={(e)=>{e.stopPropagation()}}>
                <form onSubmit={handleSubmit}>
                    <h2>Fill Details</h2>
                    <div><label htmlFor="username">Username:</label>
                    <input onChange={handleChange} value={input.username} type="text" id="username" required /></div>

                    <div><label htmlFor="email">Email Address:</label>
                    <input onChange={handleChange} value ={input.email} type="text" id="email" required/></div>

                    <div><label htmlFor="phone">Phone Number:</label>
                    <input onChange={handleChange} value={input.phone} type="text" id="phone" required/></div>

                    <div><label htmlFor="dob">Date of Birth:</label>
                    <input onChange={handleChange} value={input.dob} type="date" id="dob" required/></div>

                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    )
}
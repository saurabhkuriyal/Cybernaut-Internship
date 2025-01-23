import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function CreateUser() {

    const navigate=useNavigate()
    const [fromData,setFromData]=useState({
        name:"",
        age:null,
        hobbies:""
    })

    function handleChange(e) {
        const {name,value}=e.target;
        setFromData((prevState)=>({
            ...prevState,
            [name]:value,
        }))
    }

    async function send(e) {
            e.preventDefault();
            try {
                const response=await axios.post(`http://localhost:3000/adduser`,fromData);

                console.log(response);

                navigate("/")

                
            } catch (error) {
                console.log(error);
                
            }
    
    }

    return (
        <div className="container">
            <div className="form p-0 signup" >
                <form action="" onSubmit={send} className="row g-3 signUpVercelStyle">
                    <div className="box">
                        <label htmlFor="validationDefault01" className="form-label">Name</label>
                        <input type="text" className="form-control" id="validationDefault01" onChange={handleChange} name="name" required />
                    </div>
                    
                
                    <div className="box">
                        <label htmlFor="validationDefault02" className="form-label">Age</label>
                        <input type="number" className="form-control" id="validationDefault02" onChange={handleChange} name="age" required />
                    </div>


                    <div className="box">
                        <label htmlFor="validationDefault05" className="form-label">Hobbies</label>
                        <input type="text" className="form-control" id="validationDefault03" autoComplete="off" onChange={handleChange} name="hobbies" required />
                    </div>


                    <div className="col-12">
                        <br /><button className="btn btn-primary" type="submit">Sign up</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

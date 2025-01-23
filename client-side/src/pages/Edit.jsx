import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
export default function Edit() {

    const {id}=useParams();

    const navigate=useNavigate();

    const [getUser, setGetUser]=useState({});
    const [edits,setEdits]=useState({
        name:"",
        age:null,
        hobbies:""
    })

    useEffect(()=>{
        fetchUser();
    },[])

    //function for fetching specific user with id

    async function fetchUser(e) {
        console.log("This is user id",id);
        
        try {
            
            const response=await axios.get(`http://localhost:3000/user/${id}`)

            console.log(response.data.data);
            setGetUser(response.data.data);
            
        } catch (error) {
            console.log(error);
            
        }
        
    }

    //for implementing the details of that user
    useEffect(() => {
        if (getUser) {
            setEdits({
                name: getUser.name || '',
                age: getUser.age || '',
                hobbies: getUser.hobbies || '',
            });
        }
    }, [getUser]);

    // function for handling change
    function handleChange(e) {
        const {name,value}=e.target;
        setEdits((prevState)=>({
            ...prevState,
            [name]:value,
        }))
    }

    //function for sending the data to api for edit or update

    async function send(e) {
        e.preventDefault();
        try {
            console.log("Data to be updated",edits);
            
            const response=await axios.put(`http://localhost:3000/user/edit/${id}`,edits)
            console.log(response);
            navigate("/");
            
        } catch (error) {
            console.log(error);
            
        }
        
    }
    return (
        <div>
            <div className="container">
            <div className="form p-0 signup" >
                <form action="" onSubmit={send} className="row g-3 signUpVercelStyle">
                    <div className="box">
                        <label htmlFor="validationDefault01" className="form-label">Name</label>
                        <input type="text" className="form-control" id="validationDefault01" onChange={handleChange} value={edits.name} name="name" required />
                    </div>
                    
                
                    <div className="box">
                        <label htmlFor="validationDefault02" className="form-label">Age</label>
                        <input type="number" className="form-control" id="validationDefault02" value={edits.age} onChange={handleChange} name="age" required />
                    </div>


                    <div className="box">
                        <label htmlFor="validationDefault05" className="form-label">Hobbies</label>
                        <input type="text" className="form-control" id="validationDefault03" autoComplete="off" value={edits.hobbies} onChange={handleChange} name="hobbies" required />
                    </div>


                    <div className="col-12">
                        <br /><button className="btn btn-primary" type="submit">Sign up</button>
                    </div>
                </form>
            </div>

        </div>
        </div>
    )
}

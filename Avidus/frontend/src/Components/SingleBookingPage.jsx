import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { accessData, saveData } from '../Utils/appLocalStorage';
import axios from 'axios';

export default function SingleBookingPage() {
    const {id}=useParams();
    const [item,setitem]=useState({});
    let [user,setuser]=useState(accessData("user"))
    const [date,setdate]=useState({from:"",to:""})
    const navigate=useNavigate();
    useEffect(()=>{
        getdetatilsById();
    },[])

    const getdetatilsById=()=>{
        return axios
              .get(`https://vivacious-khakis-lamb.cyclic.app/api/property/${id}`)
              .then((res) => {
                setitem(res.data[0])
                console.log(res.data)
              })
              .catch((err) => {
                console.log(err)
              });   
    }
    const book=()=>{
        item.from=date.from;
        item.to=date.to;
            const payload = {
              _id:user._id,
              email: user.email,
              name:user.name,
              password: user.password,
              bookings:[...user.bookings,item]
            };
            saveData("user",payload)
            console.log(payload)
            setuser(payload)
            alert("Property Booked")
            navigate("/singleuser")
    }


  return (
    <>
        <div style={{marginTop:"120px"}}>
            <h3>Title : {item.title}</h3>
            <h3>Description : {item.description}</h3>
            <h3>Location : {item.location}</h3>
            <h3>Price : {item.price}</h3>
            <p>from <input onChange={(e)=>setdate({...date,from:e.target.value})} type="date" /></p>
            <p>to <input onChange={(e)=>setdate({...date,to:e.target.value})} type="date" /></p>
            <button onClick={()=>book()}>Book Now</button>
        </div>
    </>
  )
}

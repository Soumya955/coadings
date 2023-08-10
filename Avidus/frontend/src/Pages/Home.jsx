import React, { useEffect, useState } from 'react'
import "./Home.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { accessData, saveData } from '../Utils/appLocalStorage'

export default function Home() {
   
    const [peoperties,setproperties]=useState([])
    let [user,setuser]=useState(accessData("user"))
    const [search,setsearch]=useState("")
    const navigate=useNavigate();

    useEffect(()=>{
     getPropertydata()
    },[])
    const getPropertydata=()=>{
       return axios
              .get("https://vivacious-khakis-lamb.cyclic.app/api/property")
              .then((res) => {
                setproperties(res.data)
              })
              .catch((err) => {
                console.log(err)
              });   
    }

    const booknow=(item)=>{
        navigate(`/singlebooking/${item._id}`)
    }
    
const searchdata=()=>{
if(search){
    return axios
    .get(`https://vivacious-khakis-lamb.cyclic.app/api/search/${search}`)
    .then((res) => {
      setproperties(res.data)
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    });
}
}
  return (
    <>
        <div>
        <Link to={"/propertydetails"}><button className='home-button'>Add Property details</button></Link>
        <div>
        <div className="search-container">
        <input value={search} onChange={(e)=>setsearch(e.target.value)} type="text" className="search-input" placeholder="Search..."/>
        <button onClick={()=>searchdata()} className="search-button">Search</button>
        </div>
        <div className="user-div">
        <Link to={"/singleuser"}> <p>{user.name}</p></Link>
            <img src="data:image/jpeg;base64,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" alt="" />
        </div>
        <div className='property-div'>
        {peoperties?.map((el)=><div key={el._id} className="property-card">
          <h2 className="card-title">{el.title}</h2>
           <p className="card-description">{el.description}</p>
           <p className="card-location">{el.location}</p>
          <p className="card-price">${el.price}</p>
          <button onClick={()=>booknow(el)} className="booking-button">Book Now</button>
       </div>)} 
        </div>
        </div> 
        </div>
    </>
  )
}

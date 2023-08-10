import React, { useState } from 'react'
import "./PropertyDetails.css"
import axios from 'axios';

export default function PropertyDetails() {
    const [formdata,setformdata]=useState({title:"",description:"",location:"",price:""})
  

    const submitpropertydata=()=>{
        if (formdata.title && formdata.description && formdata.location&&formdata.price) {
            const payload = {
                title:formdata.title,
                description:formdata.description,
                location:formdata.location,
                price:formdata.price,
            };
            return axios
              .post("https://vivacious-khakis-lamb.cyclic.app/api/property", payload)
              .then((res) => {
                alert("data posted")
              })
              .catch((err) => {
                console.log(err)
              });
          }
    }
  
  return (<>
    <div className='property-form'>
    <label>Title:</label>
    <input value={formdata.title} onChange={(e)=>setformdata({...formdata,title:e.target.value})} type="text" required/>

    <label>Description:</label>
    <textarea value={formdata.description}  onChange={(e)=>setformdata({...formdata,description:e.target.value})}  rows="4" required></textarea>

    <label >Location:</label>
    <input  value={formdata.location}  onChange={(e)=>setformdata({...formdata,location:e.target.value})}  type="text"  required/>

    <label >Price:</label>
    <input  value={formdata.price}  onChange={(e)=>setformdata({...formdata,price:e.target.value})}  type="number" required/>

    <button onClick={()=>submitpropertydata()} className="submit-button">Submit</button>
    </div>
  </>
  )
}

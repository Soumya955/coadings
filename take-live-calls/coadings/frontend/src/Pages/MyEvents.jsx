import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import "./Pages-css/MyEvents.css"
import { Link } from 'react-router-dom';
import { accessData } from '../Utils/appLocalStorage';
import axios from 'axios';

export default function MyEvents() {

    const [events,setEvents]=useState([])
    let user=accessData("user");
    

    useEffect(()=>{
        getMyEvent()
    },[])

    const getMyEvent=()=>{
      axios.get(`http://localhost:8080/api/event`)
      .then((res)=>{
        let data=res.data.filter((el)=>el.userid!=user._id&&el.members.includes(user._id))
        setEvents(data)
      })
    }

  return (
    <>
      <Navbar/>
      <div id='events'>
      { events.map((el)=><Link to={`/mysingleevent/${el._id}`} key={el._id}><div id="event" >
            <h3>{el.name}</h3>
            <h4>{el.sport}</h4>
            <p>{el.description}</p>
         </div></Link>)}
       </div>
    </>
  )
}

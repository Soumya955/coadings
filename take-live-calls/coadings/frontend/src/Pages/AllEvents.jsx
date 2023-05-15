import React, { useEffect, useState } from 'react'
import "./Pages-css/AllEvents.css"
import Navbar from '../Components/Navbar'
import { accessData } from '../Utils/appLocalStorage';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AllEvents() {
  const [events,setEvents]=useState([])
  const [search,setsearch]=useState("")
    let user=accessData("user");
    
    useEffect(()=>{
        getMyEvent()
    },[])

    const getMyEvent=()=>{
      axios.get(`http://localhost:8080/api/event`)
      .then((res)=>{
        let data=res.data.filter((el)=>el.userid!=user._id)
        setEvents(data)
      })
      .catch((e)=>{
        console.log(e)
      })
    }

    const handleSearch=()=>{
      let src=""+search[0].toLocaleUpperCase()+search.slice(1,search.length).toLocaleLowerCase()
      axios.get(`http://localhost:8080/api/event/${src}`)
      .then((res)=>{
        console.log(res)
        let data=res.data.filter((el)=>el.userid!=user._id)
        setEvents(data)
      })
      .catch((e)=>{
        console.log(e)
      })
    }
  return (
    <>
     <Navbar/>
  <div className="search-container">
    <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} placeholder="Search ..." />
    <button type="submit" onClick={()=>handleSearch()}>Search</button>
  </div>
  <h1>All Events</h1>
    <div className='AllEvents-container'>
      { events.map((el)=><Link key={el._id} to={`/allevents/${el._id}`}><div id="event" >
            <h3>{el.name}</h3>
            <h4>{el.sport}</h4>
            <p>{el.description}</p>
         </div></Link>)}
    </div>
    </>
  )
}

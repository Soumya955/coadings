import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Navbar from './Navbar'
import "./component-css/MySingleEvent.css"
import axios from 'axios'
import { accessData } from '../Utils/appLocalStorage'

export default function MySingleEvent(){
    const { id } = useParams()
    const [event,setevent]=useState({})
    const [showRequests,setShowRequests]=useState(false);
    const user=accessData("user")

    useEffect(()=>{
        findById(id)
    },[])
   // console.log(event)

    const handlemember=(userid)=>{
     let members=[...event.members,userid]
     let index=event.requests.indexOf(userid)
     let requests=event.requests.splice(index,1);
     let payload={members,requests};
     axios.patch(`http://localhost:8080/api/event/${event._id}`,payload)
     .then((res)=>{
         findById(event._id)
     })
    }

    const findById=(id)=>{
        axios.get(`http://localhost:8080/api/singleevent/${id}`)
        .then((res)=>{
          setevent(res.data[0])
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <>
    <Navbar/>
   { event.name&&<div id='singleEvent'>
        <div>name  :{event.name}</div>
        <div>sport :{event.sport}</div>
        <div>description :{event.description}</div>
        <div>date  :{event.date}</div>
        <div> members :{event.members.length}</div>
        <div> <button onClick={()=>setShowRequests((showRequests)=>!showRequests)}>See all requests</button></div>
        {showRequests&&<div>
            { event.requests.map((el)=><div id="event" key={el}>
            <div>{el} <button disabled={event.members.includes(el)} onClick={()=>handlemember(el)}>{event.members.includes(el)?"Request Accepted":"Accept Request"}</button></div>
         </div>)}
        </div>}
    </div>}

    </>
  )
}

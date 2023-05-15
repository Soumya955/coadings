import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Navbar from './Navbar'
import "./component-css/ESingleEvent.css"
import axios from 'axios'
import { accessData } from '../Utils/appLocalStorage'

export default function ESignleEvent(){
    const { id } = useParams()
    const [event,setevent]=useState({})
    const user=accessData("user")

    useEffect(()=>{
        findById(id)
    },[])
   // console.log(event)

    const handleASK=(eventid,userid)=>{
    let newrequests=[...event.requests,userid]
    let payload={requests:newrequests}
    axios.patch(`http://localhost:8080/api/event/${eventid}`,payload)
    .then((res)=>{
        findById(id)
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
        <div> <button disabled={event.members.includes(user._id)||event.requests.includes(user._id)} onClick={()=>handleASK(event._id,user._id)}>{event.members.includes(user._id)?"Joined":event.requests.includes(user._id)?"Requested":"Ask to Join"}</button></div>
    </div>}

    </>
  )
}

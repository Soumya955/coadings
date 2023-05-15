import React from 'react'
import "./component-css/Navbar.css"
import { accessData } from '../Utils/appLocalStorage';
import { useNavigate } from 'react-router-dom';
const dayjs = require("dayjs");

export default function Navbar() {
    const formattedDate = dayjs(new Date()).format("ddd DD MMM YYYY");
     const user =accessData("user")
     const navigate=useNavigate()
      const handleClick=()=>{
       navigate("/")
      }
    return (
    <nav>
    <ul>
      <li><a href="/allevents">All Events</a></li>
      <li><a href="myevents">My Events</a></li>
      <li><a href="createdevents">Created Events</a></li>
      <li><a href="/signup">Sign Up</a></li>
      <li><a href="/">Sign In</a></li>
      <li><a onClick={handleClick}>LogOut</a></li>
    </ul>
  </nav>
  )
}

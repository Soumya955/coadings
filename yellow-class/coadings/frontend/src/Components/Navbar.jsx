import React from 'react'
import "./component-css/Navbar.css"
import { accessData } from '../Utils/appLocalStorage';
const dayjs = require("dayjs");

export default function Navbar() {
    const formattedDate = dayjs(new Date()).format("ddd DD MMM YYYY");
     const user =accessData("user")
    return (
    <div id='navbar'>
     <div>Contacts</div>
     <div>{user.name}</div>
     <div>{formattedDate}</div>
    </div>
  )
}

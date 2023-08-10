import React, { useState } from 'react';
import "./SingleUserPage.css";
import { accessData, saveData } from '../Utils/appLocalStorage';

export default function SingleUserPage() {
    
let [user,setuser]=useState(accessData("user"))

const deletesinglebooking=(id)=>{
let bookings=user.bookings.filter((el)=>(el.id==id))
console.log(bookings)
let newdata={...user,bookings:bookings}
console.log(newdata,id)
setuser(newdata);
saveData("user",newdata);
}
  return (
    <>
   <div className='single-user-div'>
      <h2>Name  :{user.name}</h2>
      <h3>Email :{user.email}</h3>
      <h3>All bookings</h3>
      
      <div className='single-bookings'>{user.bookings.map((el)=><div className='user-bookings' key={el._id}>
      <h4>title :{el.title}</h4>
      <h4>price :{el.price}</h4>
      <h4>date from:{el.from} to {el.to}</h4>
      <button onClick={()=>deletesinglebooking(el._id)}>delete</button>
      </div>)}</div>
   </div>
    </>
  )
}

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./Modal-css/CreateEventModal.css"
import axios from "axios";
import Swal from 'sweetalert2'
import { accessData } from "../Utils/appLocalStorage";


export default function CreateEventModal({modalIsOpen,getMyEvent,setModalIsOpen}) {


   const [name,setName]=useState("")
   const [sport,setSport]=useState("")
   const [description,setDescription]=useState("")
   const [date,setDate]=useState("")
   const [memberlimit,setMemberlimit]=useState("")

   const handleClick=()=>{
    if(name&&sport&&description&&date&&memberlimit){
      let user=accessData("user")
      let mname=""+name[0].toLocaleUpperCase()+name.slice(1,name.length).toLocaleLowerCase()
      let msport=""+sport[0].toLocaleUpperCase()+sport.slice(1,sport.length).toLocaleLowerCase()
      let payLoad={name:mname,sport:msport,description,date,limit:memberlimit,members:[],requests:[],userid:user._id}
      axios.post('http://localhost:8080/api/event', payLoad)
      .then(response => {
        // setName("")
        // setDescription("")
        // setDate("")
        // setMemberlimit("")
        getMyEvent()
        Swal.fire({
          title: 'Created',
          text: 'Event Created.',
          icon: 'success',
          confirmButtonText: 'OK',
        });
      })
      .catch(error => {
        console.log(error);
      });

    }else{
      Swal.fire({
        title: 'warning!',
        text: 'Give right things in input field.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
    }
   }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        className="Modal2"
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
      <h3>New Event</h3>
      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Event Name"  />
      <input value={sport} onChange={(e)=>setSport(e.target.value)} type="text" placeholder="Sport Name"  />
      <textarea value={description} onChange={(e)=>setDescription(e.target.value)} type="TextArea" placeholder="Enter Description" required  cols="35" rows="5"></textarea>
      <input value={date} onChange={(e)=>setDate(e.target.value)} type="date" placeholder=""  />
      <input value={memberlimit} onChange={(e)=>setMemberlimit(e.target.value)} type="number" placeholder="Enter Limit" />
       
        <button className="add" onClick={() => {
            setModalIsOpen(false);
            handleClick();
          }}> ADD </button>
          <button className="cancel" onClick={()=>setModalIsOpen(false)}>Cancel</button>
      </Modal>
      
    </>
  );
}

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./Modal-css/CreateContact.css"
import axios from "axios";
import Swal from 'sweetalert2'
import { accessData } from "../Utils/appLocalStorage";


export default function CreateContact({modalIsOpen,getcontacts, setModalIsOpen,handleGetSprintData}) {


   const [name,setName]=useState("")
   const [phone,setPhone]=useState("")

   const handleClick=()=>{
    if(name&&phone){
      let user=accessData("user")
      let mname=""+name[0].toLocaleUpperCase()+name.slice(1,name.length).toLocaleLowerCase()
      axios.post('http://localhost:8080/api/contacts', {name:mname,phone,userid:user._id})
      .then(response => {
        getcontacts()
        setName("")
        setPhone("")
        Swal.fire({
          title: 'Created',
          text: 'Contact Created.',
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
        text: 'You have not written Sprint Name or It already exists.',
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
      <h3>New Contact</h3>
      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" required />
      <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="Phone" required />
       
        <button className="add" onClick={() => {
            setModalIsOpen(false);
            handleClick();
          }}> ADD </button>
          <button className="cancel" onClick={()=>setModalIsOpen(false)}>Cancel</button>
      </Modal>
      
    </>
  );
}

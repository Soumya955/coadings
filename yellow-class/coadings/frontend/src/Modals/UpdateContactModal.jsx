import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./Modal-css/UpdateContactModal.css"
import axios from "axios";
import Swal from 'sweetalert2'


export default function UpdateContactModal({getcontacts,sendsingleitem,modalIsOpen,sprintName, setModalIsOpen}) {


  
   const [name,setName]=useState(sendsingleitem.name);
   const [phone,setPhone]=useState(sendsingleitem.phone);
  
   useEffect(()=>{
    setName(sendsingleitem.name)
    setPhone(sendsingleitem.phone)
    },[])

   const handleClick=()=>{
   
    if(name&&phone){
    let mname=""+name[0].toLocaleUpperCase()+name.slice(1,name.length).toLocaleLowerCase()

    axios.patch(`http://localhost:8080/api/contacts/${sendsingleitem._id}`, {
        name: mname,
        phone
          })
      .then(response => {
        Swal.fire({
            title: 'Updated',
            text: 'Comntact Upadated.',
            icon: 'sucsess',
            confirmButtonText: 'OK',
          });
          getcontacts()
        // handleGetData()
      })
      .catch(error => {
        console.log(error);
      });

    }else{
        Swal.fire({
            title: 'warning!',
            text: 'You have not filled data corectly.',
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
      <h3>Edit the Contact here</h3>
      <input value={name} placeholder={" Name"} onChange={(e)=>setName(e.target.value)} type="text" />
      <input value={phone} placeholder={"Phone"} onChange={(e)=>setPhone(e.target.value)} type="text" />
        <button className="add" onClick={() => {
            setModalIsOpen(false);
            handleClick();
          }}> ADD </button>
          <button className="cancel" onClick={()=>setModalIsOpen(false)}>Cancel</button>
      </Modal>
      
    </>
  );
}

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./Modal-css/UpdateContactModal.css"
import axios from "axios";
import Swal from 'sweetalert2'


export default function UpdateContactModal({getcontacts,sendsingleitem,modalIsOpen,sprintName, setModalIsOpen}) {


  
   const [name,setName]=useState("");
   const [phone,setPhone]=useState("");
  console.log(sendsingleitem)

   useEffect(()=>{
    setName(sendsingleitem.name)
    setPhone(sendsingleitem.phone)
    },[sendsingleitem])

   const handleClick=()=>{
   
    if(name&&phone&&""+phone.length==10){
    let mname=""+name[0].toLocaleUpperCase()+name.slice(1,name.length).toLocaleLowerCase()

    axios.patch(`https://maroon-jackrabbit-suit.cyclic.app/api/contacts/${sendsingleitem._id}`, {
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

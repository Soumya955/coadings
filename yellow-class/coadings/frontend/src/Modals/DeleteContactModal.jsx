import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./Modal-css/DeleteContactModal.css"
import axios from "axios";
import Swal from 'sweetalert2'

export default function DeleteContactModal({modalIsOpen,sendsingleitem, setModalIsOpen, getcontacts}) {




   const handleClick=()=>{
    
      axios.delete(`https://maroon-jackrabbit-suit.cyclic.app/api/contacts/${sendsingleitem._id}`)
      .then(response => {
        Swal.fire({
            title: 'Deleted!',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          getcontacts()
      })
      .catch(error => {
        console.log(error);
      });

    
   }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        className="Modal3"
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
      <h3>Are You Sure ?</h3>
       
        <button className="add" onClick={() => {
            setModalIsOpen(false);
            handleClick();
          }}> Delete </button>
          <button className="cancel" onClick={()=>setModalIsOpen(false)}>Cancel</button>
      </Modal>
      
    </>
  );
}

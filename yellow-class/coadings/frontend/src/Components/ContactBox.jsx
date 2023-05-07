import React, { useState } from 'react'
import "./component-css/ContactBox.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faStar, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import UpdateContactModal from '../Modals/UpdateContactModal';
import DeleteContactModal from '../Modals/DeleteContactModal';
import axios from 'axios';

export default function ContactBox({data,getcontacts}) {

    
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [sendsingleitem,setsendsingleitem]=useState("")

  function changetofavorite(item){
      axios.patch(`https://maroon-jackrabbit-suit.cyclic.app/api/contacts/${item._id}`, {
          favorite:!item.favorite
          })
        .then(response => {
            getcontacts()
        })
        .catch(error => {
          console.log(error);
        });
   
  }
  return (
    <>
    {data.map((el)=><div key={el._id} id='single-contact-parent'>
       <div>
       <div>{el.name}</div>
       <div>{el.phone}</div>
       </div>
       <div>
             <FontAwesomeIcon onClick={()=>{changetofavorite(el)}} icon={faStar} id='star' style={{ color: el.favorite?"gold":"white",float:"right",margin:"0rem"}} />
             <FontAwesomeIcon onClick={()=>{setModalIsOpen2(true);sendsingleitem(el)}} icon={faTrashAlt}  id='dlt' style={{ color: 'red',float:"right",margin:"0rem"}} />
             <FontAwesomeIcon  onClick={()=>{setModalIsOpen1(true);setsendsingleitem(el)}} icon={faPencilAlt}  id='pen'  style={{ color: 'blue',float:"right" ,margin:"0rem" }} />
            
       </div>
    </div>)}
    <UpdateContactModal getcontacts={getcontacts} sendsingleitem={sendsingleitem}  modalIsOpen={modalIsOpen1} setModalIsOpen={setModalIsOpen1} />
    <DeleteContactModal  getcontacts={getcontacts} sendsingleitem={sendsingleitem}  modalIsOpen={modalIsOpen2} setModalIsOpen={setModalIsOpen2} />
    </>
  )
}

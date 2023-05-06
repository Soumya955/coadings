import React, { useState } from 'react'
import "./component-css/ContactBox.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import UpdateContactModal from '../Modals/UpdateContactModal';
import DeleteContactModal from '../Modals/DeleteContactModal';

export default function ContactBox({data,getcontacts}) {

    
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [sendsingleitem,setsendsingleitem]=useState("")
  return (
    <>
    {data.map((el)=><div key={el._id} id='single-contact-parent'>
       <div>
       <div>{el.name}</div>
       <div>{el.phone}</div>
       </div>
       <div>
             <FontAwesomeIcon onClick={()=>{setModalIsOpen2(true);setsendsingleitem(el)}} icon={faTrashAlt} style={{ color: 'red',float:"right",margin:"0rem"}} />
             <FontAwesomeIcon  onClick={()=>{setModalIsOpen1(true);setsendsingleitem(el)}} icon={faPencilAlt} style={{ color: 'blue',float:"right" ,margin:"0rem" }} />
       </div>
    </div>)}
    <UpdateContactModal getcontacts={getcontacts} sendsingleitem={sendsingleitem}  modalIsOpen={modalIsOpen1} setModalIsOpen={setModalIsOpen1} />
    <DeleteContactModal  getcontacts={getcontacts} sendsingleitem={sendsingleitem}  modalIsOpen={modalIsOpen2} setModalIsOpen={setModalIsOpen2} />
    </>
  )
}

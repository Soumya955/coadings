import React, { useEffect, useState } from 'react'
import "./component-css/RightBar.css"
import CreateContact from '../Modals/CreateContact';
import { accessData } from '../Utils/appLocalStorage';
import axios from 'axios';
import ContactBox from './ContactBox';

export default function RightBar({show,setShow}) {
   
    let user=accessData("user")
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [contacts,setcontacts]=useState([]);
    

    useEffect(()=>{
        getcontacts()
    },[show])

    function getcontacts(){
       axios.get(`https://maroon-jackrabbit-suit.cyclic.app/api/contacts/${user._id}`)
       .then(response => {
         console.log(response.data)
         if(show=="all"){
          setcontacts(response.data)
         }else{
          let dt=response.data.filter((el)=>el.favorite);
          setcontacts(dt)
         }
      })
      .catch(error => {
        console.log(error);
      });
    }


  return (
    <>
    <div className='right-bar-container'>
       <ContactBox  data={contacts} getcontacts={getcontacts}/>
       <div id='add-contact-parent' onClick={()=>setModalIsOpen(true)}>
        + Add New Contact 
       </div>
       <CreateContact getcontacts={getcontacts} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
    </>
  )
}

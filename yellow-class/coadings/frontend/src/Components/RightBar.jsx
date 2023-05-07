import React, { useEffect, useState } from 'react'
import "./component-css/RightBar.css"
import CreateContact from '../Modals/CreateContact';
import { accessData } from '../Utils/appLocalStorage';
import axios from 'axios';
import ContactBox from './ContactBox';
import ReactLoading from 'react-loading';

export default function RightBar({show,setShow}) {
   
    let user=accessData("user")
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [contacts,setcontacts]=useState([]);
    const [isloading,setisloading]=useState(false)
    

    useEffect(()=>{
        getcontacts()
    },[show])

    function getcontacts(){
       axios.get(`https://maroon-jackrabbit-suit.cyclic.app/api/contacts/${user._id}`)
       .then(response => {
         console.log(response.data)
         //setisloading(true)
         setTimeout(()=>{
          setisloading(false)
         },1000)
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

    {isloading?
      <div className="loading-container">
      <ReactLoading type={'bubbles'} color={'green'} height={'10px'} width={'30px'}  />
      <span style={{fontSize:"1.1rem",fontWeight:"bold",marginTop:"10px"}}>Loading</span>
      </div>:<ContactBox  data={contacts} getcontacts={getcontacts}/>}
       <div id='add-contact-parent' onClick={()=>setModalIsOpen(true)}>
        + Add New Contact 
       </div>
       <CreateContact getcontacts={getcontacts} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
    </>
  )
}

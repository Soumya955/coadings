import React, { useContext, useState } from 'react'
import ShowModal from '../Modals/ShowModal';
import { validateMobileNumber } from '../Utils/MobileValidator';
import { UserContext } from '../ContextProviders/UserContextProvider';

export default function ShowUser() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [validateMobileno,setvalidatemobileno] = useState(false)
    const {user} = useContext(UserContext);

    return (
    <>
       <div>ShowUser</div>
       <button className='menuItemsADD' onClick={()=>setModalIsOpen(true)} > <span> Show User</span> </button>
       <ShowModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
       <br />
       <br />
       <br />
       <br />
       <h3>{user?.mobileNo}  {validateMobileno}</h3>:
       <button onClick={()=>{setvalidatemobileno(validateMobileNumber(user.mobileNo)?"it's a Valid Mobile No":"it is Not a valid Mobile No")}}>Validate Mobile No</button>
    </>
    
  )
}

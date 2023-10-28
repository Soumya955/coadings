import React, { useContext, useEffect, useState } from 'react'
import axiosInstance from '../Utils/Axios.config';
import { FaPencilAlt } from 'react-icons/fa';
import UpdateModal from '../Modals/UpdateModal';
import { datePipe } from '../Utils/DatePipe';

export default function Updateuser() {
    const [users,setusers]=useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modaldata,setmodaldata]=useState({})
    const [loading,setloading]=useState(false);

    useEffect(()=>{
        getAllUsers();
    },[])
    
    const getAllUsers=()=>{
        setloading(true)
       axiosInstance.get('/users')
         .then(res=>{
            setloading(false)
            setusers([...res.data])
        })
         .catch(err=>console.log(err))
    }
      return (
        <>
         <div>updateUsers</div>
         {loading&&<h3>...Loading</h3>}
         <h3>click on pencil icon incase wants to update</h3>
        { users?.map((user)=>
         <div key={user.id} className='user-card'>
          <p><strong>Username:</strong> {user?.userName}
          <FaPencilAlt onClick={()=>{setModalIsOpen(true);setmodaldata(user)}} style={{float:"right",margin:"1rem",color:'blue'}} className="pencil-icon" />
          </p>
          <p><strong>First Name:</strong> {user?.firstName}</p>
          <p><strong>Last Name:</strong> {user?.lastName}</p>
          <p><strong>Date of Birth:</strong> {datePipe(user?.dob)}</p>
          <p><strong>Mobile Number:</strong> {user?.mobileNo}</p>
          <p><strong>Email:</strong> {user?.emailId}</p>
        </div>
         )}
         <UpdateModal modaldata={modaldata} getAllUsers={getAllUsers} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
        </>
        
      )
    }

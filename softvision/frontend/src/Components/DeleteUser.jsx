import React, { useContext, useEffect, useState } from 'react'
import axiosInstance from '../Utils/Axios.config';
import { FaTrash } from 'react-icons/fa';
import DeleteUserModal from '../Modals/DeleteUserModal';
import { datePipe } from '../Utils/DatePipe';

export default function DeleteUser() {
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
         <div>DeleteUsers</div>
         {loading&&<h3>...Loading</h3>}
         <h3>click on delete icon incase wants to delete</h3>
        { users?.map((user)=>
         <div key={user.id} className='user-card'>
          <p><strong>Username:</strong> {user?.userName}
          <FaTrash onClick={()=>{setModalIsOpen(true);setmodaldata(user)}} style={{float:"right",margin:"1rem",color:"red"}} className="pencil-icon" />
          </p>
          <p><strong>First Name:</strong> {user?.firstName}</p>
          <p><strong>Last Name:</strong> {user?.lastName}</p>
          <p><strong>Date of Birth:</strong> {datePipe(user?.dob)}</p>
          <p><strong>Mobile Number:</strong> {user?.mobileNo}</p>
          <p><strong>Email:</strong> {user?.emailId}</p>
        </div>
         )}
         <DeleteUserModal modaldata={modaldata} getAllUsers={getAllUsers} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
        </>
        
      )
    }

import React, { useContext, useEffect, useState } from 'react'
import axiosInstance from '../Utils/Axios.config';
import { FaPencilAlt } from 'react-icons/fa';
import UpdateModal from '../Modals/UpdateModal';
import { datePipe } from '../Utils/DatePipe';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { userGETFailure, userGETRequest, userGETSuccess } from '../Redux/UsersReducer/Action';

export default function Updateuser() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modaldata,setmodaldata]=useState({})
    const dispatch = useDispatch();
    const { users, isLoading, isError } = useSelector((state) => {
      return {
        users: state.UserReducer.data,
        isLoading: state.UserReducer.isLoading,
        isError: state.UserReducer.isError,
      };
    }, shallowEqual);
    

    useEffect(()=>{
        getAllUsers();
    },[])
    
    const getAllUsers=()=>{
      dispatch(userGETRequest());
     axiosInstance.get('/users')
       .then(res=>{
        dispatch(userGETSuccess([...res.data]))
       })
       .catch(err=>{
        dispatch(userGETFailure())
        console.log(err)
      })
    }
      return (
        <>
         <div>updateUsers</div>
         {isLoading&&<h3>...Loading</h3>}
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

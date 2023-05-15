import React, { useEffect, useState } from 'react'
import "./Pages-css/CreatedEvents.css"
import Navbar from '../Components/Navbar'
import CreateAEvent from '../Components/CreateAEvent'
import CreateEventModal from '../Modals/CreateEventModal';
import axios from 'axios';
import { accessData } from '../Utils/appLocalStorage';
import { Link } from 'react-router-dom';

export default function CreatedEvents() {
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [events,setEvents]=useState([])
    let user=accessData("user");
    
    useEffect(()=>{
        getMyEvent()
    },[])

    const getMyEvent=()=>{
      axios.get(`http://localhost:8080/api/event`)
      .then((res)=>{
        let data=res.data.filter((el)=>el.userid==user._id)
        setEvents(data)
      })
    }
    return (
   <>
    <Navbar/>
    <div id='createdevents'>
       <div id='events'>
      { events.map((el)=><Link to={`/mysingleevent/${el._id}`} key={el._id}><div id="event" >
            <h3>{el.name}</h3>
            <h4>{el.sport}</h4>
            <p>{el.description}</p>
         </div></Link>)}
       </div>
      <CreateAEvent setModalIsOpen1={setModalIsOpen1}/>
    </div>
      <CreateEventModal getMyEvent={getMyEvent}  modalIsOpen={modalIsOpen1} setModalIsOpen={setModalIsOpen1} />
   </>
  )
}

import React from 'react'
import "./component-css/CreateAEvent.css"

export default function CreateAEvent({setModalIsOpen1}) {
  return (
    <div id='createaevent' onClick={()=>setModalIsOpen1(true)}>
       <span> + </span> Add New Event
    </div>
  )
}

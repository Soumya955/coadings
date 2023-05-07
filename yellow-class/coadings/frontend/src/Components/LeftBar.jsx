import React from 'react'
import "./component-css/LeftBar.css"

export default function LeftBar({ show, setShow}) {
  return (
    <>
        <div className='left-bar-container'>
           <div onClick={()=>setShow("all")}>All</div>
           <div onClick={()=>setShow("favorite")} >Favorites</div>
        </div>
    </>
  )
}


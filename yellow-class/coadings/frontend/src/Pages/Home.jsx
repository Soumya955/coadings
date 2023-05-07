import React, { useState } from 'react'
import "./Pages-css/Home.css"
import LeftBar from '../Components/LeftBar'
import RightBar from '../Components/RightBar'

export default function Home() {
  const [show,setShow]=useState("all")
  return (
    <>
    <div className='home-container'>
      <LeftBar show={show} setShow={setShow}/>
      <RightBar show={show} setShow={setShow}/>
    </div>
    </>
  )
}

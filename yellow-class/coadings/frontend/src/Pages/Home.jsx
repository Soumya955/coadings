import React, { useState } from 'react'
import "./Pages-css/Home.css"
import LeftBar from '../Components/LeftBar'
import RightBar from '../Components/RightBar'
import Navbar from '../Components/Navbar'

export default function Home() {
  const [show,setShow]=useState("all")
  return (
    <>
     <Navbar/>
    <div className='home-container'>
      <LeftBar show={show} setShow={setShow}/>
      <RightBar show={show} setShow={setShow}/>
    </div>
    </>
  )
}

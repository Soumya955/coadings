import React from 'react'
import "./Pages-css/Home.css"
import LeftBar from '../Components/LeftBar'
import RightBar from '../Components/RightBar'

export default function Home() {
  return (
    <>
    <div className='home-container'>
      <LeftBar/>
      <RightBar/>
    </div>
    </>
  )
}

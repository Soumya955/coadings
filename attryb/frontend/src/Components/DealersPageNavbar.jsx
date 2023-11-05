import React from 'react'
import './css/HomeNavbar.css'
import {Link} from 'react-router-dom'

export default function DealersPageNavbar() {
  return (
    <div className='home-navbar'>
      <Link className='home-nav-links' to={"/home"}>See All Cars</Link>
      <Link className='home-nav-links' to={"/dealerspage"}>See Your Cars</Link>
      <Link className='home-nav-links' to={"/addcars"}>Add Your Cars</Link>
      <Link className='home-nav-links' to={"/editcars"}>Edit Your Cars</Link>
      <Link className='home-nav-links' to={"/deletecars"}>Delete Cars</Link>
    </div>
  )
}

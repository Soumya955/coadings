import React from 'react'
import './css/HomeNavbar.css'
import {Link} from 'react-router-dom'

export default function AllCarNavbar() {
  return (
    <div className='home-navbar'>
      <Link className='home-nav-links' to={"/home"}>See All Cars</Link>
      <Link className='home-nav-links' to={"/dealerspage"}>Dealer Page</Link>
    </div>
  )
}

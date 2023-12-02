import React from 'react'
import "./css/navAddress.css"

import { IoIosArrowForward } from 'react-icons/io';

export default function NavAddress() {
    const id="32457ABC";
  return (
    <div className='navbar-address'>
    <div className='navbar-address-parent'>
     <span>Order</span>
     <span><IoIosArrowForward/></span>
     <span>Order {id}</span>
    </div>
    </div>
  )
}

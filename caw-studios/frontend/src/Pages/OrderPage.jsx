import React from 'react'
import Navbar from '../Components/Navbar'
import NavAddress from '../Components/NavAddress'
import NavApprove from '../Components/NavApprove'
import StatusBar from '../Components/StatusBar'
import OrederBody from '../Components/OrederBody'

export default function OrderPage() {
  return (
    <>
        <Navbar/>
        <NavAddress/>
        <NavApprove/>
        <StatusBar/>
        <OrederBody/>
    </>
  )
}

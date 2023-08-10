import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Register from '../Components/Register'
import Home from './Home'
import PropertyDetails from '../Components/PropertyDetails'
import SingleUserPage from '../Components/SingleUserPage'
import SingleBookingPage from '../Components/SingleBookingPage'

export default function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/propertydetails" element={<PropertyDetails/>} />
            <Route path="/singleuser" element={<SingleUserPage/>} />
            <Route path="/singlebooking/:id" element={<SingleBookingPage/>} />
        </Routes>
    </>
  )
}


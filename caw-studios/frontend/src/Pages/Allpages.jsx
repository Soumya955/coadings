import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import OrderPage from './OrderPage'

export default function Allpages() {
  return (
   <Routes>
     <Route path='/' element={<OrderPage/>} />
   </Routes>
  )
}

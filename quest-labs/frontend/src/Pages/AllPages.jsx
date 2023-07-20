import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserForm from './UserForm'
import UserPage from './UserPage'

export default function AllPages() {
  const [data,setdata]=useState("")
  
  return (
    <>
      <Routes>
        <Route path='/' element={<UserForm setdata={setdata}/>}/>
        <Route path='/page' element={<UserPage data={data}/>}/>
      </Routes>
    </>
  )
}

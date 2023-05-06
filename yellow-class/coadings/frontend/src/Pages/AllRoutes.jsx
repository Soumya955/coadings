import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './SignIn'
import Home from './Home'
import SignUp from './SignUp'

export default function AllRoutes() {
  return (
    <>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
    </>
  )
}

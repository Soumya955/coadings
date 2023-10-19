import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './SignUp'
import SignIn from './SignIn'

export default function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<SignUp/>} />
            <Route path="/signin" element={<SignIn/>} />
        </Routes>
    </>
  )
}


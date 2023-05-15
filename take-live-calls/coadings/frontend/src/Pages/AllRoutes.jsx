import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import CreatedEvents from './CreatedEvents'
import AllEvents from './AllEvents'
import ESignleEvent from '../Components/ESignleEvent'
import MySingleEvent from '../Components/MySingleEvent'
import MyEvents from './MyEvents'

export default function AllRoutes() {
  return (
    <>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/allevents" element={<AllEvents/>}/>
          <Route path="/allevents/:id" element={<ESignleEvent/>}/>
          <Route path="/createdevents" element={<CreatedEvents/>}/>
          <Route path="/mysingleevent/:id" element={<MySingleEvent/>}/>
          <Route path="/myevents" element={<MyEvents/>}/>
        </Routes>
    </>
  )
}

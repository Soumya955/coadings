import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateUser from '../Components/CreateUser'
import SignIn from '../Components/SignIn'
import ShowUser from '../Components/ShowUser'
import ShowAllUsers from '../Components/ShowAllUsers'
import Updateuser from '../Components/Updateuser'
import DeleteUser from '../Components/DeleteUser'
import ValidateMobileNo from '../Components/ValidateMobileNo'

export default function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path='/' element={<CreateUser/>}/>
            <Route path='/login' element={<SignIn/>}/>
            <Route path='/showuser' element={<ShowUser/>}/>
            <Route path='/users' element={<ShowAllUsers/>}/>
            <Route path='/showuser' element={<ShowUser/>}/>
            <Route path='/update' element={<Updateuser/>}/>
            <Route path='/delete' element={<DeleteUser/>}/>
            <Route path='/validatemobileno' element={<ValidateMobileNo/>}/>
        </Routes>
    </>
  )
}

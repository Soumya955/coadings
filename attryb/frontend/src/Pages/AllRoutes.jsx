import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './SignUp'
import SignIn from './SignIn'
import AllCar from '../Components/AllCar'
import DealersPage from '../Components/DealersPage'
import AddYourCars from '../Components/AddYourCars'
import EditYourCars from '../Components/EditYourCars'
import DeleteYourCars from '../Components/DeleteYourCars'

export default function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<SignUp/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/home" element={<AllCar/>} />
            <Route path="/dealerspage" element={<DealersPage/>} />
            <Route path="/addcars" element={<AddYourCars/>} />
            <Route path="/editcars" element={<EditYourCars/>} />
            <Route path="/deletecars" element={<DeleteYourCars/>} />
        </Routes>
    </>
  )
}


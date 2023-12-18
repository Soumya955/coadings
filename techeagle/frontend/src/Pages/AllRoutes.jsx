import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Home from './Home'
import Customer from './Customer'
import Inventory from '../Components/Manager/Inventory'
import AddProduct from '../Components/Manager/AddProduct'
import CInventory from '../Components/Customer/CInventory'
import SingleProductPage from '../Components/Customer/SingleProductPage'
import Cart from '../Components/Customer/Cart'
import EditProduct from '../Components/Manager/EditProduct'

export default function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<SignUp/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/inventory" element={<Inventory/>} />
            <Route path="/addproduct" element={<AddProduct/>} />
            <Route path="/editproduct" element={<EditProduct/>} />
            <Route path="/cinventory" element={<CInventory/>} />
            <Route path="/singleproductpage" element={<SingleProductPage/>} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
    </>
  )
}


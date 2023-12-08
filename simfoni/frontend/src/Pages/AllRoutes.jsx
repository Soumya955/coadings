import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './ProductPage'
import SingleProductPage from '../Components/SingleProductPage'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<ProductPage/>}/>
        <Route path='/:id' element={<SingleProductPage/>}/>
    </Routes>
  )
}

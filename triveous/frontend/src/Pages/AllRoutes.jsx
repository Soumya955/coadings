import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'

export default function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage/>} />
        </Routes>
    </>
  )
}


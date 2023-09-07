import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'

export default function AllPages() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Dashboard/>} />
        </Routes>
    </>
  )
}


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todo from './Todo'

export default function AllPages() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Todo/>}/>
        </Routes>
    </div>
  )
}

import React from 'react'
import "./css/home.css"
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate=useNavigate()
  return (
    <div style={{margin:"2rem"}}>
        <button onClick={()=>navigate("/inventory")} style={{marginRight:"1rem"}}>Manager</button>
        <button onClick={()=>navigate("/cinventory")} >Customer</button>
    </div>
  )
}

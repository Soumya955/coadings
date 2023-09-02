import React from 'react'
import "./ComponentStyles.css"

export default function NoProductAdded() {
  return (<>
    <div className="container">
        <div className="icon">&#128722;</div>
        <h1>No Product Added</h1>
        <p>There are currently no products in your cart.</p>
    </div>
  </>
  )
}

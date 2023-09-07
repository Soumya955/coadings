import React from 'react'
import "./Component.css"

export default function Grid({data}) {
  return (
    <>
      <div className='grid-parent-div' key={`grid${data.capsule_id}`}>
        <h2>Name {data.capsule_id}</h2>
        <h3>Serial {data.capsule_serial}</h3>
        <h3>Date {data.original_launch}</h3>
        <h3>status {data.status}</h3>
        <h3>type {data.type}</h3>
      </div>  
    </>
  )
}

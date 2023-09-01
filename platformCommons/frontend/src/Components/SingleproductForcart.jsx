import React from 'react'

export default function SingleproductForcart({data}) {
  return (
    <>
        <div key={data.id}>
        <img  height={"250px"} width={"250px"}src={data.image} alt="" />
        <h3>{data.name}</h3>
        <h3>${data.price}</h3>
        <h2>Quanity:{data.quantity}</h2>
        <button>Remove</button>
        </div>
    </>
  )
}

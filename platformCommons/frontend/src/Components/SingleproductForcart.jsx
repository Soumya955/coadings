import axios from 'axios';
import React, { useEffect } from 'react'
import "./ComponentStyles.css"

export default function SingleproductForcart({data,getdata,checkCartEmpty}) {
 
    const removeFromCart=(data)=>{
      const apiUrl = 'https://mock-api-template2.onrender.com/Products';
      const updatedData = {
       quantity: 0,
      };

      axios.patch(`${apiUrl}/${data.id}`, updatedData)
       .then(res => {
      console.log('Item updated successfully:', res.data);
       getdata()
       checkCartEmpty()
      })
      .catch(err => {
       console.error('Error:', err);
      }); 
    }
  return (
    <>
        <div  key={data.id}>
        <img  height={"250px"} width={"250px"}src={data.image} alt="" />
        <h3 className='name'>{data.name}</h3>
        <h3 className='price'>${data.price}</h3>
        <h2>Quanity:{data.quantity}</h2>
        <button  className='SingleproductForcart-button-remove' onClick={()=>removeFromCart(data)}>Remove</button>
        </div>
    </>
  )
}

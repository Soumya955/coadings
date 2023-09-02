import axios from 'axios';
import React from 'react'
import "./ComponentStyles.css"

export default function SingleProduct({data,getdata}) {


    const handleCart=(data,quantity)=>{
        const apiUrl = 'https://mock-api-template2.onrender.com/Products';
      const updatedData = {
       quantity: quantity,
      };

      axios.patch(`${apiUrl}/${data.id}`, updatedData)
       .then(res => {
      console.log('Item updated successfully:', res.data);
       getdata()
      })
      .catch(err => {
       console.error('Error:', err);
      });
    }
  return (
   <div className='card'>
    <img  height={"250px"} width={"250px"}src={data.image} alt="" />
    <h3 className='name'>{data.name}</h3>
    <h3 className='price'>${data.price}</h3>
    {data.quantity?
    <div><button className='SingleProduct-button' onClick={()=>handleCart(data,data.quantity-1)}>-</button><span>{data.quantity}</span><button className='SingleProduct-button' onClick={()=>handleCart(data,data.quantity+1)}>+</button></div>
    :
    <button className='SingleProduct-button' onClick={()=>handleCart(data,1)}>Add to Cart</button>}
   </div>
  )
}

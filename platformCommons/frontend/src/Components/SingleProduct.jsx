import axios from 'axios';
import React from 'react'

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
   <div key={data.id}>
    <img  height={"250px"} width={"250px"}src={data.image} alt="" />
    <h3>{data.name}</h3>
    <h3>${data.price}</h3>
    {data.quantity?
    <div><button onClick={()=>handleCart(data,data.quantity-1)}>-</button><span>{data.quantity}</span><button onClick={()=>handleCart(data,data.quantity+1)}>+</button></div>
    :
    <button onClick={()=>handleCart(data,1)}>Add to Cart</button>}
   </div>
  )
}

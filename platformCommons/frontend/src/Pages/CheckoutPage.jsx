import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function CheckoutPage({data,getdata}) {
    const [total,settotal]=useState(0)
   
    useEffect(()=>{checktotal()},[])
    const checktotal=()=>{
        let sum=0;  
        if(data.length>0){for(let i=0;i<data.length;i++){
           sum+=(data[i].price*data[i].quantity)
        }}
        settotal(sum)
     }
  return (<>
  <div className='checkout-card'>
  <table>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
        </tr>
       { data?.map(item=>{if(item.quantity)return<tr key={item.id}>
            <td>{item.name}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
        </tr>})}
        
    </table>
    <h3 className='total'>Total:{total}</h3>
    <Link to={"/successpage"}><button className='checkout-button'>Place Order</button></Link>
  </div>

  </>
  )
}

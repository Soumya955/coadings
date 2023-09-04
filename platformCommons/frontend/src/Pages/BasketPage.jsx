import React, { useEffect, useState } from 'react'
import NoProductAdded from '../Components/NoProductAdded'
import SingleproductForcart from '../Components/SingleproductForcart'
import { useNavigate } from 'react-router-dom'

export default function BasketPage({data,getdata}) {
const [isCartEmpty,setisCartEmpty]=useState(true)
const [total,settortal]=useState(0)

const navigate=useNavigate();

console.log(data,"cc")
useEffect(()=>{
    checkCartEmpty()
},[data])

const checkCartEmpty=()=>{
let sum=0;

if(data.length>0){for(let i=0;i<data.length;i++){
    if(data[i].quantity){
        setisCartEmpty(false);
    }
   sum+=(data[i].price*data[i].quantity)
}}
settortal(sum)
if(!sum){
  setisCartEmpty(true)
}
}
  return (<>
  {isCartEmpty?<NoProductAdded/>:<div><h3 className='total'>Total:{total}</h3><button className='checkout-button' onClick={()=>navigate("/checkout")}>Checkout</button><div  className='BasketPage-body'>
    {data?.map(item=>{if(item.quantity)return<SingleproductForcart key={`${item.id}basket`} data={item} getdata={getdata} checkCartEmpty={checkCartEmpty}/>})}
  </div></div>}
  </>
  )
}

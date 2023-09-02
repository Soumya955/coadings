import axios from 'axios';
import React, { useEffect, useState } from 'react'
import cartImg from "../images/cart.jpg"
import "./Pages.css"
import SingleProduct from '../Components/SingleProduct';
import { useNavigate } from 'react-router-dom';

export default function CataloguePage({data,getdata}) {
    const navigate=useNavigate();
  return (<div>
    <div className='CataloguePage-nav'>
       <img onClick={()=>{navigate("/basketpage")}} className='cart-img' src={cartImg} alt="" />
    </div>
    <div className='CataloguePage-body'>
    {data?.map(item=><SingleProduct  key={`${item.id}catalog`} data={item} getdata={getdata}/>)}
    </div>
  </div>
  )
}

import React, { useEffect, useState } from 'react'
import { fetchData } from '../Utils/Api';

export default function HomeProducts() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>HomeProducts</div>
  )
}

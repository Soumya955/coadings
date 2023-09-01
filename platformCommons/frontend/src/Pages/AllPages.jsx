import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import CataloguePage from './CataloguePage'
import BasketPage from './BasketPage'
import axios from 'axios'

export default function AllPages() {
    const [data,setdata]=useState([])


    useEffect(()=>{
      getdata()
    },[])
    const getdata=()=>{
      const apiUrl = 'https://mock-api-template2.onrender.com/Products';
      axios.get(`${apiUrl}`)
        .then(res => {
          setdata(res.data)
          console.log(res.data);
        })
        .catch(err => {
          console.error('Error:', err);
        });
      
    }
  return (
    <>
        <Routes>
            <Route path="/" element={<CataloguePage data={data} getdata={getdata}/>} />
            <Route path="/basketpage" element={<BasketPage data={data} getdata={getdata}/>} />
        </Routes>
    </>
  )
}


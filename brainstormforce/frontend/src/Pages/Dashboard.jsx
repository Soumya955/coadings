import React, { useEffect, useState } from 'react'
import { getDefaultData } from './data';
import "./Pages.css"
import Grid from '../Components/Grid';
import Pagination from '../Components/Pagination';

export default function () {
    const [data,setdata]=useState([])
    const [page,setpage]=useState(1)
  
  
    useEffect(()=>{
      getDefaultData(page).then(res=>setdata(res.data))
    },[])
    useEffect(()=>{
      getDefaultData(page).then(res=>setdata(res.data))
    },[page])
  return (<>
  <h1>dashboard</h1>
  <div className='grid-div'>
  {data?.map(item=><Grid data={item}/>)}
  </div>
  <Pagination setpage={setpage} page={page}/>
  </>
  )
}

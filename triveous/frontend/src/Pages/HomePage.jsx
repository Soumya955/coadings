import React, { useEffect, useState } from 'react'
import "./css/home.css" 
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { accessData, saveData } from '../Utils/appLocalStorage';
import { getdata } from '../Axios';

export default function HomePage() {

    const [gridview,setgridview]=useState(false);
    const [data,setdata]=useState(accessData("newsData")||[]);
    
    const toggleFavorite = (title) => {
      let data1=data?.map(item=>{
          if(item.title==title){
              return {...item,isFavorite:!item.isFavorite}
          }else{
              return item;
          }
      })
      saveData("newsData",data1)
      console.log(data1,'data1')
    //   setdata([...data1])
    };
    useEffect(()=>{getdata()},[])

    console.log(data)
    console.log(gridview)
  return (
    <>
     
       <h2 style={{float:'left', marginLeft:"150px"}}>News India</h2>  
        <span className='toggle'>GridView</span>
        <label className="switch">
        <input type="checkbox" checked={gridview} onChange={()=>setgridview((gridview)=>!gridview)} id="toggle"/>
        <span className="slider round"></span>
        </label>
        <div className={gridview?"gridview":"normalview"}>
     {data?.map(item=><div key={item.title} >
        <Link style={{textDecoration:"none"}} to={item.url}><h3 className='title'>{item.title}</h3></Link>
        <span onClick={toggleFavorite(item.title)}>
        {item.isFavorite ? (
          <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />
        ) : (
          <FontAwesomeIcon icon={faHeart} />
        )}
      </span>
        <h5 className='author'>Author :{item.author}</h5>
        <img className='image' src={item.urlToImage} alt="" />
     </div>)}
    </div>
    </>
    

  )
}

import React, { useState } from 'react'
import styles from "../css/styles.css"
import { postData } from '../NetCall.js'
import { useNavigate } from 'react-router-dom'

export default function UserForm({setdata}) {
    const [formdata,setformdata]=useState({feeling:"",activity:"",issue:""}) 
    const navigate=useNavigate();

    const submitForm=()=>{
     if(formdata.feeling&&formdata.activity&&formdata.issue){
      const userInput = `feeling ${formdata.feeling} right now, they currently are ${formdata.activity} and facing ${formdata.issue} issues today`;
        postData(userInput)
        .then(res=>{setdata(res.data.generatedText);
        navigate("/page")
        })
     }
    }

  return (
    <>
    <div id='form'>
    <label>How are you feeling right now?</label>
    <input value={formdata.feeling} onChange={(e)=>setformdata({...formdata,feeling:e.target.value})} type="text"/>
    
    <label >What are you currently doing?</label>
    <input value={formdata.activity} onChange={(e)=>setformdata({...formdata,activity:e.target.value})}   type="text" />
  
    <label >What issues are you facing today?</label>
    <input value={formdata.issue} onChange={(e)=>setformdata({...formdata,issue:e.target.value})}  type="text" />
    <button onClick={submitForm}>Submit</button>
  </div>
 
    </>
  )
}

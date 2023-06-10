import React, { useEffect, useState } from 'react'
import "./Coach.css"
import { getData, sendData } from './backend';
import { getLocalData } from './local';

export default function Coach() {
    const [seats,setseats]=useState('');
    const [seatArray,setSeatArray]=useState(getData())

    useEffect(()=>{
      setSeatArray(getData())
    },[])
 console.log(seatArray)
    const handleClick=()=>{
      let a1=sendData(+seats)
      console.log(a1)
      setSeatArray([...a1])
    }
    
return (
<>
<div className="train-coach">
    <div className="row">
      <div style={{backgroundColor:seatArray[0][0]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[0][1]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[0][2]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[0][3]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[0][4]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[0][5]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[0][6]?"red":""}} className="seat"></div>
    </div>
    <div className="row">
      <div style={{backgroundColor:seatArray[1][0]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[1][1]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[1][2]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[1][3]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[1][4]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[1][5]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[1][6]?"red":""}} className="seat"></div>
    </div><div className="row">
    <div style={{backgroundColor:seatArray[2][0]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[2][1]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[2][2]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[2][3]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[2][4]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[2][5]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[2][6]?"red":""}} className="seat"></div>
    </div><div className="row">
    <div style={{backgroundColor:seatArray[3][0]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[3][1]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[3][2]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[3][3]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[3][4]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[3][5]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[3][6]?"red":""}} className="seat"></div>
    </div><div className="row">
    <div style={{backgroundColor:seatArray[4][0]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[4][1]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[4][2]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[4][3]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[4][4]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[4][5]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[4][6]?"red":""}} className="seat"></div>
    </div><div className="row">
    <div style={{backgroundColor:seatArray[5][0]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[5][1]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[5][2]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[5][3]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[5][4]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[5][5]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[5][6]?"red":""}} className="seat"></div>
    </div><div className="row">
    <div style={{backgroundColor:seatArray[6][0]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[6][1]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[6][2]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[6][3]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[6][4]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[6][5]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[6][6]?"red":""}} className="seat"></div>
    </div><div className="row">
    <div style={{backgroundColor:seatArray[7][0]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[7][1]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[7][2]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[7][3]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[7][4]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[7][5]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[7][6]?"red":""}} className="seat"></div>
    </div><div className="row">
    <div style={{backgroundColor:seatArray[8][0]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[8][1]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[8][2]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[8][3]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[8][4]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[8][5]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[8][6]?"red":""}} className="seat"></div>
    </div><div className="row">
    <div style={{backgroundColor:seatArray[9][0]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[9][1]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[9][2]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[9][3]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[9][4]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[9][5]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[9][6]?"red":""}} className="seat"></div>
    </div><div className="row">
    <div style={{backgroundColor:seatArray[10][0]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[10][1]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[10][2]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[10][3]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[10][4]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[10][5]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[10][6]?"red":""}} className="seat"></div>
    </div><div className="row">
      <div style={{backgroundColor:seatArray[11][0]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[11][1]?"red":""}} className="seat"></div>
      <div style={{backgroundColor:seatArray[11][3]?"red":""}} className="seat"></div>
    </div>
    <div className="row">
      <input value={seats}  onChange={(e)=>setseats(e.target.value)} type="number" />
      <button disabled={+seats==0||+seats>7} onClick={handleClick}>Enter No of seats</button>
    </div>
</div>
</>
)
}

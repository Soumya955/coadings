import React from 'react'

export default function Pagination({page,setpage}) {
  return (
    <div className='pageination-div'>
        <button disabled={page==1} onClick={()=>setpage(page=>page-1)}>prev</button>
        <button>{page}</button>
        <button  onClick={()=>setpage(page=>page+1)}>next</button>
    </div>
  )
}

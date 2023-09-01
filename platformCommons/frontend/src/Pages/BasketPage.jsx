import React from 'react'
import NoProductAdded from '../Components/NoProductAdded'
import SingleproductForcart from '../Components/SingleproductForcart'

export default function BasketPage({data,getdata}) {

  return (<>
  <div  className='BasketPage-body'>
    {data.map(item=>{if(item.quantity)return<SingleproductForcart data={item}/>})}
  </div>
  </>
  )
}

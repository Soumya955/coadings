import React from 'react'
import { IoCheckmarkSharp } from 'react-icons/io5'

export default function TdTrueIcon({editProducts,product}) {
  return (
    <td style={{color:(product.status=="Approved")?`rgb(68,204,121)`:""}}  onClick={()=>editProducts(product.id,"status","Approved")}><IoCheckmarkSharp /></td>
  )
}

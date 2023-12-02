import React from 'react'
import { IoCheckmarkSharp } from 'react-icons/io5'

export default function TdTrueIcon({editProducts,product}) {
  return (
    <td style={{color:(product.status&&product.status!="Missing"&&product.status!="MIssing-Urgent")?`rgb(68,204,121)`:"",fontSize:(product.status&&product.status!="Missing"&&product.status!="MIssing-Urgent")?`1.5rem`:""}}  onClick={()=>editProducts(product.id,"status","Approved")}><IoCheckmarkSharp /></td>
  )
}

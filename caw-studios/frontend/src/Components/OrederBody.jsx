import React, { useState } from "react";
import "./css/orederBody.css";
import data from "../Data/data.json";
import { IoCheckmarkSharp, IoCloseSharp } from 'react-icons/io5';
import TdEdit from "./TdEdit";
import TdFalseIcon from "./TdFalseIcon";
import TdTrueIcon from "./TdTrueIcon";
import BodySearchBar from "./BodySearchBar";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ORDERDATAUPDATERequest } from "../Redux/OrderDataReducer/Action";

export default function OrederBody() {

  const dispatch = useDispatch();
  const { products, isLoading, isError } = useSelector((state) => {
    return {
      products: state.OrderDataReducer.data,
      isLoading: state.OrderDataReducer.isLoading,
      isError: state.OrderDataReducer.isError,
    };
  }, shallowEqual);
console.log(products)
  const editProducts=(id,key,data)=>{
     let newData=products.map((item,index)=>{
        return (id==item.id)?{...item,[key]:data}: item;
     })
     dispatch(ORDERDATAUPDATERequest([...newData]))
  }

  return (
    <div className="order-body-parent">
      <BodySearchBar/>
      <table className="product-table">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td><img className="table-img" src={product.imageUrl} alt="" /></td>
              <td>{product.productName}</td>
              <td>{product.brand}</td>
              <td>${product.price} /6+1LB</td>
              <td>{product.quantity} /6+1LB</td>
              <td>${(product.price * product.quantity).toFixed(2)}</td>
              <td >{product.status&&<button  className={`${product.status}`}>{product.status.split("-").join(" ")}</button>}</td>
              <TdTrueIcon editProducts={editProducts} product={product}/>
              <TdFalseIcon editProducts={editProducts} product={product}/>
              <TdEdit editProducts={editProducts} product={product}/>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

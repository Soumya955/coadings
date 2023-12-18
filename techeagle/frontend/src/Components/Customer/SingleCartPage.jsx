import React, { useState } from 'react'
import "./css/singleCartPage.css"

export default function SingleCartPage({ cartItem,removeItem}) {
   
    const [quantity,setQuantity]=useState(+cartItem.quantity)

    
    return (
      <div className="cart-item" key={cartItem._id}>
        <div className="cart-image">
          <img src={cartItem.image} alt="Product" />
        </div>
        <div className="cart-details">
          <p className="cart-description">{cartItem.description}</p>
          <p>Price: {cartItem.price}</p>
          <p>Quantity: {quantity}</p>
          <p>Weight: {cartItem.weight}</p>
          <div className="quantity-control" style={{width:'5rem'}}>
            <button className="quantity-btn" onClick={()=>setQuantity(quantity-1)}>-</button>
            <span>{quantity}</span>
            <button className="quantity-btn" onClick={()=>setQuantity(quantity+1)}>+</button>
          </div>
          <button 
          onClick={()=>removeItem(cartItem._id)}
          style={{
          backgroundColor: "red",
          borderRadius: "10px",
          padding: "10px",
        }}>Remove</button>
        </div>
      </div>
    );
  };
  
import React, { useState } from 'react'
import "./css/singleProductPage.css"
import { useLocation } from 'react-router-dom';
import CustomerNav from './CustomerNav';
import { accessLocalStorageData, saveLocalStorageData } from '../../Utils/localstorage';
import axios from 'axios';
import { alertAddedToCart, alertProductAlreadyExists } from '../../alerts';

export default function SingleProductPage() {
    const [quantity, setQuantity] = useState(1); 
    const location=useLocation()
    let product=location.state;
     console.log(product,"cart")
    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const upadateCart=()=>{
        let user=accessLocalStorageData("user")
        let exists=false;
        for(let i=0;i<user.cart.length;i++){
           if(user.cart[i]._id==product._id)exists=true;
        }
        console.log(exists)
        if(exists){
            alertProductAlreadyExists();
        }else{
            product.quantity=quantity;
            user.cart.push(product)
            updateUserCart(user)
            alertAddedToCart()
            saveLocalStorageData("user",user)
        }   
    }
  
    const updateUserCart = (data) => {
        const endpoint = `https://mock-server-1.onrender.com/api/cart/${data._id}`; 
      

        console.log(data,"single_p-Page")
        axios.patch(endpoint, data)
          .then((response) => {
            console.log('User cart updated:', response.data);
           
          })
          .catch((error) => {
            console.error('Error updating user cart:', error);
          });
      };
    
  
    return (
        <>
              <CustomerNav/>
              <div className="single-product">
    
        <div className="product-details">
          <img src={product.image} alt="Product" className="single-product-image" />
          <p className="product-description">{product.description}</p>
          <p className="product-info">Weight: {product.weight}</p>
          <p className="product-info">Price: {product.price}</p>
          <div className="quantity-control">
            <button className="quantity-btn" onClick={handleDecrement}>-</button>
            <input type="text" style={{width:"40px"}} value={quantity} readOnly className="quantity-input" />
            <button className="quantity-btn" onClick={handleIncrement}>+</button>
          </div>
          <button onClick={upadateCart} className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
        </>
      
    );
  };
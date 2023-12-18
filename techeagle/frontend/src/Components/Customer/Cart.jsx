import React, { useState } from "react";
import "./css/cart.css";
import {
  accessLocalStorageData,
  saveLocalStorageData,
} from "../../Utils/localstorage";
import SingleCartPage from "./SingleCartPage";
import CustomerNav from "./CustomerNav";
import { alertOrderPlaced, alertProductRemovedFromCart } from "../../alerts";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Cart() {
  const [cartData, setCartData] = useState(() => {
    let a = accessLocalStorageData("user");
    return a.cart;
  });
  const navigate = useNavigate();

  const removeItem = (id) => {
    let arr1 = [];
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i]._id != id) {
        arr1.push(cartData[i]);
      }
    }
    alertProductRemovedFromCart();
    let user = accessLocalStorageData("user");
    let user1 = { ...user, cart: arr1 };
    setCartData(arr1);
    saveLocalStorageData("user", user1);
    updateUserCart(user1)
  };



  const updateUserCart = (data) => {
    const endpoint = `https://mock-server-1.onrender.com/api/cart/${data._id}`; 
  
    axios.patch(endpoint, data)
      .then((response) => {
        console.log('User cart updated:', response.data);
       
      })
      .catch((error) => {
        console.error('Error updating user cart:', error);
      });
  };

  const placeorder=()=>{
    let user=accessLocalStorageData("user");
    let product={orders:[]}
    product.orders=cartData;
  }
  return (
    <div>
      <CustomerNav />
      <div className="products-parent">
        {cartData.length < 1 && <h3>Cart is Empty</h3>}
        {cartData?.map((product) => (
          <SingleCartPage cartItem={product} removeItem={removeItem} />
        ))}
      </div>
      <button
        style={{
          backgroundColor: "grey",
          borderRadius: "10px",
          padding: "10px",
        }}
        onClick={() => {
          alertOrderPlaced();
          navigate("/home");
        }}
      >
        Place Order
      </button>
    </div>
  );
}

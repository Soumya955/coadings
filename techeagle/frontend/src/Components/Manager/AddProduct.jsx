import React, { useState } from "react";
import "./css/addProduct.css";
import ManagerNav from "./ManagerNav";
import axios from "axios";
import { alertProductAdded } from "../../alerts";
import { accessLocalStorageData } from "../../Utils/localstorage";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    image: "",
    description: "",
    quantity: "",
    weight: "",
    price: "",
  });

  let user=accessLocalStorageData("user")

  const handleAdd = () =>{
    if( formData.image&&formData.description&&formData.quantity&&formData.weight&&formData.price){
        formData.user=user;
      axios.post('https://mock-server-1.onrender.com/api/product', formData)
        .then((res) => {
          console.log('Product added:', res.data); 
          alertProductAdded()
        //   setFormData({
        //     image: '',
        //     description: '',
        //     quantity: '',
        //     weight: '',
        //     price: '',
        //   });
        })
        .catch((err) => {
          console.err('Error adding product:', err);
        });
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <ManagerNav />
      <div className="product-input-container">
        <h2>Product Information</h2>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Weight:</label>
          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
      </div>
      <button onClick={handleAdd} type="submit" className="submit-btn">
          Add
        </button>
    </>
  );
}

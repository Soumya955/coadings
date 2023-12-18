import React from 'react';
import './css/productCard.css'; 
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onDelete, onEdit }) => {
  const { image, description, quantity, weight, price } = product;
  const navigate=useNavigate();

  return (
    <div className="product-card" key={product.id}>
      <img src={image} alt="Product" className="product-image" />
      <div className="product-details">
        <p className="product-description">{description}</p>
        <p className="product-info">Quantity: {quantity}</p>
        <p className="product-info">Weight: {weight}</p>
        <p className="product-info">Price: {price}</p>
        <div className="button-container">
          <button className="edit-btn" onClick={() =>{ onEdit(product._id);navigate("/singleproductpage",{state:product})}}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

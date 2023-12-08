import React from "react";
import "./css/productCard.css";
import { FaRegHeart } from "react-icons/fa6";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, getData, updateData, loading }) {
  const handleQuantityAdd = () => {
    updateData(product.id, { ...product, quantity: product.quantity + 1 });
  };
  const handleQuantitySub = () => {
    if (product.quantity > 1)
      updateData(product.id, { ...product, quantity: product.quantity - 1 });
  };
  return (
    <div className="product-card" key={product.id}>
      <img src={product.image} alt="" />
      <p className="name">{product.name}</p>
      <p className="price">
        <span>${product.price}</span>
        <span>/each</span>
      </p>
      <p className="saving">Saving % $40.6</p>
      <p className="supplier">
        <span>Supplier :</span>
        <span>Supplier</span>
      </p>
      <p className="delivery">
        <span>Delivery by :</span>
        <span>24-jan-2024</span>
      </p>
      <div>
        <div className="quantity">
          <button className="transparent-button" onClick={handleQuantitySub}>
            -
          </button>
          <button className="transparent-button">
            {loading.quantity && loading.id == product.id ? (
              <Spinner
                thickness="2px"
                speed="0.65s"
                emptyColor="gray.200"
                color="rgb(130, 228, 252);"
                size="sm"
              />
            ) : (
              <span>{product.quantity}</span>
            )}
          </button>
          <button className="transparent-button" onClick={handleQuantityAdd}>
            +
          </button>
        </div>
        <div className="add-to-cart-logo">
          {" "}
          <MdCheckBoxOutlineBlank className="box" />
          <FaRegHeart className="heart" />
        </div>
      </div>
      <Link to={`/${product.id}`}><button className="add-to-card" >Add to Cart</button></Link>
      
    </div>
  );
}

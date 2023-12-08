import React, { useEffect, useState } from "react";
import "./css/singleProductPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

export default function SingleProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setloading] = useState({
    id: "",
    quantity: false,
    addtocart: false,
  });

  useEffect(() => {
    getSingleData();
  }, []);
  const getSingleData = () => {
    axios
      .get(`https://mock-api-template2.onrender.com/Products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  };

  const updateData = (id, newData) => {
    setloading({ ...loading, id: id, quantity: true });
    axios
      .patch(`https://mock-api-template2.onrender.com/Products/${id}`, newData)
      .then((res) => {
        setloading({ ...loading, id: "", quantity: false });
        getSingleData();
      })
      .then((err) => console.log(err));
  };


  const handleQuantityAdd = () => {
    updateData(product.id, { ...product, quantity: product.quantity + 1 });
  };
  const handleQuantitySub = () => {
    if (product.quantity > 1)
      updateData(product.id, { ...product, quantity: product.quantity - 1 });
  };
  console.log(product);
  return (
    <div className="single-product">
      <div className="single-product-parent">
        <div>
          <img src={product.image} alt="" />
        </div>
        <div >
          <h3 className="names"> {product.name}</h3>
          <h5 className="types">Type: {product.type}</h5>
          <h4 className="prices">Price: {product.price} /each</h4>
          <div style={{display:"flex"}}>
            <div className="quantity">
              <button
                className="transparent-button"
                onClick={handleQuantitySub}
              >
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
              <button
                className="transparent-button"
                onClick={handleQuantityAdd}
              >
                +
              </button>
            </div>
            <div className="add-to-cart-logo">
              {" "}
              <MdCheckBoxOutlineBlank className="box" />
              <FaRegHeart className="heart" />
            </div>
            
          </div>
          <button className="add-to-card">Add to Cart</button>
          <div style={{width:"32rem",marginTop:"2rem"}}>
            descrption: And we’re not alone. Last year, 80% of Americans shopped online at least monthly, and 5% were shopping online daily, Big Commerce reported. For many of us, online shopping has become a routine part of daily life, with huge impact on a global scale. Global ecommerce sales have skyrocketed over the last four years: According to Statista, in 2014, annual online sales totalled $1.3 billion USD worldwide
        </div>
        </div>
        
      </div>
    </div>
  );
}

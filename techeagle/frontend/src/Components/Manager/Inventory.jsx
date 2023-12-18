import React, { useEffect, useState } from "react";
import ManagerNav from "./ManagerNav";
import "./css/inventory.css";
import axios from "axios";
import ProductCard from "./ProductCard";
import { alertProductDeleted } from "../../alerts";
import { accessLocalStorageData } from "../../Utils/localstorage";

export default function Inventory() {
  const [products, setProducts] = useState([]);
  let user=accessLocalStorageData("user")

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`https://mock-server-1.onrender.com/api/product/${user._id}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  console.log(products, "pp");
  const onEdit = () => {};
  const onDelete = (productId) => {
    axios.delete(`https://mock-server-1.onrender.com/api/product/${productId}`)
    .then((response) => {
      alertProductDeleted();
      getData()
    })
    .catch((error) => {
      console.error('Error deleting product:', error);
    });
  };
  return (
    <div>
      <ManagerNav />
      <div className="products-parent">
        {products?.map((product) => (
          <ProductCard product={product} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

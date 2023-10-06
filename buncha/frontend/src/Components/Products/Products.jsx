import React from "react";
import "../../style/products.css";
import { ProductMenu } from "./ProductMenu";
import { ProductListContainer } from "./ProductListContainer";

export const Products = () => {
  return (
    <div className="productsContainer">
      <ProductMenu />
      <ProductListContainer />
    </div>
  );
};

import React, { useEffect, useState } from 'react'
import "./css/CInventory.css"
import ProductCard from './ProductCard';
import axios from 'axios';
import CustomerNav from './CustomerNav';

export default function CInventory() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getData();
    }, []);
  
    const getData = () => {
      axios
        .get("https://mock-server-1.onrender.com/api/product")
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
        getData()
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
    };
    return (
      <div>
        <CustomerNav/>
        <div className="products-parent">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </div>
      </div>
    );
  }
  

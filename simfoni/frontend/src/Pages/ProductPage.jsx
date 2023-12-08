import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../Components/ProductCard";
import "./css/productPage.css";
import SearchFilter from "../Components/SearchFilter";

export default function ProductPage() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState({
    id: "",
    quantity: false,
    addtocart: false,
  });
  const [searchText, setSearchText] = useState("");
  const [filter, setfilter] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    getData(searchText, filter, sort);
  }, [filter, sort]);

  const getData = (searchText = "", filter = "", sort = "") => {
    axios
      .get(
        `https://mock-api-template2.onrender.com/Products?q=${searchText}&_sort=${filter}&_order=${sort}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const updateData = (id, newData) => {
    setloading({ ...loading, id: id, quantity: true });
    axios
      .patch(`https://mock-api-template2.onrender.com/Products/${id}`, newData)
      .then((res) => {
        setloading({ ...loading, id: "", quantity: false });
        getData(searchText, filter, sort);
      })
      .then((err) => console.log(err));
  };

  console.log(data);

  return (
    <>
      <SearchFilter
        sort={sort}
        setSort={setSort}
        filter={filter}
        setfilter={setfilter}
        searchText={searchText}
        setSearchText={setSearchText}
        getData={getData}
      />
      <div
        style={{
          textAlign: "left",
          width: "79%",
          margin: "3rem auto",
          padding:"1em",
          background: "white",
          borderRadius:"10px"
        }}
      >
         {searchText ?searchText:"best Selling"}
         {/* {searchText && {searchText}} */}
      </div>
      <div className="product-parent">
        {data?.slice(0, 8).map((product) => (
          <ProductCard
            product={product}
            getData={getData}
            updateData={updateData}
            loading={loading}
          />
        ))}
      </div>
     {!searchText &&<>
      <div
        style={{
          textAlign: "left",
          width: "79%",
          margin: "3rem auto",
          padding:"1em",
          background: "white",
          borderRadius:"10px"
        }}
      >
         { "   " } New Arrivals
      </div>
      <div className="product-parent">
        {data?.slice(8, 16).map((product) => (
          <ProductCard
            product={product}
            getData={getData}
            updateData={updateData}
            loading={loading}
          />
        ))}
      </div>
      <div
        style={{
          textAlign: "left",
          width: "79%",
          margin: "3rem auto",
          padding:"1em",
          background: "white",
          borderRadius:"10px"
        }}
      >
         { "   " } All Items
      </div>
      <div className="product-parent">
        {data?.slice(16, data.length-1).map((product) => (
          <ProductCard
            product={product}
            getData={getData}
            updateData={updateData}
            loading={loading}
          />
        ))}
      </div>
      </>}
      ;
    </>
  );
}

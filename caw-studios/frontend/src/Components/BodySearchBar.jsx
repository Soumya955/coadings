import React from "react";
import "./css/bodySearchBar.css";
import { LuPrinter } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addNewOrder } from "../Utils/utils";
import { ORDERDATAADDSuccess } from "../Redux/OrderDataReducer/Action";
import { alertOrderAddedSuccess } from "../alerts";

export default function BodySearchBar() {
  const dispatch = useDispatch();
  const { products, isLoading, isError } = useSelector((state) => {
    return {
      products: state.OrderDataReducer.data,
      isLoading: state.OrderDataReducer.isLoading,
      isError: state.OrderDataReducer.isError,
    };
  }, shallowEqual);
  const addItem = () => {
    let data1 = addNewOrder();
    data1.id = products.length + 1 + "soumya";
    let data2 = [data1, ...products];
    dispatch(ORDERDATAADDSuccess(data2));
    alertOrderAddedSuccess()
  };
  return (
    <div className="search-parent">
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">
          <CiSearch className="search-icon" />
        </button>
      </div>
      <div>
        <span>
          <LuPrinter className="printer" />
        </span>
        <button className="rounded-button1" onClick={addItem}>
          Add Item
        </button>
      </div>
    </div>
  );
}

import React, { useContext, useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import "./Css-for-Modals/UpdateModal.css";
import { getFixedNumberOfWords } from "../Utils/utils";
import { IoClose } from 'react-icons/io5';
import { shallowEqual, useSelector } from "react-redux";

export default function UpdateModal({
  editProducts,
  product,
  modalIsOpen,
  setModalIsOpen,
}) {

  const { products, isLoading, isError } = useSelector((state) => {
    return {
      products: state.OrderDataReducer.data,
      isLoading: state.OrderDataReducer.isLoading,
      isError: state.OrderDataReducer.isError,
    };
  }, shallowEqual);
  const [price, setprice] = useState(product.price);
  const [quantity, setquantity] = useState(product.quantity);
  const [total, setTotal] = useState(
    (product.price * product.quantity).toFixed(2)
  );
  const [choosereasonButton, setchoosereasonButton] = useState({
    "missing-product": false,
    "quantity-is-not-the-same": false,
    "price-is-not-the-same": false,
  });

  const changeChooseReason=(key,value)=>{
    setchoosereasonButton((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  useEffect(() => {
    if(price != product.price)changeChooseReason('price-is-not-the-same',true)
    if(quantity != product.quantity)changeChooseReason('quantity-is-not-the-same',true)
    if(!quantity)changeChooseReason('missing-product',true)
    if(quantity)changeChooseReason('missing-product',false)
    setTotal((price * quantity).toFixed(2));
  }, [price, quantity]);


  const updateProduct = () => {
    let udata = "";
     if(choosereasonButton["price-is-not-the-same"]&&choosereasonButton["quantity-is-not-the-same"]){
      udata="Quantity-and-Price-has-Changed"
    }else if(choosereasonButton["price-is-not-the-same"]){
      udata="Price-has-Changed"
    }else if(choosereasonButton["quantity-is-not-the-same"]){
      udata="Quantity-has-Changed"
    }

    if(choosereasonButton["missing-product"]){
      udata="Missing"
    }
   
   
    let d1=editProducts(product.id,"status",udata,products)
    let d2=editProducts(product.id,"quantity",quantity,d1);
    let d3=editProducts(product.id,"price",price,d2);
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        className="Modal-update"
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      ><span style={{float:"right"}}><IoClose  onClick={()=> setModalIsOpen(false)}/></span>
        <h3>{`${getFixedNumberOfWords(product.productName, 9)}...`}</h3>
        <h4>American Roland</h4>
        <div className="change-price-quantity-parent">
          <div>
            <img src={product.imageUrl} alt="" />
          </div>
          <div>
            <div>
              <div>{`Price($)`}</div>{" "}
              <div>
                <input
                  className="update-input"
                  value={price}
                  name="price"
                  onChange={(e) => setprice(e.target.value)}
                  type="number"
                />
              </div>{" "}
              <div>{`/6+1LB`}</div>
            </div>
            <div>
              <div>{`Quantity`}</div>{" "}
              <div>
                <button
                  className="update-round-button"
                  onClick={() =>
                    quantity && setquantity((quantity) => quantity - 1)
                  }
                >
                  -
                </button>{" "}
                <input
                  value={quantity}
                  name="quantity"
                  onChange={(e) => setquantity(e.target.value)}
                  className="update-input"
                  type="number"
                />{" "}
                <button
                  className="update-round-button"
                  onClick={() =>quantity?setquantity((quantity) => quantity + 1):setquantity(1)}
                >
                  +
                </button>
              </div>{" "}
              <div>{`/6+1LB`}</div>
            </div>
            <div>
              <div>{`Total`}</div> <div>${total}</div>
            </div>
          </div>
        </div>
        <h4>Choose Reason</h4>
        <div style={{marginBottom:"1rem"}}>
          <button
            className={`reason-round-button ${
              choosereasonButton["missing-product"]
                ? "change-background"
                : ""
            }`}
          >
            Missing Product
          </button>
          <button
            className={`reason-round-button ${
              choosereasonButton["quantity-is-not-the-same"]
                ? "change-background"
                : ""
            }`}
          >
            Quantity is not the same
          </button>
          <button
            className={`reason-round-button ${
              choosereasonButton["price-is-not-the-same"]
                ? "change-background"
                : ""
            }`}
          >
            Price is not the same
          </button>
          <button className="reason-round-button">Other</button>
        </div>
        <button
          type="button"
          className="rounded-button2"
          onClick={() => {
            updateProduct()
            setModalIsOpen(false);
          }}
        >
          Send
        </button>
        <button className="rounded-button1" onClick={() => setModalIsOpen(false)}>
          Cancel
        </button>
      </Modal>
    </>
  );
}

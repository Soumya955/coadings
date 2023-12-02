import React, { useContext, useState } from "react";
import Modal from "react-modal";
import "./Css-for-Modals/FalseModal.css";
import { getFixedNumberOfWords } from "../Utils/utils";
import { IoClose } from 'react-icons/io5';

export default function FalseModal({
  editProducts,
  product,
  modalIsOpen,
  setModalIsOpen,
}) {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        className="Modal-false"
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>Missing product <span style={{float:"right"}}><IoClose  onClick={()=> setModalIsOpen(false)}/></span></h2>
        <p>
          {`is ${getFixedNumberOfWords(product.productName, 4)}... urgent`} ?
        </p>
        <button
          className="add"
          type="button"
          onClick={() => {
            setModalIsOpen(false);
            editProducts(product.id,"status","Missing-Urgent")
          }}
        >
          Yes
        </button>
        <button
          className="cancel"
          onClick={() => {
            setModalIsOpen(false);
            editProducts(product.id,"status","Missing")
          }}
        >
          No
        </button>
      </Modal>
    </>
  );
}

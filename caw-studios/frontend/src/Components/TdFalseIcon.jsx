import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import FalseModal from "../Modals/FalseModal";

export default function TdFalseIcon({ product, editProducts }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <td style={{color:(product.status=="Missing"||product.status=="Missing-Urgent")?`red`:"",fontSize:(product.status=="Missing"||product.status=="Missing-Urgent")?`1.5rem`:""}} onClick={() => setModalIsOpen(true)}>
        {" "}
        <IoCloseSharp />
      </td>
      <FalseModal
        product={product}
        editProducts={editProducts}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </>
  );
}

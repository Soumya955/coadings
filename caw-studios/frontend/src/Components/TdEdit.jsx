import React, { useState } from "react";
import UpdateModal from "../Modals/UpdateModal";

export default function TdEdit({editProducts,product}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return <>
  <td onClick={()=>setModalIsOpen(true)}>Edit</td>
    <UpdateModal product={product} editProducts={editProducts} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
  </>
}

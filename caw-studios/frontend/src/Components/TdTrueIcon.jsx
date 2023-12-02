import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

export default function TdTrueIcon({ editProducts, product }) {
  return (
    <td
      style={{
        color:
          product.status &&
          product.status != "Missing" &&
          product.status != "Missing-Urgent"
            ? `rgb(68,204,121)`
            : "grey",
        fontSize:
          product.status &&
          product.status != "Missing" &&
          product.status != "Missing-Urgent"
            ? `1.5rem`
            : "1rem",
      }}
      onClick={() => editProducts(product.id, "status", "Approved")}
    >
      <IoCheckmarkSharp />
    </td>
  );
}

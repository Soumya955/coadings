import React from "react";
import "./css/navApprove.css";

export default function NavApprove() {
  const id = "32457ABC";
  return (
    <div className="nav-approve">
<div className="nav-approve-parent">
      <div>Order {id}</div>
      <div>
        <button className="rounded-button1">
          Back
        </button>
        <button className="rounded-button2">Approve order</button>
      </div>
    </div>
    </div>
    
  );
}

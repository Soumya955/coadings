import React, { useEffect, useState } from "react";
import "./css/statusBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa";
import { IoIceCreamSharp } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";
import { RiCake2Line } from "react-icons/ri";
import { IoBeerOutline } from "react-icons/io5";
import { shallowEqual, useSelector } from "react-redux";

export default function StatusBar() {
  const [total, setTotal] = useState(0);
  const phone = "300-444-678";
  const { products, isLoading, isError } = useSelector((state) => {
    return {
      products: state.OrderDataReducer.data,
      isLoading: state.OrderDataReducer.isLoading,
      isError: state.OrderDataReducer.isError,
    };
  }, shallowEqual);

  useEffect(() => {
    // let total1 = products.reduce(
    //   (product, acc) => +product.quantity * +product.price + acc,
    //   0
    // );
    let total1=0;

    for(let i=0;i<products.length;i++){
     total1+=((+products[i].quantity )* (+products[i].price) )
    }
    console.log(total1);
    setTotal(total1.toFixed(2));
  }, [products]);

  return (
    <div>
      <div className="status-parent">
        <div>
          <div>Supplier</div>
          <div>EastCost</div>
          <div>fruits&vegetables</div>
        </div>
        <div>
          <div>Sipping date</div>
          <div>Thu,feb 10</div>
        </div>
        <div>
          <div>Total</div>
          <div>${total}</div>
        </div>
        <div>
          <div>Category</div>
          <div>
            <GiHamburgerMenu style={{ color: "grey" }} />
            <FaPizzaSlice style={{ marginLeft: "10px", color: "grey" }} />
            <IoIceCreamSharp style={{ marginLeft: "10px", color: "grey" }} />
            <MdFastfood style={{ marginLeft: "10px", color: "grey" }} />
          </div>
          <div>
            <RiCake2Line style={{ color: "grey" }} />
            <IoBeerOutline style={{ marginLeft: "10px", color: "grey" }} />
            <RiCake2Line style={{ marginLeft: "10px", color: "grey" }} />
            <IoBeerOutline style={{ marginLeft: "10px", color: "grey" }} />
          </div>
        </div>
        <div>
          <div>Department</div>
          <div>{phone}</div>
        </div>
        <div>
          <div>Status</div>
          <div>Awaiting your</div>
          <div>Approvel</div>
        </div>
      </div>
    </div>
  );
}

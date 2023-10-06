import React from "react";
import "../../style/header.css";
import { Button } from "../Button/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { saveAs } from "file-saver";
import SummarizeIcon from "@mui/icons-material/Summarize";

export const Header = () => {
  const cartItems = useSelector((store) => store.cartItems);
  const logs = useSelector((store) => store.logs);

  const exportLogsToCSV = () => {
    try {
      let csvContent = "";
      csvContent += "Name,Date,Time,Event,Price,Category\n";
      logs.forEach((log) => {
        csvContent += `${log.name},${log.datetime},${log.event}, $${log.price},${log.category}\n`;
      });

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
      saveAs(blob, "logs.csv");
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <div className="pageHeader">
      <div className="title">E-Commerce</div>
      <div className="flexBox gap8">
        <Button onClick={exportLogsToCSV}>
          <SummarizeIcon /> &nbsp; Share Logs
        </Button>
        <Button>
          <ShoppingCartOutlinedIcon fontSize="small" />
          <div className="">{cartItems.length}</div>
        </Button>
      </div>
    </div>
  );
};

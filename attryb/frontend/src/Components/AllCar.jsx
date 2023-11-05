import React, { useEffect, useState } from "react";
import AllCarNavbar from "./AllCarNavbar";
import { accessData } from "../utils/appLocalStorage";
import axios from "axios";
import "./css/AllYourCars.css";
import "./css/CarCard.css";
import "./css/AllCars.css";
import { Spinner } from "@chakra-ui/react";

export default function AllCar() {
  const [carData, setcarData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [color, setcolor] = useState("");
  const [mileage, setmileage] = useState("");
  const [price, setprice] = useState("");
  const [page, setpage] = useState(1);

  useEffect(() => {
    getData(color, price, mileage, page);
  }, [color, price, mileage, page]);

  const getData = (color, price, mileage, page) => {
    console.log(page);
    setisLoading(true);
    const user = accessData("user");
    axios
      .get(
        `https://mock-server-1.onrender.com/api/Car?color=${color}&price=${price}&mileage=${mileage}&page=${page}`
      )
      .then((res) => {
        console.log(res, "AllYourCars");
        setisLoading(false);
        setcarData(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <AllCarNavbar />
      <div>AllCar</div>
      <div className="color-select">
        <label>Select a Color:</label>
        <select
          value={color}
          onChange={(e) => setcolor(e.target.value)}
          id="color"
          name="color"
        >
          <option value="">Select</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="White">White</option>
          <option value="Green">Green</option>
          <option value="Yellow">Yellow</option>
          <option value="Black">Black</option>
          <option value="Silver">Silver</option>
        </select>
      </div>
      <div className="color-select">
        <label>Select a Price Range:</label>
        <select
          value={price}
          onChange={(e) => setprice(e.target.value)}
          id="price"
          name="price"
        >
          <option value="">$Price</option>
          <option value="0-20000">$20000 or Less</option>
          <option value="20000-25000">$20000 - $25000</option>
          <option value="25000-30000">$25000 - $30000</option>
          <option value="30000-35000">$30000 - $35000</option>
          <option value="35000-40000">$35000 - $40000</option>
          <option value="40000-50000">$40000 - $50000</option>
          <option value="50000-500000">$50000 or More</option>
        </select>
      </div>
      <div className="color-select">
        <label>Select Mileage Range:</label>
        <select
          value={mileage}
          onChange={(e) => setmileage(e.target.value)}
          id="mileage"
          name="mileage"
        >
          <option value="">miles</option>
          <option value="0-10">0-10 miles</option>
          <option value="10-20">10-20 miles</option>
          <option value="20-30">20-30 miles</option>
          <option value="30-40">30-40 miles</option>
          <option value="40-100">40+ miles</option>
        </select>
      </div>
      {isLoading && (
        <h3 style={{ textAlign: "center" }}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="md"
          />
          Loading slower because backend deployed on Cyclic
        </h3>
      )}
      <div className="car-list">
        {carData.map((car, index) => (
          <div key={car._id} className="car-card">
            <img src={car.image} alt={car.modelName} />
            <h3>{car.modelName}</h3>
            <p>Year: {car.year}</p>
            <p>List Price: ${car.listPrice.toLocaleString()}</p>
            <p>Available Colors: {car.colors}</p>
            <p>Mileage: {car.mileage} MPG</p>
            <p>Power: {car.power} BHP</p>
            <p>Max Speed: {car.maxSpeed} mph</p>
            <h4>Owner Information</h4>
            <p>Name: {car.owner.name}</p>
            <p>Email: {car.owner.email}</p>
            <p>Address: {car.owner.address}</p>
            <p>Phone: {car.owner.phone}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          disabled={page == 1}
          onClick={() => setpage((page) => page - 1)}
        >
          Prev
        </button>
        <span>{page}</span>
        <button disabled={carData.length<3} onClick={() => setpage((page) => page + 1)}>Next</button>
      </div>
    </>
  );
}

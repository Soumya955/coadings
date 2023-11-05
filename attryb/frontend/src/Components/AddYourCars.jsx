import React, { useState } from "react";
import DealersPageNavbar from "./DealersPageNavbar";
import "./css/AddYourCars.css";
import { accessData } from "../utils/appLocalStorage";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import { alertAddedCarSuccess } from "../alerts";

export default function AddYourCars() {
  const [isLoading, setisLoading] = useState(false);
  const [carData, setCarData] = useState({
    modelName: "",
    year: "",
    listPrice: "",
    colors: "",
    mileage: "",
    power: "",
    maxSpeed: "",
    image: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCarData({
      ...carData,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    if (
      carData.modelName &&
      carData.year &&
      carData.listPrice &&
      carData.colors &&
      carData.mileage &&
      carData.power &&
      carData.maxSpeed
    ) {
      let user = accessData("user");
      const payload = {
        ...carData,
        owner: {
          id: user._id,
          email: user.email,
          name: user.name,
          phone: user.phone,
          address: user.address,
        },
      };
      setisLoading(true);
      axios
        .post(`https://mock-server-1.onrender.com/api/Car`, payload)
        .then((res) => {
          alertAddedCarSuccess()
          setisLoading(false);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <DealersPageNavbar />
      {isLoading ? (
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
      ) : (
        <div>
          <h2>Car Information</h2>
          <div className="CarInputForm">
            <label>Model Name:</label>
            <input
              type="text"
              name="modelName"
              value={carData.modelName}
              onChange={handleInputChange}
              required
            />
            <label>Year of Model:</label>
            <input
              type="number"
              name="year"
              value={carData.year}
              onChange={handleInputChange}
              required
            />
            <label>List Price:</label>
            <input
              type="number"
              name="listPrice"
              value={carData.listPrice}
              onChange={handleInputChange}
              required
            />
            <label>Available Colors:</label>
            <input
              type="text"
              name="colors"
              value={carData.colors}
              onChange={handleInputChange}
              required
            />
            <label>Mileage (MPG):</label>
            <input
              type="number"
              name="mileage"
              value={carData.mileage}
              onChange={handleInputChange}
              required
            />
            <label>Power (BHP):</label>
            <input
              type="number"
              name="power"
              value={carData.power}
              onChange={handleInputChange}
              required
            />
            <label>Max Speed:</label>
            <input
              type="number"
              name="maxSpeed"
              value={carData.maxSpeed}
              onChange={handleInputChange}
              required
            />
            <label>Image:</label>
            <input
              type="text"
              name="image"
              value={carData.image}
              onChange={handleInputChange}
              required
            />
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
}

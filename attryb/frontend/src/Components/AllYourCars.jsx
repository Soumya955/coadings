import React, { useEffect, useState } from "react";
import { accessData } from "../utils/appLocalStorage";
import axios from "axios";
import "./css/AllYourCars.css";
import "./css/CarCard.css";
import { Spinner } from '@chakra-ui/react'

export default function AllYourCars() {
  const [carData, setcarData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [page, setpage] = useState(1);

  useEffect(() => {
    getData(page);
  }, [page]);

  const getData = (page) => {
    setisLoading(true);
    const user = accessData("user");
    axios
      .get(`https://mock-server-1.onrender.com/api/car/${user._id}?page=${page}`)
      .then((res) => {
        console.log(res, "AllYourCars");
        setisLoading(false);
        setcarData(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>AllYourCars</div>
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
          <div className="car-card">
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

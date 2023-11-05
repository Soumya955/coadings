import React, { useContext, useRef, useState } from "react";
import Modal from "react-modal";
import "./Css-for-Modals/UpdateModal.css";
import { alertupdateSuccess } from "../alerts";
import axios from "axios";

export default function UpdateModal({
  modaldata,
  getData,
  modalIsOpen,
  setModalIsOpen,
}) {
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

  const updateCar = () => {
    const updatedData = {
      modelName: carData.modelName || modaldata.modelName,
      year: carData.year || modaldata.year,
      listPrice: carData.listPrice || modaldata.listPrice,
      colors: carData.colors || modaldata.colors,
      mileage: carData.mileage || modaldata.mileage,
      power: carData.power || modaldata.power,
      maxSpeed: carData.maxSpeed || modaldata.maxSpeed,
      image: carData.image || modaldata.image,
    };
    axios
      .patch(`https://mock-server-1.onrender.com/api/Car/${modaldata._id}`, updatedData)
      .then((res) => {
        getData();
        alertupdateSuccess();
      })
      .catch((err) => {
        console.error("Error updating data:", err);
      });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCarData({
      ...carData,
      [name]: value,
    });
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        className="Modal-update"
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className='CarInputForm'>
        <h3>change only those fields which you wants to updata</h3>
          <label>Model Name:</label>
          <input
            type="text"
            name="modelName"
            value={carData.modelName||modaldata.modelName}
            onChange={handleInputChange}
            required
          />
          <label>Year of Model:</label>
          <input
            type="number"
            name="year"
            value={carData.year||modaldata.year}
            onChange={handleInputChange}
            required
          />
          <label>List Price:</label>
          <input
            type="number"
            name="listPrice"
            value={carData.listPrice||modaldata.listPrice}
            onChange={handleInputChange}
            required
          />
          <label>Available Colors:</label>
          <input
            type="text"
            name="colors"
            value={carData.colors||modaldata.colors}
            onChange={handleInputChange}
            required
          />
          <label>Mileage (MPG):</label>
          <input
            type="number"
            name="mileage"
            value={carData.mileage||modaldata.mileage}
            onChange={handleInputChange}
            required
          />
          <label>Power (BHP):</label>
          <input
            type="number"
            name="power"
            value={carData.power||modaldata.power}
            onChange={handleInputChange}
            required
          />
          <label>Max Speed:</label>
          <input
            type="number"
            name="maxSpeed"
            value={carData.maxSpeed||modaldata.maxSpeed}
            onChange={handleInputChange}
            required
          />
          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={carData.image||modaldata.image}
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          type="button"
          onClick={() => {
            updateCar();
            setModalIsOpen(false);
          }}
        >
          Update Car
        </button>
        <button className="cancel" onClick={() => setModalIsOpen(false)}>
          Cancel
        </button>
      </Modal>
    </>
  );
}

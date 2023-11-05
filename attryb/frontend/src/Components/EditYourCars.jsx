import React, { useEffect, useState } from 'react'
import { accessData } from '../utils/appLocalStorage'
import axios from 'axios'
import './css/CarCard.css'
import DealersPageNavbar from './DealersPageNavbar'
import { FaPencilAlt } from 'react-icons/fa';
import UpdateModal from '../Modals/UpdateModal'
import { Spinner } from '@chakra-ui/react'

export default function EditYourCars() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modaldata,setmodaldata]=useState({})
    const [carData,setcarData]=useState([])
    const [isLoading, setisLoading] = useState(false);

  useEffect(()=>{
    getData()
  },[])
  
  const getData=()=>{
    const user=accessData('user')
    setisLoading(true)
    axios.get(`https://mock-server-1.onrender.com/api/car/${user._id}`)
    .then(res=>{
      setcarData(res.data)
      setisLoading(false)
    })
    .catch(err=>console.log(err))
  }
  return (<>
  <DealersPageNavbar/>
   <div>EditYourCars by Clicking on pencil Icon</div>
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
            <FaPencilAlt onClick={()=>{setModalIsOpen(true);setmodaldata(car)}} style={{float:"right",margin:"0 1rem",color:'blue'}} className="pencil-icon" />
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
        <UpdateModal modaldata={modaldata} getData={getData} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      </div>
  </>
  )
}


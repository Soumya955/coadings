import React, { useEffect, useState } from 'react'
import { accessData } from '../utils/appLocalStorage'
import axios from 'axios'
import './css/CarCard.css'
import DealersPageNavbar from './DealersPageNavbar'
import { FaTrash } from 'react-icons/fa';
import DeleteUserModal from '../Modals/DeleteUserModal'
import { Spinner } from '@chakra-ui/react'

export default function DeleteYourCars() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modaldata,setmodaldata]=useState({})
    const [carData,setcarData]=useState([])
    const [isLoading, setisLoading] = useState(false);
    const [page, setpage] = useState(1);

    useEffect(() => {
      getData(page);
    }, [page]);
  
  const getData=()=>{
    const user=accessData('user')
    setisLoading(true)
    axios.get(`https://mock-server-1.onrender.com/api/car/${user._id}?page=${page}`)
    .then(res=>{
      setcarData(res.data)
      setisLoading(false)
    })
    .catch(err=>console.log(err))
  }
  return (<>
  <DealersPageNavbar/>
   <div>Delete Your Cars by clicking on delete Icon</div>
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
            <FaTrash onClick={()=>{setModalIsOpen(true);setmodaldata(car)}} style={{float:"right",margin:"0 1rem",color:"red"}} className="pencil-icon" />
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
        <DeleteUserModal modaldata={modaldata} getData={getData} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
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
  )
}

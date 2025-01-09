import React, { useEffect, useState } from 'react'
import {NavLink, useNavigate} from "react-router-dom"
import { Table } from 'react-bootstrap';
import axios from 'axios';
 
function Home() {
    let [cars, setCars] = useState([]);
   
    

    function getData(){
      axios.get("http://localhost:3001/cars")
      .then((res)=>{
        setCars(res.data)
      })
    }
    useEffect(()=>{
       getData()
       console.log(cars[0])
    },[])
    async  function handleDelete(_id){
      await axios.delete(`http://localhost:3001/cars/${_id}`)
      getData()
   }



  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Brand</th>
          <th>Model</th>
          <th>Year</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
                    
          cars.map((car, index) => (
          <tr key={car._id}>
          <td>{index + 1}</td>  
          <td>{car.name}</td> 
          <td>{car.model}</td>  
          <td>{car.year}</td>  
          <td>{car.price}</td>
          <td><button onClick={()=>handleDelete(car._id)}>Delete</button></td>
          <td>
            <NavLink to={`/detail/${car._id}`}><button>Detail</button></NavLink>
          </td>
          </tr>

          ))
                }
            </tbody>
    </Table>
  )
}

export default Home
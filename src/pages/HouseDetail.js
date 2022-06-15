import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardItem from '../components/CardItem';
import Table from '../components/Table';
import axios from 'axios';

function HouseDetail() {
  const { houseId } = useParams();
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get('/db.json')
    .then(x => setData(x.data))
    .catch(error => {
      alert(error);
    });
  }, []);
  let image = data.houses?.[houseId]["image"];
  let address = data.houses?.[houseId]["address"];
  let price = data.houses?.[houseId]["price"];
  return (
    <div className='cards'>
      <h1 style={{color: "black"}}>Here is what you chose!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
        <CardItem
          style={{height: "50px", width:"10px"}}
          src={image}
          text={address}
          label={price}
          path=''
        />
        </ul>
        <Table
        houseId={houseId}
        />
        </div>
      </div>
    </div>
  )
}

export default HouseDetail
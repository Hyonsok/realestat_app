import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardItem from '../components/CardItem';
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
  // console.log(data.houses?.[houseId]["image"])
  let image = data.houses?.[houseId]["image"];
  let inst = data.houses?.[houseId]["instruction"];
  let price = data.houses?.[houseId]["price"];
  return (
    <div className='cards'>
      <h1 style={{color: "black"}}>Here is what you chose!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
        <CardItem
          src={image}
          text={inst}
          label={price}
          path=''
        />
        </ul>
        <p>Lorem Ipsum has been the industry</p>
        </div>
      </div>
    </div>
  )
}

export default HouseDetail
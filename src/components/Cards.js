import React, { useState, useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from 'axios';
function Cards() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get('db.json')
    .then(x => setData(x.data))
    .catch(error => {
      alert(error);
    });
  }, []);

  // array of N elements, where N is the number of rows needed
  const rows = [...Array(Math.ceil(8 / 4))]; // data length should be dynamic
  // chunk the products into the array of rows
  const houseRows = rows.map((row, idx) => data&&data.houses&&data.houses?.slice(idx * 4, idx * 4 + 4) );
  const content = houseRows&&houseRows?.map((row, idx) => (
    <ul key={idx} className='cards__items'>  
        { row?.map(house => 
        <CardItem
        key={house.id}
        src={house.image}
        text={house.instruction}
        label={house.price}
        path={`/house-details/${house.id}`}
        />
         )}
      </ul> )
  );

  return (
    <div className='cards'>
      <h1 style={{color: "black"}}>Check out these EPIC Houses!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
              {content}
        </div>
      </div>
    </div>
  );
}

export default Cards;
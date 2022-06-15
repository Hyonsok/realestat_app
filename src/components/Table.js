import React,{ useState, useEffect } from 'react'
import './Table.css'
import axios from 'axios';
function Table(props) {
  let houseId = props.houseId;
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get('/db.json')
    .then(x => setData(x.data))
    .catch(error => {
      alert(error);
    });
  }, []);
  let features = data.houses?.[houseId]["features"];
  let grossTax = data.houses?.[houseId]["gross_tax"];
  let bedrooms = data.houses?.[houseId]["bedrooms"];
  let bathrooms = data.houses?.[houseId]["bathrooms"];
  let yearBuilt = data.houses?.[houseId]["year_built"];
  let size = data.houses?.[houseId]["size"];
    return (
        <div className="Table">
          <table>
            <tr>
              <th>Price Detail</th>
                <td>{grossTax}</td>
            </tr>
            <tr>
              <th>Home Facts</th>
              <td>BR:{bedrooms}<br></br>
              BA: {bathrooms}<br></br>
              Year:{yearBuilt}<br></br>
              Size: {size}</td><br></br>
            </tr>
            <tr>
              <th>Features</th>
              <td>{features}</td>
            </tr>
          </table>
        </div>
      );
}

export default Table
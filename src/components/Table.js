import React from 'react'
import './Table.css'
function Table(props) {
    const data = [
        { name: "Anom", age: 19, gender: "Male" },
        { name: "Megha", age: 19, gender: "Female" },
        { name: "Subham", age: 25, gender: "Male"},
      ]
    return (
        <div className="Table">
          <table>
            <tr>
              <th>Price Detail</th>
              <th>Home Facts</th>
              <th>Gender</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                  <td>{val.gender}</td>
                </tr>
              )
            })}
          </table>
        </div>
      );
}

export default Table
import Data from "./data";
import React from "react";
import "./card.css";

function tableMap() {
  let arr = Data;
  console.log("arr", arr)
  return (
    <>
    <h1>Products</h1>
   <table border="1">
    <thead>
        <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>No of reviews</th>
            <th>Previous Price</th>
            <th>New Price</th>
        </tr>
    </thead>
    <tbody>
    {arr.map((item) => (
        <tr key={item.id}>
          <td>
            <img src={item.img} alt="avtar" className="circleImg"/>
          </td>
          <td>{item.title}</td>
          <td>{item.reviews}</td>
          <td>{item.prevPrice}</td>
          <td>{item.newPrice}</td>
        </tr>
    ))}
    </tbody>
  
   </table>
    </>
  );
}

export default tableMap;
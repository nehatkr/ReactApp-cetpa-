import Data from "./data";
import React from "react";
import "./card.css";

export default function CardMap() {
  let arr = Data;
  return (
    <>
    <h1>Products</h1>
    <div className="cardContainer">
      {arr.map((item) => (
        <div className="card">
          <img src={item.img} alt="Avatar" />
          <div className="container">
            <b>{item.title}</b>
             {item.reviews}
            <p>
                {" "}Price-
               <span className="lineThrough">{item.prevPrice}</span> {"  "}
               ${item.newPrice}
                </p>
          
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

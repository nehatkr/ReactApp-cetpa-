import React, { useEffect, useState } from "react";
import axios from "axios";
import "./card.css"


export default function AxiosDemo2(){
    const [apiData, setApiData] = useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products/").then((response)=>{
            console.log("response",response.data);
            setApiData(response.data);
        });
    },[]);

    return (<div >
        This is AxiosDemo2 Component

        <br/>
        {apiData.length > 0 ?(
        <table border="1">
    <thead>
        <tr>
            <th>Sr No.</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>image</th>
            <th>rating</th>
        </tr>
    </thead>
    <tbody>
    {apiData.map((item) => (
        <tr key={item.id}>
          
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td>{item.description}</td>
          <td>{item.category}</td>
          <td>
            <img src={item.image} alt="avtar" className="circleImg"/>
          </td>
          <td>{item.rating.rate}</td>
        </tr>
    ))}
    </tbody>
  
   </table>
    ) :(
        <div className="loaderContainer">
        <div className="loader">"No api data"</div>
        </div>
    )}
    </div>
    );
}
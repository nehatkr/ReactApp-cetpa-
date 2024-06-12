import React from "react";
import { useState } from "react";

function FunctionalComp(props) {
  const[data,setData] = useState(10);
  return( <div> 
    This is functional Component 
    <br />
    The props is - {props.city} {props.country}
    <br />
    <button onClick={()=> {
      data === 10?setData("Ram"):setData(10)
    }}>
      Change Data
      </button>
    The states are - {data}
  </div>
  );
}
export default FunctionalComp;

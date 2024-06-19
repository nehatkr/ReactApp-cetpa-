import React   from "react";

export default function MapDemo(){
    // array of object
    let cars = [
        {
            color:"purple",
            type:"minivan",
            registration : new Date("2017-01-03"),
            capacity:7,
        },
        {
            color:"red",
            type:"station wagon",
            registration : new Date("2018-03-03"),
            capacity:5,
        },
    ]

    // const arr = [2,1,5,3,8];
    return(
        <div>
            This is MapDemo
            <br />
                <ol>
            {cars.map((item,index) =>(
                    <li key={index}>
                    <p>{item.color}{" "}
                         {item.type} registrated on{" "}
                          {item.registration.toDateString()} {" "}
                          has capacity of {item.capacity}{" "}people</p> 
                    </li>
            ))}
                </ol>
               
                 
        </div>
    );
}
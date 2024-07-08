import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosDemo(){
    const [apiData, setApiData] = useState([])
    useEffect(()=>{
        axios.get("https://reqres.in/api/users?page=2").then((Response)=>{
            console.log("response",Response.data.data);
            setApiData(Response.data.data);
        });
    },[]);

    return <div>
        This is AxiosDemo Component

        <br/>
        {apiData.length > 0 ? apiData.map((item,index)=>(
            <p key={item.id}>
                {index+1} . {item.first_name} {item.last_name} has email id - {" "}
                {item.email}
            </p>
        ))
     : "No api data"}
    </div>
}
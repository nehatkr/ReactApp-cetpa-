import React from "react";
import { useState } from "react";

export default function ConditionalDemo(){
    const[show , setShow] = useState(false);
return <div>
    This is functional Condition Componenet 
    <br />
    <button onClick={()=>{setShow(!show)}}>
    {show === true? "closed":"open"}
    </button>
{show === true? "Hotel Open":"Hotel Closed"}
</div>
}
import React from "react";
import { useState } from "react";

function Room2() {
    const[std,setStd] = useState(8);
    return<div>
        Go to room two
        <br />
        <button onClick={()=> 
     setStd(12)
    }>Change value
    </button>
    The value are- {std}
    </div>
}

export default Room2;
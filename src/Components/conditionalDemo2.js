import React , {useState}  from "react";

export default function ConditionalDemo(){
    const [show , setShow] = useState(false);
    return(
        <div>
            <h3>
                Employee from
                <br /> <br />  <br />
                <button onClick={()=> setShow(true)}>Submit</button>
                <button onClick={()=> setShow(false)}>Reset</button>
                <br />  <br />
                {show === true? "The Form has Submitted":"Kindly submit the Form"}
            </h3>
        </div>
    )
}
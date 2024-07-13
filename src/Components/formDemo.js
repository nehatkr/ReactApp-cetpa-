import React,{useState} from "react";
// import {formik,Form,Field,ErrorMessage} from "formik"; 

// CONTROLLED COMPONENT
export default function FormDemo(){
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const onSubmitClick =(e) => {
        //stop page refresh
        e.preventDefault();
        console.log("user and pass",user,pass);
    };
    return (
    <>
    <h2>HTML Forms</h2>
    <form onSubmit={(e) => onSubmitClick(e)}>
        <label htmlFor="userName" > Username:
        </label>
        <br/>
        <input
        type="text"
        id="username"
        name="username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        />
        <br/>
        <br/>
        <label htmlFor="password">Password:</label>
        <br/>
        <input
        type="password"
        id="password"
        name="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        />
        <br/>
        <br/>
        <input type="submit" value="submit" />
    </form>
    </>
    );
}
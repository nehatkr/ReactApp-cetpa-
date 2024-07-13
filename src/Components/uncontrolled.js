import React,{useRef} from "react";
// import {formik,Form,Field,ErrorMessage} from "formik"; 

// UNCONTROLLED COMPONENT
export default function Uncontrolled(){
    // const [user, setUser] = useState("");
    // const [pass, setPass] = useState("");

    const userRef = useRef(null);
    const passwordRef = useRef(null);

    const onSubmitClick =(e) => {
        //stop page refresh
        e.preventDefault();
        console.log("user and pass",userRef.current.value,passwordRef.current.value);
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
        ref={userRef}
        // value={user}
        // onChange={(e) => setUser(e.target.value)}
        />
        <br/>
        <br/>
        <label htmlFor="password">Password:</label>
        <br/>
        <input
        type="password"
        id="password"
        name="password"
        ref={passwordRef}
        // value={pass}
        // onChange={(e) => setPass(e.target.value)}
        />
        <br/>
        <br/>
        <input type="submit" value="submit" />
    </form>
    </>
    );
}
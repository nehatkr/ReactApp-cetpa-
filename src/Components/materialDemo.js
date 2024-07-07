import React, {useState} from "react";
import { TextField, Button } from "@mui/material";
import "./card.css";

export default function MaterialDemo() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
 
    const handleSubmit = (event) => {
        event.preventDefault();
 
        setEmailError(false);
        setPasswordError(false);
 
        if (email === '') {
            setEmailError(true);
        }
        if (password === '') {
            setPasswordError(true);
        }
 
        if (email && password) {
            console.log(email, password);
        }
    };
     
    return ( 
      
        <div className="container">
        <form autoComplete="off" onSubmit={handleSubmit}>
            <h2>Login Form</h2>
                <TextField 
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="filled"
                    color="secondary"
                    type="email"
                    sx={{mb: 3}}
                    fullWidth
                    value={email}
                    error={emailError}
                 />
                 <TextField 
                    label="Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                    variant="filled"
                    color="secondary"
                    type="password"
                    value={password}
                    error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <Button variant="outlined" color="secondary" type="submit">Login</Button>
             
        </form>
        
        </div>
     );
}
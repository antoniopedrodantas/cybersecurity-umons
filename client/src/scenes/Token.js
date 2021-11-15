// Dependencies
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaServer } from 'react-icons/fa';

function Token() {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // requests server for login
    axios
      .post("http://localhost:8000/login", { username, password })
      .then((res) => {
        // sets token on local storage
        localStorage.setItem("auth-token", res.data.token);
        history("/user-feed");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <FaServer style={{padding:5, height:50, width:50}}/>
        <p>
          Welcome to Token Based Sessions, please input your username and
          password.
        </p>
        <label>
          <input  placeholder = "username" type="text" onChange={(e) => setUsername(e.target.value)} 
            style={{ padding: 12  , marginTop:5,borderRadius:5}}/>
        </label>
        <br/>
        <label >
          <input
            type="password" placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: 12  , marginTop:15, borderRadius:5}}
          />
        </label>
        <br/>
        <button  style={{ padding: 12  , marginTop:15, borderRadius:10}} onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Token;

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
        <FaServer style={{ padding: 5, height: 50, width: 50 }} />
        <p>
          Welcome to Token Based Sessions, please input your username and
          password.
        </p>
        <label >
          <input class="login-form" placeholder="username" type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label >
          <input class="login-form" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button class="login-form-button" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Token;

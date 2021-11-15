// Dependencies
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { FaCookieBite } from 'react-icons/fa';

function Cookie() {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const cookies = new Cookies();

  const handleSubmit = () => {
    // requests server for login
    axios
      .post("http://localhost:8000/login", { username, password })
      .then((res) => {
        // sets token on a cookie
        // cookie.setItem("auth-cookie", res.data.token);
        cookies.set(res.data.token);
        history("/user-feed")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <FaCookieBite style={{ padding: 5, height: 50, width: 50 }} />
        <p>
          Welcome to Cookie Based Sessions, please input your username and
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
        <button class="page-button" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Cookie;

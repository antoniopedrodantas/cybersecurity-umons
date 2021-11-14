// Dependencies
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

        history("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <p>
          Welcome to Cookie Based Sessions, please input your username and
          password.
        </p>
        <label>
          username:
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          password:
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Token;

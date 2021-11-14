// Dependencies
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <h1>Hello!</h1>
      </div>
      <div>
        <p>
          Welcome to the session tester, please choose the session method you
          want to try out.
        </p>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/cookie-login">Cookie Based Session</Link>
          </li>
          <li>
            <Link to="/token-login">Token Based Session</Link>
          </li>
        </ul>
      </div>
      <a href="http://localhost:8080/malicious-url">link</a>
    </>
  );
}

export default Home;

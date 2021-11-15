// Dependencies
import React from "react";
import { Link } from "react-router-dom";
import { FaCookieBite, FaServer } from 'react-icons/fa';

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
      <div >
        <ul style={{ listStyle: "none" }}>
          <li>
            <Link className="homepage-link" to="/cookie-login">
              <FaCookieBite style={{ marginLeft: -30, marginRight: 20 }} />
              Cookie Based Session
            </Link>
          </li>
          <br />
          <li>
            <Link className="homepage-link" to="/token-login">
              <FaServer style={{ marginLeft:-40, marginRight: 20 }} />
              Token Based Session
            </Link>
          </li>
        </ul>
      </div>

    </>
  );
}

export default Home;

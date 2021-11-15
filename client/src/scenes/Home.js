// Dependencies
import React from "react";
import { Link } from "react-router-dom";
import { FaCookieBite, FaServer } from 'react-icons/fa';
import { MdOutlineWarning } from "react-icons/md";


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
        <ul style={{listStyle:"none"}}>
          <li>
            <Link to="/cookie-login" style={{textDecoration: 'none', color: 'grey'}}>
              <FaCookieBite style={{marginLeft:10, marginRight:20}}/>
              Cookie Based Session
            </Link>
          </li>
          <br/>
          <li>
            <Link to="/token-login" style={{textDecoration: 'none',  color: 'grey'}}> 
              <FaServer style={{marginRight:20}}/> 
              Token Based Session
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;

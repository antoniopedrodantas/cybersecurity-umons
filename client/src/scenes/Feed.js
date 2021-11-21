import React, { useEffect } from "react";
import { MdOutlineWarning } from "react-icons/md";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
function Feed() {
  const cookies = new Cookies();
  const history = useNavigate();
  const session =
    "12bqi7t3iwhjdblwkEeclkjlsAS13fm.aijsdhuAdmkf345.jksjnfkjUYGKYURJgkc";

  // checks for session
  useEffect(() => {
    // gets auth-token from the local storage
    const token = localStorage.getItem("auth-token");
    // gets token from cookie
    const cookie = new Cookies();

    if (token !== session && cookie.get("auth-cookie") !== session) {
      console.log("hey");
      history("/");
    }
  }, []);

  const clearCookies = () => {
    cookies.remove("auth-cookie");
    localStorage.clear();
    window.location.href = "/";
    return false;
  };
  return (
    <>
      <div>
        <h1>Welcome to the user feed!</h1>
      </div>

      <div className="feed-card">
        <div className="container">
          <h4>
            <b>Maria</b>
          </h4>
          <h6>13:18 14/11/2021</h6>
          <p>
            Yesterday was an amazing day. I went to the beach and was able to
            surf with my friends
          </p>
        </div>
      </div>
      <div className="feed-card">
        <div className="container">
          <h4>
            <b>Alberto</b>
          </h4>
          <h6>10:30 14/11/2021</h6>
          <p>I'm very tired today...</p>
        </div>
      </div>
      <div className="feed-card">
        <div className="container">
          <h4>
            <b>Cristina</b>
          </h4>
          <h6>07:47 14/11/2021</h6>
          <p>Hey guys, checkout this new app that I found!! </p>
          <a
            style={{ textDecoration: "none", color: "orange" }}
            href="http://localhost:8080/malicious-url"
          >
            <MdOutlineWarning style={{ marginRight: 20 }} />
            Link to the new app.
          </a>
        </div>
      </div>
      <div className="logout-div">
        <button className="page-button" onClick={clearCookies}>
          Logout
        </button>
      </div>
    </>
  );
}

export default Feed;

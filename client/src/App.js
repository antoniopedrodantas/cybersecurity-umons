import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./scenes/Home";
import Cookie from "./scenes/Cookie";
import Token from "./scenes/Token";
import Feed from "./scenes/Feed";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/cookie-login" element={<Cookie />}></Route>
            <Route exact path="/token-login" element={<Token />}></Route>
            <Route exact path="/user-feed" element={<Feed />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;

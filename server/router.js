"use strict";

import express from "express";

let router = express.Router();

router.post("/login", login);

function login(request, response) {
    // gets request parameters
    const { username, password } = request.body;
  
    // username undefined
    if (username == undefined) {
      console.log("Response Status: 401");
      return response.status(401).send("Invalid username or password");
    }
  
    // fails to provide correct password
    if (password != "pass123") {
      console.log("Response Status: 401");
      return response.status(401).send("Invalid username or password");
    }
  
    // password is correct
    console.log("Response Status: 200");
    return response
      .status(200)
      .json({
        token: "12bqi7t3iwhjdblwkEeclkjlsAS13fm.aijsdhuAdmkf345.jksjnfkjUYGKYURJgkc"
      })
      .send();
  }

export default router;

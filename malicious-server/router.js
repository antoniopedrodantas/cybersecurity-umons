"use strict";

import express from "express";

let router = express.Router();

router.get("/malicious-url", hack);

function hack(request, response) {
  const cookies = request.cookies;
  if(Object.keys(cookies).length != 0){
    console.log(cookies);
    return response.status(200).send(`I got your cookies (หฺกห)โ๐ช`);
  } else {
    return response.status(200).send(`I couldn't get your session data :( `);
  }
}

export default router;

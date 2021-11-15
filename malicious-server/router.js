"use strict";

import express from "express";

let router = express.Router();

router.get("/malicious-url", hack);

function hack(request, response) {
  const cookies = request.cookies;
  console.log(cookies);
  return response.status(200).send(`I got your cookies (ˆڡˆ)◞🍪`);
}

export default router;

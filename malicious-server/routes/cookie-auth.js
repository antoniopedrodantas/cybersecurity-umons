import express from "express";

const router = express.Router();

router.post("/cookie-login", login);

function login(request, response) {
  // gets request parameters
  const { username, password } = request.body;

  // username undefined
  if (username == undefined) {
    return response.status(401).send("Invalid username or password");
  }

  // fails to provide correct password
  if (password != "pass123") {
    return response.status(401).send("Invalid username or password");
  }

  // password is correct
  return response
    .status(200)
    .json({
      username,
      password,
    })
    .send();
}

export default router;

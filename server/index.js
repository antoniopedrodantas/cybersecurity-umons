import express from "express";
const app = express();
const port = 8000;
import cors from "cors";

import router from "./router.js";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(port, () => {
  console.log("I'm the app's server 🖥️");
  console.log(`Listening @ http://localhost:${port}`);
});

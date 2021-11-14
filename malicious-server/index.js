import express from "express";
const app = express();
const port = 8080;
import cookieParser from "cookie-parser";
import cors from "cors";

import router from "./router.js";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/", router);

app.listen(port, () => {
  console.log(`Listening @ http://localhost:${port}`);
});

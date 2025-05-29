import express from "express";
import { connectDB } from "./database/connection.js";
import cors from "cors";
import router from "./routes/user.routes.js";
import cookieParser from "cookie-parser";

const server = express();
const PORT = 8080;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());
server.use(cookieParser());

server.use("/", router);

server.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on PORT : ${PORT}`);
});

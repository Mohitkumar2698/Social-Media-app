import express from "express";
import { connectDB } from "./database/connection.js";
import cors from "cors";
import router from "./routes/user.routes.js";

const server = express();
const PORT = 8080;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());
server.use(express.static("public"));

server.use("/", router);

server.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on PORT : ${PORT}`);
});

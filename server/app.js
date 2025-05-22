import express from "express";
import { connectDB } from "./database/connection.js";
import cors from "cors";

// Controllers
import { getUser } from "./controllers/getUser.controller.js";
import { postUser } from "./controllers/postUser.controller.js";
import { updateUser } from "./controllers/updateUser.controller.js";
import { deleteUser } from "./controllers/deleteUser.controller.js";
import { User } from "./models/userModel.js";

const server = express();
const PORT = 8080;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

server.delete("/", async (req, res) => {
  const response = await deleteUser(req);
  if (!response) res.status(400).json({ message: "User not found!", response });
  res.status(200).json({ message: "User deleted successfully", response });
});

server.put("/", async (req, res) => {
  const response = await updateUser(req);
  if (!response) res.status(400).json({ message: "User not found!", response });
  res.status(200).json({ message: "User updated successfully", response });
});

server.post("/", async (req, res) => {
  const response = await postUser(req);
  if (!response) res.status(400).json({ message: "User not added", response });
  res.status(200).json({ message: "User added successfully", response });
});

server.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) res.status(400).json({ message: "User not found!" });
  res.status(200).json({ user });
});

server.get("/", async (req, res) => {
  const response = await getUser();
  res.status(200).json({ message: "fetching Users..", response });
});

server.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on PORT : ${PORT}`);
});

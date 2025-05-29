import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  const { password } = req.body;
  const encPass = await bcrypt.hash(password, 10);
  //   console.log(encPass)
  const userAdded = await User.create({ ...req.body, password: encPass });
  //   console.log(userAdded);
  if (!userAdded) {
    res.status(400).json({
      success: false,
      message: "Invalid Input",
    });
  }
  res.status(200).json({
    success: true,
    message: "user registered",
    userAdded,
  });
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  const haveUser = await User.findOne({ username });
  if (!haveUser) {
    res.status(400).json({
      success: false,
      message: "username or password is incorrect",
    });
  }

  const mathedPass = await bcrypt.compare(password, haveUser.password);
  if (!mathedPass) {
    res.status(400).json({
      success: false,
      message: "username or password is incorrect",
    });
  }

  const token = jwt.sign({ username }, "secretKey", { expiresIn: "1d" });
  //   console.log(token);
  res.cookie("token", token);
  res.status(200).json({
    success: true,
    message: "user loggedIn",
  });
};

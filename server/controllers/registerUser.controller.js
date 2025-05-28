import path from "path";
import { fileURLToPath } from "url";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HOME_PATH = path.join(__dirname, "../", "views", "home.ejs");

export const registerUser = async (req, res) => {
  const { password } = req.body;
  const token = jwt.sign({ password }, "secretKey", { expiresIn: "1d" });
  res.cookie("token", token, {
    httpOnly: true,
  });
  const encryptPass = await bcrypt.hash(password, 10);
  const userRegistered = await User.create({
    ...req.body,
    password: encryptPass,
  });

  if (!userRegistered) {
    res.send("user not register!");
  }
  res.render(HOME_PATH, { bgImage: "./bg-image.png" });
};

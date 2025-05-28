import path from "path";
import { fileURLToPath } from "url";
import { User } from "../models/userModel.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HOME_PATH = path.join(__dirname, "../", "views", "home.ejs");

export const loginPage = (req, res) => {
  res.render(HOME_PATH, { bgImage: "./bg-image.png" });
};

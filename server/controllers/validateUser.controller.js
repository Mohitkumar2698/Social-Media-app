import path from "path";
import { fileURLToPath } from "url";
import jwt from "jsonwebtoken";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HOME_PATH = path.join(__dirname, "../", "views", "home.ejs");

export const validateUser = async (req, res) => {
  console.log("runnning");
  console.log(req.cookie);

  if (!authenticated) {
    res.send("user not register!");
  }
  res.render(HOME_PATH, { bgImage: "./bg-image.png" });
};

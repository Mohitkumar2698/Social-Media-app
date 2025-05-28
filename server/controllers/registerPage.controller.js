import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REGISTER_PATH = path.join(__dirname, "../", "views", "register.ejs");

export const registerPage = (req, res) => {
  res.render(REGISTER_PATH, { bgImage: "./bg-image.png" });
};
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HOME_PATH = path.join(__dirname, "../", "views", "home.ejs");

export const homePage = (req, res) => {
  res.render(HOME_PATH, { bgImage: "./bg-image.png" });
};

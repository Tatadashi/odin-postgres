import express from "express";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";
import { Router } from "express";
import {
  createUsernameGet,
  createUsernamePost,
  getUsernameSearch,
  deleteUsernamesGet,
} from "./controller.ts";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const home = Router();
home.get("/", getUsernameSearch);
home.get("/new", createUsernameGet);
home.post("/new", createUsernamePost);
home.get("/delete", deleteUsernamesGet);

app.use("/", home);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`now listening on ${PORT}`);
});

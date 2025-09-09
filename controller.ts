import { getAllUsername, insertUsername } from "./db/queries.ts";
import type { Request, Response } from "express";

export async function getUsername(req: Request, res: Response) {
  const usernames = await getAllUsername();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

export async function createUsernameGet(req: Request, res: Response) {
  console.log("hi");
  res.render("home");
}

export async function createUsernamePost(req: Request, res: Response) {
  const { username } = req.body;
  await insertUsername(username);
  res.redirect("/");
}

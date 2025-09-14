import {
  getAllUsername,
  insertUsername,
  searchUsernameContain,
  deleteUsernames,
} from "./db/queries.ts";
import type { Request, Response } from "express";

export async function getUsername(req: Request, res: Response) {
  const usernames = await getAllUsername();
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

export async function getUsernameSearch(req: Request, res: Response) {
  let searchQuery = req.query.search;
  if (searchQuery) {
    let queryStr = String(searchQuery);
    const searchedNames = await searchUsernameContain(queryStr);
    res.send(
      "Usernames: " + searchedNames.map((user) => user.username).join(", ")
    );
  } else {
    getUsername(req, res);
  }
}

export async function createUsernameGet(req: Request, res: Response) {
  res.render("home");
}

export async function createUsernamePost(req: Request, res: Response) {
  const { username } = req.body;
  await insertUsername(username);
  res.redirect("/");
}

export async function deleteUsernamesGet(req: Request, res: Response) {
  await deleteUsernames();
  res.redirect("/");
}

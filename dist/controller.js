import { getAllUsername, insertUsername } from "./db/queries.js";
export async function getUsername(req, res) {
    const usernames = await getAllUsername();
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}
export async function createUsernameGet(req, res) {
    console.log("hi");
    res.render("home");
}
export async function createUsernamePost(req, res) {
    const { username } = req.body;
    await insertUsername(username);
    res.redirect("/");
}

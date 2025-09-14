import { getAllUsername, insertUsername, searchUsernameContain, deleteUsernames, } from "./db/queries.js";
export async function getUsername(req, res) {
    const usernames = await getAllUsername();
    res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}
export async function getUsernameSearch(req, res) {
    let searchQuery = req.query.search;
    if (searchQuery) {
        let queryStr = String(searchQuery);
        const searchedNames = await searchUsernameContain(queryStr);
        res.send("Usernames: " + searchedNames.map((user) => user.username).join(", "));
    }
    else {
        getUsername(req, res);
    }
}
export async function createUsernameGet(req, res) {
    res.render("home");
}
export async function createUsernamePost(req, res) {
    const { username } = req.body;
    await insertUsername(username);
    res.redirect("/");
}
export async function deleteUsernamesGet(req, res) {
    await deleteUsernames();
    res.redirect("/");
}

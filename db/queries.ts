import { pool } from "./pool.ts";

export async function getAllUsername() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

export async function insertUsername(username: string) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

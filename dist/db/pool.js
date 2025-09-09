import dotenv from "dotenv";
import pg from "pg";
dotenv.config();
const { Pool } = pg;
export const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
});
// export const pool = new Pool({
//   connectionString:
//     "postgresql://<user>:<password>@<host>:<port>/<database>",
// });

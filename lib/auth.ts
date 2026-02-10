import { betterAuth } from "better-auth";
import { oneTap } from "better-auth/plugins";
import Database from "better-sqlite3";

const db = new Database("./sqlite.db");
db.pragma("journal_mode = WAL");

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  database: db,
  plugins: [oneTap()],
});

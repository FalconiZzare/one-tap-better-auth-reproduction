import { betterAuth } from "better-auth";
import { oneTap } from "better-auth/plugins";
import Database from "better-sqlite3";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  database: new Database("./sqlite.db"),
  plugins: [oneTap()],
});

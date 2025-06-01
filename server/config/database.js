import { Pool } from "pg";
import { config } from "./env.js";

const pool = new Pool({
  user: config.db.user,
  password: config.db.password,
  database: config.db.name,
  host: config.db.host,
  port: config.db.port,
});

export default pool;

import express from "express";
import { config } from "./config/env.js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const PORT = config.server.port;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "..", "client")));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port: http://127.0.0.1:${PORT}`);
});

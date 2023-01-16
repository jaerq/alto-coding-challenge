import * as dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

app.use(express.json());

const PORT: number = 3031;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
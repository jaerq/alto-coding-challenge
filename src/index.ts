import * as dotenv from "dotenv";
import express from "express";
import { tripRouter } from "./trip/trip.controller";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/v1/trips", tripRouter);

const PORT: number = 3031;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
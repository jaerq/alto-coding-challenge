import * as dotenv from "dotenv";
import express from "express";
import { tripRouter } from "./trip/trip.controller";
import { vehicleVibeRouter } from "./vehicle-vibe/vehicle-vibe.controller";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/v1/trips", tripRouter);
app.use("/v1/vibes", vehicleVibeRouter);

const PORT: number = 3031;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
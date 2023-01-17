import express, { Request, Response } from 'express';
import { VehicleVibe } from './vehicle-vibe.interface';
import * as VehicleVibeService from './vehicle-vibe.service';

export const vehicleVibeRouter = express.Router();

/**
 * GET v1/vibes
 */
vehicleVibeRouter.get("/", async (req: Request, res: Response) => {
  try {
    const vibes: VehicleVibe[] = await VehicleVibeService.findAll();

    return res.status(200).send(vibes);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send("Something went wrong");
    }
  }
});

import express, { Request, Response } from 'express';
import * as TripService from './trip.service';
import { Trip } from './trip.interface';

export const tripRouter = express.Router();

/**
 * GET v1/trips/:id
 */
tripRouter.get("/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    const trip: Trip = await TripService.findOne(id);

    if (trip) {
      return res.status(200).send(trip);
    }

    return res.status(404).send("Trip not found");
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send("Something went wrong");
    }
  }
});

/**
 * PATCH v1/trips/:id
 */
tripRouter.patch("/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    const tripChanges = req.body;
    const trip: Trip = await TripService.findOne(id);

    if (trip) {
      const updatedTrip: Trip = await TripService.update(id, tripChanges);

      return res.status(200).send(updatedTrip);
    }

    return res.status(404).send("Trip not found");
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send("Something went wrong");
    }
  }
});

/**
 * GET v1/trips/:id/estimates
 */
tripRouter.get("/:id/estimates", async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    const trip: Trip = await TripService.findOne(id);

    if (trip) {
      const travelLength = await TripService.estimateTravelLength(trip.start_location, trip.end_location);
      const fareRange = await TripService.estimateFare(travelLength.distance);

      return res.status(200).send({
        distance: travelLength.distance,
        duration: travelLength.duration,
        fare: fareRange
      })
    }

    return res.status(404).send("Trip not found");
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send("Something went wrong");
    }
  }
});
import express, { Request, Response } from 'express';
import * as EstimateService from './estimate.service';
import { CoordinateLocation } from './estimate.interface';

export const estimatesRouter = express.Router();

/**
 * GET /estimates/duration
 */
estimatesRouter.get("/duration", async (req: Request, res: Response) => {
  const startLocation: CoordinateLocation = {
    longitude: parseFloat(req.query.start_longitude as string),
    latitude: parseFloat(req.query.start_latitude as string)
  };

  const endLocation: CoordinateLocation = {
    longitude: parseFloat(req.query.end_longitude as string),
    latitude: parseFloat(req.query.end_latitude as string)
  };

  try {
    const travelLength = await EstimateService.estimateTravelLength(startLocation, endLocation);

    return res.status(200).send({
      duration: travelLength.duration,
    });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send("Something went wrong");
    }
  }
});

/**
 * GET /estimates/fare
 */
estimatesRouter.get("/fare", async (req: Request, res: Response) => {
  const startLocation: CoordinateLocation = {
    longitude: parseFloat(req.query.start_longitude as string),
    latitude: parseFloat(req.query.start_latitude as string)
  };

  const endLocation: CoordinateLocation = {
    longitude: parseFloat(req.query.end_longitude as string),
    latitude: parseFloat(req.query.end_latitude as string)
  };

  try {
    const travelLength = await EstimateService.estimateTravelLength(startLocation, endLocation);

    const fare = await EstimateService.estimateFare(travelLength.distance);

    return res.status(200).send({
      fare
    });
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send("Something went wrong");
    }
  }
});
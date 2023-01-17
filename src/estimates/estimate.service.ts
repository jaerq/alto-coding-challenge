import { Client, Distance } from "@googlemaps/google-maps-services-js";
import { CoordinateLocation, EstimatedFare } from "./estimate.interface";

const mapsClient = new Client({});

/**
 * Estimate duration and distance between 2 locations.
 */
export const estimateTravelLength = async function (start: CoordinateLocation, end: CoordinateLocation) {
  const params = {
    origins: [start],
    destinations: [end],
    key: process.env.GOOGLE_MAPS_API_KEY as string,
  };

  const { data } = await mapsClient.distancematrix({ params: params });

  return data.rows[0].elements[0];
}

/**
 * Calculates fare range at $1 per km.
 * Returned values are in cents.
 */
export const estimateFare = async function (distance: Distance): Promise<EstimatedFare> {
  const kilometers = distance.value / 1000;
  const fare = Math.floor(kilometers * 100);
  
  return {
    low: fare - 500,
    high: fare + 500
  }
}
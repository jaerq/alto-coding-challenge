import { TripStatus } from "./trip-status.enum";
import { Trip } from "./trip.interface";
import { Client, Distance } from "@googlemaps/google-maps-services-js";
import { Location } from "../common/interfaces/location.interface";

const mapsClient = new Client({});

/**
 * Data in memory
 */
let trips: {
  [key: string]: Trip;
} =
{
  "pZEi7EbiT8": {
    id: "pZEi7EbiT8",
    status: TripStatus.InProgress,
    start_location: {
      latitude: 33.214,
      longitude: -96.614,
      address: {
        line1: "449 Flora St.",
        city: "Dallas",
        state: "TX",
        postal_code: "75201"
      }
    },
    end_location: {
      latitude: 32.89,
      longitude: -97.04,
      address: {
        line1: "DFW International Airport - Terminal E",
        city: "Irving",
        state: "TX",
        postal_code: "75261"
      }
    },
    payment_method: "Amex01",
    driver: {
      name: "Steph",
      image_url: "",
      about: `Steph Festiculma is a graduate of Parsons New School in New York and 
      fluent in Portugeuse, Spanish, and English. Steph has been driving with Alto 
      since 2018.`,
      phone: "+15555555555"
    },
    passengers: [],
    vehicle: {
      name: "Alto 09",
      year: "2019",
      make: "Volkswagen",
      model: "Atlas",
      color: "Pure White"
    },
    vibe: {
      name: "Vaporwave Beats"
    }
  }
};

export const findOne = async function (id: string): Promise<Trip> {
  return trips[id];
}

export const update = async function (id: string, changes: Partial<Trip>): Promise<Trip> {
  trips[id] = { ...trips[id], ...changes };

  return trips[id];
}

/**
 * Estimate duration and distance between 2 locations.
 */
export const estimateTravelLength = async function (start: Location, end: Location) {
  const params = {
    origins: [{
      latitude: start.latitude,
      longitude: start.longitude,
    }],
    destinations: [{
      latitude: end.latitude,
      longitude: end.longitude,
    }],
    key: process.env.GOOGLE_MAPS_API_KEY as string,
  };

  const { data } = await mapsClient.distancematrix({ params: params });

  return data.rows[0].elements[0];
}

/**
 * Calculates fare range at $1 per km.
 * Returned values are in cents.
 */
export const estimateFare = async function (distance: Distance) {
  const kilometers = distance.value / 1000;
  const fare = Math.floor(kilometers * 100);
  
  return {
    low: fare - 500,
    high: fare + 500
  }
}
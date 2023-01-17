import { TripStatus } from "./trip-status.enum";
import { Trip } from "./trip.interface";

/**
 * Data in memory.
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
      id: "p2odjFf480",
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
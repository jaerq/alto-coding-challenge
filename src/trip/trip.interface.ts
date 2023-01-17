import { Location } from "../common/interfaces/location.interface";
import { DriverData } from "../driver/driver.interface";
import { PassengerData } from "../passenger/passenger.interface";
import { VehicleVibe } from "../vehicle-vibe/vehicle-vibe.interface";
import { VehicleData } from "../vehicle/vehicle.interface";
import { TripStatus } from "./trip-status.enum";

export interface TripData {
  status: TripStatus;
  start_location: Location;
  end_location: Location;
  payment_method: string;
  driver: DriverData;
  passengers: PassengerData[];
  vehicle: VehicleData;
  vibe: VehicleVibe;
  passenger_notes?: string;
}

export interface Trip extends TripData {
  id: string;
}
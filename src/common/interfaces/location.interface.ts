import { Address } from "./address.interface";

export interface Location {
  latitude: number;
  longitude: number;
  address: Address;
}
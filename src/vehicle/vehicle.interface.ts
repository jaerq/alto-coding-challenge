export interface VehicleData {
  name: string;
  year: string;
  make: string;
  model: string;
  color: string;
}

export interface Vehicle extends VehicleData {
  id: string;
}
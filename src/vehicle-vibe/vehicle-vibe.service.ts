import { VehicleVibe } from "./vehicle-vibe.interface"

/**
 * Data in memory.
 */
let vibes: {
  [key: string]: VehicleVibe
} = {
  "p2odjFf480": {
    id: "p2odjFf480",
    name: "Vaporwave Beats"
  },
  "zPl4bFtt1K": {
    id: "zPl4bFtt1K",
    name: "Classic Rock"
  }
};

export const findAll = async function (): Promise<VehicleVibe[]> {
  return Object.values(vibes);
}
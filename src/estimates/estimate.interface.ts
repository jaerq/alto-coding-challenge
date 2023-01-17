import { Duration, LatLngLiteralVerbose } from "@googlemaps/google-maps-services-js";

export interface EstimatedFare {
  low: number;
  high: number;
}

export interface EstimatedDuration extends Duration {}

export interface CoordinateLocation extends LatLngLiteralVerbose {}
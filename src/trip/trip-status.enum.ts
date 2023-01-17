export enum TripStatus {
  /** Indicates the passenger is waiting to be picked up.*/
  Pending = "pending",
  /** Indicates the passenger is on the way to the destination. */
  InProgress = "in_progress",
  /** Indicates a completed trip. */
  Completed = "completed",
  /** Indicates a canceled trip. */
  Canceled = "canceled",
}
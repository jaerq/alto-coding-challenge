export interface DriverData {
  name: string;
  image_url: string;
  about: string;
  phone: string;
}

export interface Driver extends DriverData {
  id: string;
}
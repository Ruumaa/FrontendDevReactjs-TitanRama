export interface Review {
  image: string;
  name: string;
  rating: number;
  text: string;
}

export interface MapLocation {
  latitude: number;
  longitude: number;
}

export interface Restaurant {
  id: number;
  image_url: string;
  name: string;
  reviews: Review[];
  cuisine: string;
  categories: string[];
  price_range: string;
  isOpen: boolean;
  map: MapLocation;
}

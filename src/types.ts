export interface Car {
  id: string;
  name: string;
  countBadge?: string;
  category: 'Hatchback' | 'Sedan' | 'SUV / MUV' | 'Tempo / Group';
  seats: string;
  luggage: string;
  acType: string;
  fuelType: string;
  baseRatePerKm: number;
  minKmPerDay: number;
  airportDropAmbernath: number;
  features: string[];
  imageUrl: string;
  description: string;
  bestFor: string;
  popular?: boolean;
}

export interface TourPackage {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  distanceApprox: string;
  startingPrice: number;
  recommendedCar: string;
  highlights: string[];
  imageUrl: string;
  category: 'Pilgrimage' | 'Hill Station' | 'City / Weekend' | 'Airport' | 'Beach';
}

export interface BookingFormState {
  fullName: string;
  phone: string;
  pickupLocation: string;
  dropLocation: string;
  pickupDate: string;
  pickupTime: string;
  tripType: 'one-way' | 'round-trip' | 'local-rental' | 'airport-transfer';
  selectedCarId: string;
  specialRequests: string;
  acPreference: 'AC' | 'Non-AC';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  trip: string;
  carUsed: string;
  comment: string;
  date: string;
}

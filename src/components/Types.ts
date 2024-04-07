// types.ts

export interface Weather {
    city: string;
    temperature: number;
    description: string;
    humidity: number;
    windSpeed: number;
    pressure: number;
    // Add more weather details as needed
  }
  
  export interface City {
    name: string;
    country: string;
    population: number;
    // Add more city details as needed
  }
  
  export interface Forecast {
    date: string; // Date format: YYYY-MM-DD
    temperature: number;
    description: string;
    precipitation: number; // Percentage
    // Add more forecast details as needed
  }
  
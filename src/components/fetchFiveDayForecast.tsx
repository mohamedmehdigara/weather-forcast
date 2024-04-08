import axios from "axios";
import React from "react";

// Function to fetch 5-day forecast data
const fetchFiveDayForecast = async (cityName: string, apiKey: string) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching 5-day forecast data:', error);
      throw error;
    }
  };
  
  export default fetchFiveDayForecast;
  
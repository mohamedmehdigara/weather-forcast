import axios from 'axios';
import React from 'react';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';

// Function to fetch current weather data
const fetchCurrentWeather = async (cityName: string) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather data:', error);
    throw error;
  }
};

export default fetchCurrentWeather;

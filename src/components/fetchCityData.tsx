import axios from 'axios';
import React from 'react';

// Function to fetch city data
const fetchCityData = async () => {
  try {
    const response = await axios.get('https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-1000/download/?format=json&timezone=UTC&lang=en');
    return response.data;
  } catch (error) {
    console.error('Error fetching city data:', error);
    throw error; // Throw the error for handling in the calling code
  }
};

export default fetchCityData;

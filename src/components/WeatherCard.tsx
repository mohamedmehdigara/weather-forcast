import React from 'react';
import { Weather } from './Types'; // Assuming Weather type is defined in types.ts or similar

interface WeatherCardProps {
  weather: Weather;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <div className="weather-card">
      <h3>{weather.city}</h3>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Description: {weather.description}</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.windSpeed} km/h</p>
      <p>Pressure: {weather.pressure} hPa</p>
      {/* Add more weather details as needed */}
    </div>
  );
};

export default WeatherCard;

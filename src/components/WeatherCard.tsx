import React from 'react';
import { Weather } from './Types';

interface WeatherCardProps {
  weather: Weather | null; // Allow null as weather data
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  if (!weather) {
    return <div>No weather data available</div>;
  }

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

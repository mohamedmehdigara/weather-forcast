import React from 'react';
import { Forecast } from './Types';

interface ForecastCardProps {
  forecast: Forecast[];
}

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  if (forecast.length === 0) {
    return (
  

  
    <div className="forecast-card">
      <h3>{forecast.date}</h3>
      <p>Temperature: {forecast.temperature}°C</p>
      <p>Description: {forecast.description}</p>
      <p>Precipitation: {forecast.precipitation}%</p>
      {/* Add more forecast details as needed */}
    </div>
  );
};
}
export default ForecastCard;

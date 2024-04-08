import React from 'react';
import { Forecast } from './Types';

interface ForecastCardProps {
  forecast: Forecast[];
}

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  if (forecast.length === 0) {
    return null; // Return null when there's no forecast data
  }

  return (
    <div className="forecast-card">
      {forecast.map((item, index) => (
        <div key={index} className="forecast-item">
          <h3>{item.date}</h3>
          <p>Temperature: {item.temperature}°C</p>
          <p>Description: {item.description}</p>
          <p>Precipitation: {item.precipitation}%</p>
          {/* Add more forecast details as needed */}
        </div>
      ))}
    </div>
  );
};

export default ForecastCard;


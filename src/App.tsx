import React, { useState } from 'react';
import axios from 'axios';

// Define TypeScript interfaces for weather data
interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

interface ForecastData {
  list: {
    dt_txt: string;
    main: {
      temp_min: number;
      temp_max: number;
    };
    weather: {
      description: string;
    }[];
  }[];
}

const App: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';

  const fetchWeatherData = async () => {
    try {
      const weatherResponse = await axios.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const forecastResponse = await axios.get<ForecastData>(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);

      setWeather(weatherResponse.data);
      setForecast(forecastResponse.data);
      setError(null);
    } catch (error) {
      setError('City not found');
      setWeather(null);
      setForecast(null);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" />
        <button type="submit">Get Weather</button>
      </form>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2>Current Weather in {city}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Description: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Pressure: {weather.main.pressure}hPa</p>
          <p>Wind Speed: {weather.wind.speed}m/s</p>
        </div>
      )}
      {forecast && (
        <div>
          <h2>5-Day Forecast for {city}</h2>
          <ul>
            {forecast.list.map((data, index) => (
              <li key={index}>
                <p>Date/Time: {data.dt_txt}</p>
                <p>Min Temperature: {data.main.temp_min}°C</p>
                <p>Max Temperature: {data.main.temp_max}°C</p>
                <p>Description: {data.weather[0].description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;

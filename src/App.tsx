import React, {useEffect} from 'react';
import { useAppState } from './components/AppStateContext';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import './styles.css'; // Import Tailwind CSS styles
import fetchCityData from './components/fetchCityData';
import fetchCurrentWeather from './components/fetchCurrentWeather';
import fetchFiveDayForecast from './components/fetchFiveDayForecast';


const App: React.FC = () => {
  const { weather, cities, forecast } = useAppState();

  const handleSearch = (query: string) => {
    // Implement search functionality here
  };



  useEffect(() => {

    const cityName = 'London';
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    // Fetch city data
    fetchCityData()
      .then((data) => {
        console.log('City data:', data);
        // You can set the city data in your application state here
      })
      .catch((error) => {
        console.error('Error fetching city data:', error);
      });

    // Fetch current weather data
    fetchCurrentWeather(cityName)
      .then((data) => {
        console.log('Current weather data:', data);
        // You can set the current weather data in your application state here
      })
      .catch((error) => {
        console.error('Error fetching current weather data:', error);
      });

    // Fetch 5-day forecast data
    fetchFiveDayForecast(cityName, apiKey)
      .then((data) => {
        console.log('5-day forecast data:', data);
        // You can set the 5-day forecast data in your application state here
      })
      .catch((error) => {
        console.error('Error fetching 5-day forecast data:', error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Weather Forecast Application</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherCard weather={weather} />
      <ForecastCard forecast={forecast} />
      {/* Display Table component here if needed */}
    </div>
  );
};

export default App;

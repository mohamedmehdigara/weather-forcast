import React from 'react';
import { useAppState } from './components/AppStateContext';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import './styles.css'; // Import Tailwind CSS styles

const App: React.FC = () => {
  const { weather, cities, forecast } = useAppState();

  const handleSearch = (query: string) => {
    // Implement search functionality here
  };

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

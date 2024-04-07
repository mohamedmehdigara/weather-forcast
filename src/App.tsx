import React from 'react';
import { AppStateProvider } from './components/AppStateContext';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import './styles.css'; // Import Tailwind CSS styles

const App: React.FC = () => {
  const handleSearch = (query: string) => {
    // Implement search functionality here
  };

  return (
    <AppStateProvider>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Weather Forecast Application</h1>
        <SearchBar onSearch={handleSearch} />
        <WeatherCard weather={null} />
        <ForecastCard forecast={[]} />
        {/* Display Table component here if needed */}
      </div>
    </AppStateProvider>
  );
};

export default App;

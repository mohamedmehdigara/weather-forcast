import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CityTable: React.FC = () => {
  const [cities, setCities] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    // Fetch initial data when component mounts
    fetchCities();

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fetchCities = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://public.opendatasoft.com/explore/dataset/geonames-all-cities-with-a-population-1000/download/?format=json&timezone=UTC&lang=en&page=${page}`);
      const newCities = response.data.records.map((record: any) => record.fields.name);
      setCities((prevCities) => [...prevCities, ...newCities]);
      setPage(page + 1);
    } catch (error) {
      console.error('Error fetching city data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    // Check if user has scrolled to the bottom of the page
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      fetchCities();
    }
  };

  return (
    <div>
      <h1>Cities</h1>
      <table>
        <thead>
          <tr>
            <th>City Name</th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city, index) => (
            <tr key={index}>
              <td>{city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default CityTable;

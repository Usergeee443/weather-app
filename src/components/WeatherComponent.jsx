import axios from "axios";
import React, { useEffect, useState } from "react";

const WeatherComponent = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            city
          )}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
        );
        setWeatherData(response.data);
        setLoading(false);
        setError(null); // Clear error if successful
      } catch (error) {
        setError("Place not found."); // Set error message
        setWeatherData(null); // Clear weather data on error
        setLoading(false);
      }
    };

    if (city) {
      fetchData();
    } else {
      // Clear weather data and error message if city is empty
      setWeatherData(null);
      setError(null);
      setLoading(false);
    }
  }, [city]);

  if (loading) return <div className="weather-loading">Loading...</div>;
  if (error) return <div className="weather-error">{error}</div>;
  if (!weatherData) return null;

  // Convert temperature from Kelvin to Celsius
  const temperatureCelsius = weatherData.main.temp - 273.15;

  return (
    <div className="weather-info">
      <h2 className="weather-city">Weather in {city}</h2>
      <p className="weather-temperature">Temperature: {temperatureCelsius.toFixed(2)} °C</p>
      <p className="weather-description">Description: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default WeatherComponent;

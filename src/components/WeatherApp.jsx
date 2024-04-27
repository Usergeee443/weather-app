import React, { useState } from "react";
import WeatherComponent from "./WeatherComponent";

function Weather() {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedCity(city);
  };

  return (
    <div className="weather-container">
      <h1 className="weather-heading">Weather App</h1>
      <form className="weather-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="weather-input"
        />
        <button type="submit" className="weather-button">
          Get Weather
        </button>
      </form>
      {submittedCity && <WeatherComponent city={submittedCity} />}
    </div>
  );
}

export default Weather;

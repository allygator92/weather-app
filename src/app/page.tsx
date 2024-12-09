'use client'

import { useState } from 'react';

const apiKey = process.env.REACT_APP_API_KEY;
const baseURL = "http://api.openweathermap.org/geo/1.0/direct";
const limit = 5;

export default function Home() {
  const [location, setLocation] = useState(''); // State to store the input value
  const [geoData, setGeoData] = useState({})

  console.log(geoData)

  async function getGeoData(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page
    if (!location) {
      console.error('Location is empty');
      return;
    }

    const url = `${baseURL}?q=${encodeURIComponent(location)}&limit=${limit}&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      setGeoData(data);

    } catch (error) {
      console.error("Failed to fetch geolocation data", error);
      throw error;
    }
  }

  return (
    <>
      <title>Weather App</title>
      <form id="weatherForm">
        <label htmlFor="locationInput">Enter City:</label>
        <input
          type="text"
          id="locationInput"
          name="location"
          value={location} // Bind the input value to the state
          onChange={(e) => setLocation(e.target.value)} // Update state on input change
          required
        />
        <button onClick={getGeoData} type="button">Get weather</button>
      </form>
    </>
  );
}

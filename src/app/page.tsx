export default function Home() {
  return (
    <>
        <title>Weather App</title>
        <form id="weatherForm">
  <label htmlFor="cityInput">Enter City:</label>
  <input type="text" id="cityInput" name="city" required />
  <button type="submit">Get weather</button>
</form>
        </>
  )
}

const apiKey = process.env.REACT_APP_API_KEY

async function getGeoData(location:string) {
  const baseURL = "http://api.openweathermap.org/geo/1.0/direct";
  const limit = 5;

  const url = `${baseURL}?q=${encodeURIComponent(location)}&limit=${limit}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data
  } catch (error) {
    console.error("Failed to fetch geolocation data", error);
    throw error;
  }
}

getGeoData("London")
.then(data => console.log(data))
.catch(error => console.log(error));


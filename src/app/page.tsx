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

// create a function to get the weather from api key


// add a try catchto throw error if unable to fetch info from api

// output weather to user 
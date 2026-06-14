
import React, { useState } from 'react'

const mockData = {
  "new york": { temp: "18°C", condition: "Cloudy" },
  "london": { temp: "12°C", condition: "Rainy" },
  "delhi": { temp: "32°C", condition: "Sunny" }
}

export default function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)

  const getWeather = () => {
    setWeather(mockData[city.toLowerCase()] || { temp: "N/A", condition: "No data" })
  }

  return (
    <div style={{padding:20}}>
      <h2>Weather Dashboard (React + State)</h2>

      <input value={city} onChange={e => setCity(e.target.value)} placeholder="Enter city" />
      <button onClick={getWeather}>Get Weather</button>

      {weather && (
        <div style={{marginTop:20}}>
          <h3>{city}</h3>
          <p>Temperature: {weather.temp}</p>
          <p>Condition: {weather.condition}</p>
        </div>
      )}
    </div>
  )
}

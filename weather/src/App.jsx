import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'

function App() {
  
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API}&q=&days=4&aqi=yes&alerts=yes`)
        
      } catch (error) {
        console.log(error)
      }
    };
  })

  return (
    <>
      
    </>
  )
}

export default App

import axios from "axios";
import { createContext, useState } from "react";
export const Context = createContext();

function ContextProvider({ children }) {
  const [weather, setweather] = useState({})
  const [loading, setloading] = useState(true)
  async function getWeather(city = 'toshkent') {
    let { data } = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${import.meta.env.VITE_APIKEY}`)
    // console.log(data)  
    let { lat, lon, name } = data[0]
    let { data: weather } = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_APIKEY}&units=metric&lang=ru`)
    let weatherInfo = { ...weather, name }
    setweather(weatherInfo)
    setloading(false)
    // console.log(weatherInfo)  
  }
  return <Context.Provider value={{ getWeather, weather, loading }}>
    {children}
  </Context.Provider>;
}

export default ContextProvider;

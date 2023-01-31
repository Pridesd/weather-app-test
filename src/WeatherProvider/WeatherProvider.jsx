import React, { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext({});

function WeatherProvider({ children }) {
  const [weatherInfo, setWeatherInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      const currentWeatherAPI =
        "https://api.openweathermap.org/data/2.5/weather?appid=e9b6d8a13a940275da5e435e8ab82816&q=seoul&units=metric";
      const currentWeatherInfo = await fetch(currentWeatherAPI); //fetch하는 과정에서는 이 함수가 대기상태여야 함
      const {
        name,
        coord: { lat, lon },
        main: { temp, humidity, pressure, feels_like, temp_min, temp_max },
        sys: { sunset, sunrise },
        weather: [{ main: weatherState }],
        wind: { speed, deg },
      } = await currentWeatherInfo.json();
      const hourlyWeatherAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,daily,alerts&appid=e9b6d8a13a940275da5e435e8ab82816&units=metric`;
      const hourlyWeatherInfo = await fetch(hourlyWeatherAPI);
      const { hourly } = await hourlyWeatherInfo.json();
      setWeatherInfo({
        name,
        temp,
        humidity,
        pressure,
        feels_like,
        temp_max,
        temp_min,
        sunset,
        sunrise,
        weatherState,
        speed,
        deg,
        hourly,
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <WeatherContext.Provider value={weatherInfo}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;

import React from "react";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import ExtraInfo from "./ExtraInfo/ExtraInfo";
import TempInfo from "./TempInfo/TempInfo";
import WeatherTab from "./WeatherTab/WeatherTab";

function WeatherApp() {
  return (
    <>
      <CurrentWeather />
      <TempInfo />
      <ExtraInfo />
      <WeatherTab />
    </>
  );
}

export default WeatherApp;

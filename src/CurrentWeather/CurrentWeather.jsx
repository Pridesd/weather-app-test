import React, { useContext } from "react";
import CurrentWeatherIcon from "../CurrentWeatherIcon/CurrentWeatherIcon";
import { WeatherContext } from "../WeatherProvider/WeatherProvider";

function CurrentWeather() {
  const { name, temp, weatherState } = useContext(WeatherContext);
  return (
    //&nbsp는 한칸 띄어주는 역할임
    <div className="weather">
      {name} &nbsp;/ <CurrentWeatherIcon weatherState={weatherState} />{" "}
      {/*날씨에 따라 아이콘을 달리 할 예정 */}
      <span>{temp}&deg;</span>
    </div>
  );
}

export default CurrentWeather;

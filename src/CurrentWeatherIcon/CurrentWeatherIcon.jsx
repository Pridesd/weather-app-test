import React from "react";
import {
  WiAlien,
  WiDayCloudy,
  WiDayHaze,
  WiDayRain,
  WiDaySnow,
  WiDaySunny,
} from "react-icons/wi";

function CurrentWeatherIcon({ weatherState, ...props }) {
  switch (weatherState) {
    case "Clear":
      return <WiDaySunny {...props} />;
    case "Clouds":
      return <WiDayCloudy {...props} />;
    case "Haze":
      return <WiDayHaze {...props} />;
    case "Snow":
      return <WiDaySnow {...props} />;
    case "Rain":
      return <WiDayRain {...props} />;
    default:
      return <WiAlien {...props} />;
  }
}

export default CurrentWeatherIcon;

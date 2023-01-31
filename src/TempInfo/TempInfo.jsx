import React, { useContext } from "react";
import { WeatherContext } from "../WeatherProvider/WeatherProvider";

function TempInfo() {
  const { feels_like, temp_min, temp_max } = useContext(WeatherContext);
  return (
    <div className="temp-info">
      <div>
        <span>체감온도: {feels_like}&deg;</span>
      </div>
      <div>
        <span>최고 기온: {temp_max}&deg;</span>
      </div>
      <div>
        <span>최저 기온: {temp_min}&deg;</span>
      </div>
    </div>
  );
}

export default TempInfo;

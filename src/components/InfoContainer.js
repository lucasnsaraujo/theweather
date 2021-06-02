import React, { useContext } from "react";
import WeatherStatusIcon from "./WeatherStatusIcon";
import { WeatherContext } from "../contexts/WeatherContext";

export default function InfoContainer(props) {
  const { dataValue } = useContext(WeatherContext);
  const [data] = dataValue;
  return (
    <div className="info-wrapper">
      <div className="info-container">
        <h1>
          {data
            ? Math.round(data.location.currentConditions.temp) ||
              Math.round(data.location.values[0].temp) + "°C"
            : ""}
        </h1>
        <h2>{data ? data.location.address : "Welcome"}</h2>
        <WeatherStatusIcon></WeatherStatusIcon>
      </div>
    </div>
  );
}

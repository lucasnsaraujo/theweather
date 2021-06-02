import React from "react";
import WeatherStatusIcon from "./WeatherStatusIcon";

export default function InfoContainer(props) {
  return (
    <div className="info-wrapper">
      <div className="info-container">
        <h1>
          {props.data
            ? Math.round(props.data.location.currentConditions.temp) + "°C"
            : ""}
        </h1>
        <h2>{props.data ? props.data.location.address : "Welcome"}</h2>
        <WeatherStatusIcon></WeatherStatusIcon>
      </div>
    </div>
  );
}

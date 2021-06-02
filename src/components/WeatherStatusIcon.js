import React from "react";
import sun from "../images/icons/sun.png";

export default function WeatherStatusIcon(props) {
  return (
    <div className="weather-status">
      <img src={sun} alt="Sun" />
      <h3>Sunny</h3>
    </div>
  );
}

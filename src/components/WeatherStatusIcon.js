import React, { useContext } from "react";
import sun from "../images/icons/sun.png";
import { WeatherContext } from "../contexts/WeatherContext";

export default function WeatherStatusIcon(props) {
  const { dataValue } = useContext(WeatherContext);
  const [data, setData] = dataValue;

  function capitalize(myString) {
    if (myString) {
      return myString.trim().replace(/^\w/, (c) => c.toUpperCase());
    } else {
      return "";
    }
  }
  return (
    <div className="weather-status">
      <img src={sun} alt="Sun" />
      <h3>{data ? capitalize(data.location.currentConditions.icon) : ""}</h3>
    </div>
  );
}

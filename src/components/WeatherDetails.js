import React, { useContext } from "react";
import { WeatherContext } from "./../contexts/WeatherContext";

export default function WeatherDetails(props) {
  const { dataValue } = useContext(WeatherContext);
  const [data] = dataValue;
  return (
    <table className="weather-details">
      <tr>
        <th>Weather Details</th>
      </tr>
      <tr>
        <td>Cloudy</td>
        <td>
          {data
            ? Math.round(data.location.currentConditions.cloudcover) + "%" ||
              Math.round(data.location.values[0].cloudcover) + "%"
            : "--"}
        </td>
      </tr>
      <tr>
        <td>Humidity</td>
        <td>
          {data
            ? Math.round(data.location.currentConditions.humidity) + "%" ||
              Math.round(data.location.values[0].humidity) + "%"
            : "--"}
        </td>
      </tr>
      <tr>
        <td>Wind</td>
        <td>
          {data
            ? data.location.currentConditions.wspd + "km/h" ||
              data.location.values[0].wspd + "km/h"
            : "--"}
        </td>
      </tr>
      <tr>
        <td>Rain</td>
        <td>
          {data
            ? data.location.currentConditions.precip + "mm" ||
              data.location.values[0].precip + "mm"
            : "--"}
        </td>
      </tr>
    </table>
  );
}

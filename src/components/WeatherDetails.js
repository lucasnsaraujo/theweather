import React from "react";

export default function WeatherDetails(props) {
  return (
    <table className="weather-details">
      <tr>
        <th>Weather Details</th>
      </tr>
      <tr>
        <td>Cloudy</td>
        <td>12%</td>
      </tr>
      <tr>
        <td>Humidity</td>
        <td>78%</td>
      </tr>
      <tr>
        <td>Wind</td>
        <td>1km/h</td>
      </tr>
      <tr>
        <td>Rain</td>
        <td>0mm</td>
      </tr>
    </table>
  );
}

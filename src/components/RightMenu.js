import React from "react";
import LocationSelection from "./LocationSelection";
import WeatherDetails from "./WeatherDetails";

export default function RightMenu(props) {
  return (
    <div className="right-menu">
      <LocationSelection
        data={props.data}
        setData={props.setData}
      ></LocationSelection>
      <WeatherDetails></WeatherDetails>
    </div>
  );
}

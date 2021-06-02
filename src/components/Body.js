import React, { useState } from "react";
import RightMenu from "./RightMenu";
import InfoContainer from "./InfoContainer";
import { WeatherProvider } from "../contexts/WeatherContext";

export default function Body(props) {
  return (
    <div className="body-container">
      <WeatherProvider>
        <InfoContainer></InfoContainer>
        <RightMenu></RightMenu>
      </WeatherProvider>
    </div>
  );
}

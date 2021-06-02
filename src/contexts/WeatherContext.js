import React, { useState, createContext } from "react";

export const WeatherContext = createContext();

export function WeatherProvider(props) {
  const [input, setInput] = useState();
  const [data, setData] = useState();
  return (
    <WeatherContext.Provider
      value={{ inputValue: [input, setInput], dataValue: [data, setData] }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
}

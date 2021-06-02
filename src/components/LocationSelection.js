import React, { useContext } from "react";
import magnifyingGlass from "../images/icons/magnifyingGlass.png";
import { WeatherContext } from "./../contexts/WeatherContext";
require("dotenv").config();

export default function LocationSelection(props) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { inputValue, dataValue } = useContext(WeatherContext);
  const [input, setInput] = inputValue;
  const [data, setData] = dataValue;

  function parseToInput(str) {
    if (str.split(" ")) {
      const res = str.split(" ");
      return res.join("+");
    } else {
      return str;
    }
  }

  function fetchInfo(location) {
    if (location) {
      const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&combinationMethod=aggregate&contentType=json&unitGroup=metric&locationMode=single&key=${API_KEY}&dataElements=default&locations=${location}`;
      const response = fetch(apiUrl)
        .then((res) => res.json())
        .then((json) => {
          setData(json);
        });
      console.log(response);
    }
  }

  function handleInput(event) {
    setInput(parseToInput(event.target.value));
    console.log(input);
  }

  return (
    <>
      {" "}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Another Location"
          onChange={handleInput}
        />
        <button
          onClick={(e) => {
            fetchInfo(input);
          }}
        >
          {" "}
          <img src={magnifyingGlass} alt="" />{" "}
        </button>
      </div>
      <div className="suggestion-list">
        <ul>
          <li>Birmingham</li>
          <li>Manchester</li>
          <li>New York</li>
          <li>California</li>
        </ul>
      </div>
    </>
  );
}

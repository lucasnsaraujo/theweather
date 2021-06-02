import React, { useState, useEffect } from "react";
import magnifyingGlass from "../images/icons/magnifyingGlass.png";

export default function LocationSelection(props) {
  const [input, setInput] = useState();

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
      const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?aggregateHours=24&combinationMethod=aggregate&contentType=json&unitGroup=metric&locationMode=single&key=6DPN69KLCTKDWFR5KH7REPTX3&dataElements=default&locations=${location}`;
      const response = fetch(apiUrl)
        .then((res) => res.json())
        .then((json) => {
          props.setData(json);
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

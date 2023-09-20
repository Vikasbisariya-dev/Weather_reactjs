import React, { useState } from "react";
import axios from "axios";
// import Clock from "react-live-clock";
// import ReactAnimatedWeather from "react-animated-data";
// import Buildate from "./currentDay";
const Forcast = (props) => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=60201600736287848ef4172e38275f7f`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((Response) => {
          setData(Response.data);
        })
        .catch(function (error) {
          console.log(error);
          setLocation("");
          setError({ message: "Not Found", query: location });
        });
    }
  };

  return (
    <div className="forecast">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={searchLocation}
        type="text"
        placeholder="Enter Location"
      />
      <h1> {data.name}</h1>
      <ul>
      
        <li>
          Temperature{" "}
          <span style={{marginLeft: "30px"}} className="temp">
            {data.main ? Math.round(((data.main.temp - 32) * 5) / 9) : null}°C
          </span>
        </li><hr/>
        <li>
          Humidity{" "}
          <span style={{marginLeft: "30px"}} className="temp">{data.main ?  (data.main.humidity): null} %</span>
        </li><hr/>
        <li>
          Visibility{" "}
          <span style={{marginLeft: "30px"}} className="temp">{Math.round(data.visibility)} mi</span>
        </li><hr/>
        <li>
          Wind Speed{" "}
          <span style={{marginLeft: "30px"}} className="temp">{Math.round(data.main ? (data.wind.speed):null)} km/hr</span>
        </li><hr/>
      </ul>
    </div>
  );
};

export default Forcast;

// <div>
//         <input
//           value={location}
//           onChange={(event) => setLocation(event.target.value)}
//           onKeyDown={searchLocation}
//           type="text"
//           placeholder="Enter Location"
//         />

//         <div>
//           <h1>City- {data.name}</h1>
//         </div>
//         <div>
//           {data.main ? (
//             <h1>Tepm- {Math.round(((data.main.temp - 32) * 5) / 9)}°C</h1>
//           ) : null}
//         </div>
//         <div>{data.main ?  {data.main.humidity}: null}</div>
//       </div>

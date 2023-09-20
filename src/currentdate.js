import React, { useEffect, useState } from "react";
import Forcast from './forcast';
const Buildate = () => {
  const currentDate = new Date();

  // defined an array
  const dayName = [
    "sunday",
    "Monday",
    "Tuesday",
    "wednesday",
    "thursday",
    "Firday",
    "saturday",
  ];

  const monthName = [
    "january",
    "February",
    "March",
    "April",
    "May",
    "june",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getday = dayName[currentDate.getDay()];
  const date = currentDate.getDate();
  const month = monthName[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return (
    // <div>
    // <p> Day: {getday}  </p>
    // <p>Date:{date}</p>
    // <p>Month: {month}</p>
    // <p>Year:{year}</p>
    // </div>
    `${getday} ${date} ${month}  ${year}`
  );
};

const CityTime = () => {
  const [currentCity, setCurrentCity] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [currentTemperature, setCurrentTemperature] = useState('');

  useEffect(() => {
    // Get the user's location using the Geolocation API
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
        const apiKey = '60201600736287848ef4172e38275f7f';

        // Use the API key in the API request URL
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`)
          .then((response) => response.json())
          .then((data) => {
            const city = data.name;
            const temperature = data.main.temp;
            setCurrentCity(city);
            setCurrentTemperature(temperature);
          })
          .catch((error) => {
            console.error('Error fetching weather data:', error);
          });
      });

      // Update the current time every second
      const intervalId = setInterval(() => {
        const now = new Date();
        setCurrentTime(now.toLocaleTimeString());
      }, 1000);

      // Clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    } else {
      console.error('Geolocation is not available in this browser.');
    }
  }, []);


  return (
    <React.Fragment>
      <div className="city">
        <div className="title">
          <h2>{currentCity}</h2>
        </div>
        <div className="date-time">
          <div className="dmy">
            <div className="current-time">
              <h2> {currentTime}</h2>
            </div>
          </div>
          <div className="current-date">{Buildate()}</div>
          <div className="temperature">
          <p>
          {Math.round(currentTemperature)}°<span>C</span>
         </p>
          </div>
        </div>
      </div>
      <Forcast />
    </React.Fragment>
  );
};

export default CityTime;

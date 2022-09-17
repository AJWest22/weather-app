import React, { useEffect, useState } from 'react'
import info from '../weather-data.json'
import './CityWeather.css'
import icon from '../icons/c03d.png'

// Gets the weather for current day filters through them
export default function CityWeather() {
  const [filteredRecord, setFilteredRecord] = useState({});

    useEffect(() => {
      const record = info.data.filter((it) => it.wind_cdir === "NNW");
      console.log(record[0])
      setFilteredRecord(record[0]);
    }, []);


  return (
    <div>
        {/* Optional Chaining is needed to get weather objects, marks it as undefined but doesn't question it so it loads. */}
      <div id="city">
        <h2 id="city-name">Weather for {info.city_name}</h2>
        <h4 id="date">Date: {filteredRecord.valid_date}. Weather: {filteredRecord?.weather?.description }</h4>
      </div>
      <div id="alignment">
        <p id="today">Today there is a temperature of {filteredRecord.temp} degrees expected around midday. This is slightly below average
           for this time of year. A max temperature is expected to be around {filteredRecord.max_temp} degrees which could be 
           seen sometime between 2 and 3pm. A low temperature of {filteredRecord.low_temp} degrees is expected later on this 
           evening, with a min temperature of {filteredRecord.min_temp} degrees expected to be seen around sunrise. All 
           temperatures are recorded in Celsius.
        </p>
        <img id="width" src={icon} alt="todays weather"></img>
      </div>
    </div>
  )
}

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
      <div>
        <h2>Weather for {info.city_name}</h2>
        <h4>Date: {filteredRecord.valid_date}. {filteredRecord?.weather?.icon }. Weather: {filteredRecord?.weather?.description }, {filteredRecord?.weather?.code }</h4>
      </div>

      <div id="alignment">
        <p>Temperature of {filteredRecord.temp} with a max temperature of {filteredRecord.max_temp}.
            A low temperature of {filteredRecord.low_temp} is expected, with a min temperature of 
            {filteredRecord.min_temp}
        </p>
        <img src={icon} alt="todays weather" height="150px" width="150px"></img>
      </div>
    </div>
  )
}

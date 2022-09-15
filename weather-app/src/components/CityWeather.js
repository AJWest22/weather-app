import React, { useEffect, useState } from 'react'
import info from '../weather-data.json'
import './CityWeather.css'


export default function CityWeather() {
  const [filteredRecord, setFilteredRecord] = useState({});

    useEffect(() => {
      const record = info.data.filter((it) => it.wind_cdir === "NNW");
      setFilteredRecord(record[0]);
    }, []);


  return (
    <div>

      <div>
        <h2>Weather for {info.city_name}. Date: {filteredRecord.valid_date}</h2>
      </div>

      <div>
        <p>Temperature of {filteredRecord.temp} with a high temperature of {filteredRecord.high_temp} with 
            a max temperature of {filteredRecord.max_temp} with a absolute max temp of {filteredRecord.app_max_temp}.
            UV is expected to be {filteredRecord.max_temp}.

        </p>
        <p>{filteredRecord.wind_cdir_full}</p>
      </div>

    </div>
  )
}

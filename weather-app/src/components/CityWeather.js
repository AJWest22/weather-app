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
            UV is expected to be {filteredRecord.uv}. Ozone is currently {filteredRecord.ozone}.

        </p>
        <p>{filteredRecord.wind_cdir}{filteredRecord.wind_cdir_full}{filteredRecord.wind_dir}{filteredRecord.wind_gust_spd}
        {filteredRecord.wind_spd}
        </p>
        <p>{filteredRecord.clouds_hi}{filteredRecord.clouds-mid}{filteredRecord.clouds_low} {filteredRecord.vis}
            {filteredRecord.precip} {filteredRecord.snow} {filteredRecord.snow_depth}

        </p>
      </div>

    </div>
  )
}

import React, { useEffect, useState } from 'react'
import info from '../weather-data.json'
import './CityWeather.css'

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
        <h2>Weather for {info.city_name}. Date: {filteredRecord.valid_date}. {filteredRecord?.weather?.icon }</h2>
        <p>Weather: {filteredRecord?.weather?.description }, {filteredRecord?.weather?.code }</p>
      </div>

      <div>
        <p>Temperature of {filteredRecord.temp} with a high temperature of {filteredRecord.high_temp} with 
            a max temperature of {filteredRecord.max_temp} with a absolute max temperature of {filteredRecord.app_max_temp}.
            A low temperature of {filteredRecord.low_temp} is expected, with a min temperature of {filteredRecord.min_temp}
            UV is expected to be {filteredRecord.uv}. Ozone is currently {filteredRecord.ozone}.
        </p>
        <p>The current wind direction is {filteredRecord.wind_cdir}, with the full cdir expected to be {filteredRecord.wind_cdir_full}. 
            The wind direction is today expected to be from {filteredRecord.wind_dir} with gusts of {filteredRecord.wind_gust_spd}.
        {filteredRecord.wind_spd}
        </p>
        <p>The high clouds are currently located at {filteredRecord.clouds_hi}, with the mid clouds at {filteredRecord.clouds_mid}. The low
            clouds are currently located at {filteredRecord.clouds_low}. Visibility is currently {filteredRecord.vis}. Precipitation
            is {filteredRecord.precip} with snow currently at {filteredRecord.snow}. The current snow depth is {filteredRecord.snow_depth}.
        </p>
        <p>The ts is currently {filteredRecord.ts}. Sunrise today is {filteredRecord.sunrise_ts} with sunset expected to be around {filteredRecord.sunset_ts}.
            Moonrise is currently forecast for {filteredRecord.moonrise_ts} this evening, with moonset at {filteredRecord.moonset_ts} tomorrow morning. The moon is
            currently in {filteredRecord.moon_phase} of its moon phase, with its moon phase lunation being {filteredRecord.moon_phase_lunation}.
        </p>
        <p>Additional Info: The rh is: {filteredRecord.rh}. Pres is {filteredRecord.pres}. Pop is {filteredRecord.pop}. Slp is {filteredRecord.slp}. Dewpt is
            currently {filteredRecord.dewpt}, and max dhi is {filteredRecord.max_dhi}
        </p>
      </div>

    </div>
  )
}

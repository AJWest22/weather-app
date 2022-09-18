import React, {useEffect, useState} from 'react'
import info from '../weather-data.json'
import'../components/GroupOne.js'


export default function DayTwo() {
  const [detailedRecord, setDetailedRecord] = useState({});

  useEffect(() => {
    const detail = info.data.filter((it) => it.wind_dir === 289);
    setDetailedRecord(detail[0]);
  }, []);
  return (
    <div>
      <h3>Tomorrow's Forecast</h3>
      {detailedRecord.weather?.icon}
      {detailedRecord.weather?.code}
      {detailedRecord.weather?.description}

      <p>
        For {detailedRecord.valid_date} at this time {detailedRecord.datetime}
        There is a average temperature of {detailedRecord.temp} and a low temperature 
        of {detailedRecord.low_temp} and a high temperature of {detailedRecord.high_temp}. 
        There's a max temperature of {detailedRecord.max_temp} and a mintemperature 
        of {detailedRecord.min_temp}. The app max temperature is {detailedRecord.app_max_temp} and 
        the app min temperature is {detailedRecord.app_min_temp}.

        The wind CDR is {detailedRecord.wind_cdr} and the full CDR is {detailedRecord.wind_cdr_full}. 
        The wind direction is currently {detailedRecord.wind_dir}. The wind speed is currently 
        at {detailedRecord.wind_spd} with gust speeds expected to be {detailedRecord.wind_gust_spd}.

        Precipitation is {detailedRecord.precip}. Snow is currently at {detailedRecord.snow} and 
        snow depth {detailedRecord.snow_depth}. The clouds are {detailedRecord.clouds}. The hi clouds 
        are currently at {detailedRecord.clouds_hi}and the mid cloudsare  and low clouds are 
        at {detailedRecord.clouds_low}. This means vis is currently {detailedRecord.vis}.

        Sunrise is set for {detailedRecord.sunrise_ts} and sunset for {detailedRecord.sunset_ts}. 
        Moonrise is currently timed for {detailedRecord.moonrise_ts} and scheduled to set
        at {detailedRecord.moonset_ts}. The moon phase is currently {detailedRecord.moon_phase} and 
        the moon phase lunation is {detailedRecord.moon_phase_lunation}.

        Other information: rh is currently {detailedRecord.rh}. The pres is {detailedRecord.pres}. 
        The ozone is currently at {detailedRecord.ozone}. The ts is {detailedRecord.ts}
        and the pop is {detailedRecord.pop}. The slp is at {detailedRecord.slp}. The dewpt 
        is {detailedRecord.dewpt} UV radiation is expected to be {detailedRecord.uv}. The dhi
        is set for {detailedRecord.max_dhi}
    </p>
    </div>
  )
}

import React, {useEffect, useState} from 'react'
import info from '../weather-data.json'
import icon from '../icons/c03d.png'
import'../components/GroupOne.js'

export default function DaySix() {
  const [sixthRecord, setSixthRecord] = useState({});

  useEffect(() => {
    const sixthDetail = info.data.filter((it) => it.rh === 72);
    setSixthRecord(sixthDetail[0]);
  }, []);
  return (
    <div>
      <h3>Day Six</h3>

      <p>
        Weather code: {sixthRecord?.weather?.code}. 
        Weather Description: {sixthRecord?.weather?.description}
      </p>

      <p>
        For {sixthRecord?.valid_date} at this time {sixthRecord?.datetime}
        There is a average temperature of {sixthRecord?.temp} and a low temperature 
        of {sixthRecord?.low_temp} and a high temperature of {sixthRecord?.high_temp}. 
        There's a max temperature of {sixthRecord?.max_temp} and a mintemperature 
        of {sixthRecord?.min_temp}. The app max temperature is {sixthRecord?.app_max_temp} and 
        the app min temperature is {sixthRecord?.app_min_temp}.

        The wind CDR is {sixthRecord?.wind_cdr} and the full CDR is {sixthRecord?.wind_cdr_full}. 
        The wind direction is currently {sixthRecord?.wind_dir}. The wind speed is currently 
        at {sixthRecord?.wind_spd} with gust speeds expected to be {sixthRecord?.wind_gust_spd}.

        Precipitation is {sixthRecord?.precip}. Snow is currently at {sixthRecord?.snow} and 
        snow depth {sixthRecord?.snow_depth}. The clouds are {sixthRecord?.clouds}. The hi clouds 
        are currently at {sixthRecord?.clouds_hi}and the mid cloudsare  and low clouds are 
        at {sixthRecord?.clouds_low}. This means vis is currently {sixthRecord?.vis}.

        Sunrise is set for {sixthRecord?.sunrise_ts} and sunset for {sixthRecord?.sunset_ts}. 
        Moonrise is currently timed for {sixthRecord?.moonrise_ts} and scheduled to set
        at {sixthRecord?.moonset_ts}. The moon phase is currently {sixthRecord?.moon_phase} and 
        the moon phase lunation is {sixthRecord?.moon_phase_lunation}.

        Other information: rh is currently {sixthRecord?.rh}. The pres is {sixthRecord?.pres}. 
        The ozone is currently at {sixthRecord?.ozone}. The ts is {sixthRecord?.ts}
        and the pop is {sixthRecord?.pop}. The slp is at {sixthRecord?.slp}. The dewpt 
        is {sixthRecord?.dewpt} UV radiation is expected to be {sixthRecord?.uv}.
      </p>

      <img src={icon} width="100px" height="100px"></img>
    </div>
  )
}


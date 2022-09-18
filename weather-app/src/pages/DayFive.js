import React, {useEffect, useState} from 'react'
import info from '../weather-data.json'
import icon from '../icons/c03d.png'
import'../components/GroupOne.js'

export default function DayFive() {
  const [fifthRecord, setFifthRecord] = useState({});

  useEffect(() => {
    const fifthDetail = info.data.filter((it) => it.rh === 72);
    setFifthRecord(fifthDetail[0]);
  }, []);
  return (
    <div>
      <h3>Day Five</h3>

      <h6>
        Location: {info.city_name}, Longitude: {info.lon}, Timezone: {info.timezone}, Latitude: {info.lat},
        Country Code: {info.country_code}, State Code: {info.state_code}.
        Weather code: {fifthRecord?.weather?.code}. 
        Weather Description: {fifthRecord?.weather?.description}
      </h6>

      <p>
        For {fifthRecord?.valid_date} at this time {fifthRecord?.datetime}
        There is a average temperature of {fifthRecord?.temp} and a low temperature 
        of {fifthRecord?.low_temp} and a high temperature of {fifthRecord?.high_temp}. 
        There's a max temperature of {fifthRecord?.max_temp} and a min temperature 
        of {fifthRecord?.min_temp}. The app max temperature is {fifthRecord?.app_max_temp} and 
        the app min temperature is {fifthRecord?.app_min_temp}.

        The wind CDR is {fifthRecord?.wind_cdir} and the full CDR is {fifthRecord?.wind_cdir_full}. 
        The wind direction is currently {fifthRecord?.wind_dir}. The wind speed is currently 
        at {fifthRecord?.wind_spd} with gust speeds expected to be {fifthRecord?.wind_gust_spd}.

        Precipitation is {fifthRecord?.precip}. Snow is currently at {fifthRecord?.snow} and 
        snow depth {fifthRecord?.snow_depth}. The clouds are {fifthRecord?.clouds}. The hi clouds 
        are currently at {fifthRecord?.clouds_hi} and the mid clouds are {fifthRecord?.clouds_mid} and 
        low clouds are at {fifthRecord?.clouds_low}. This means vis is currently {fifthRecord?.vis}.

        Sunrise is set for {fifthRecord?.sunrise_ts} and sunset for {fifthRecord?.sunset_ts}. 
        Moonrise is currently timed for {fifthRecord?.moonrise_ts} and scheduled to set
        at {fifthRecord?.moonset_ts}. The moon phase is currently {fifthRecord?.moon_phase} and 
        the moon phase lunation is {fifthRecord?.moon_phase_lunation}.

        Other information: rh is currently {fifthRecord?.rh}. The pres is {fifthRecord?.pres}. 
        The ozone is currently at {fifthRecord?.ozone}. The ts is {fifthRecord?.ts}
        and the pop is {fifthRecord?.pop}. The slp is at {fifthRecord?.slp}. The dewpt 
        is {fifthRecord?.dewpt} UV radiation is expected to be {fifthRecord?.uv}.
      </p>

      <img src={icon} className="icon"></img>
    </div>
  )
}


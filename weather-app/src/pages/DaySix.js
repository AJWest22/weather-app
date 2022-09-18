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

      <h6>
        Location: {info.city_name}, Longitude: {info.lon}, Timezone: {info.timezone}, Latitude: {info.lat},
        Country Code: {info.country_code}, State Code: {info.state_code}.
        Weather code: {sixthRecord?.weather?.code}. 
        Weather Description: {sixthRecord?.weather?.description}
      </h6>

      <p>
        For {sixthRecord?.valid_date} at this time {sixthRecord?.datetime}
        There is a average temperature of {sixthRecord?.temp} and a low temperature 
        of {sixthRecord?.low_temp} and a high temperature of {sixthRecord?.high_temp}. 
        There's a max temperature of {sixthRecord?.max_temp} and a min temperature 
        of {sixthRecord?.min_temp}. The app max temperature is {sixthRecord?.app_max_temp} and 
        the app min temperature is {sixthRecord?.app_min_temp}.

        The wind CDR is {sixthRecord?.wind_cdir} and the full CDR is {sixthRecord?.wind_cdir_full}. 
        The wind direction is currently {sixthRecord?.wind_dir}. The wind speed is currently 
        at {sixthRecord?.wind_spd} with gust speeds expected to be {sixthRecord?.wind_gust_spd}.

        Precipitation is {sixthRecord?.precip}. Snow is currently at {sixthRecord?.snow} and 
        snow depth {sixthRecord?.snow_depth}. The clouds are {sixthRecord?.clouds}. The hi clouds 
        are currently at {sixthRecord?.clouds_hi} and the mid clouds are {sixthRecord?.clouds_mid} and 
        low clouds are at {sixthRecord?.clouds_low}. This means vis is currently {sixthRecord?.vis}.

        Sunrise is set for {sixthRecord?.sunrise_ts} and sunset for {sixthRecord?.sunset_ts}. 
        Moonrise is currently timed for {sixthRecord?.moonrise_ts} and scheduled to set
        at {sixthRecord?.moonset_ts}. The moon phase is currently {sixthRecord?.moon_phase} and 
        the moon phase lunation is {sixthRecord?.moon_phase_lunation}.

        Other information: rh is currently {sixthRecord?.rh}. The pres is {sixthRecord?.pres}. 
        The ozone is currently at {sixthRecord?.ozone}. The ts is {sixthRecord?.ts}
        and the pop is {sixthRecord?.pop}. The slp is at {sixthRecord?.slp}. The dewpt 
        is {sixthRecord?.dewpt} UV radiation is expected to be {sixthRecord?.uv}. The 
        Max DHI is {sixthRecord?.max_dhi}.
      </p>

      <img src={icon} className="icon"></img>
    </div>
  )
}


import React, {useEffect, useState} from 'react'
import info from '../weather-data.json'
import icon from '../icons/c03d.png'
import'../components/GroupOne.js'

export default function DayThree() {
  const [thirdRecord, setThirdRecord] = useState({});

  useEffect(() => {
    const thirdDetail = info.data.filter((it) => it.wind_cdir === "NW");
    setThirdRecord(thirdDetail[0]);
  }, []);

  return (
    <div>
      <h3>Day Three</h3>

      <h6>
        Location: {info.city_name}, Longitude: {info.lon}, Timezone: {info.timezone}, Latitude: {info.lat},
        Country Code: {info.country_code}, State Code: {info.state_code}.
        Weather code: {thirdRecord?.weather?.code}. 
        Weather Description: {thirdRecord?.weather?.description}
      </h6>

      <p>
        For {thirdRecord?.valid_date} at this time {thirdRecord?.datetime}
        There is a average temperature of {thirdRecord?.temp} and a low temperature 
        of {thirdRecord?.low_temp} and a high temperature of {thirdRecord?.high_temp}. 
        There's a max temperature of {thirdRecord?.max_temp} and a min temperature 
        of {thirdRecord?.min_temp}. The app max temperature is {thirdRecord?.app_max_temp} and 
        the app min temperature is {thirdRecord?.app_min_temp}.

        The wind CDR is {thirdRecord?.wind_cdir} and the full CDR is {thirdRecord?.wind_cdir_full}. 
        The wind direction is currently {thirdRecord?.wind_dir}. The wind speed is currently 
        at {thirdRecord?.wind_spd} with gust speeds expected to be {thirdRecord?.wind_gust_spd}.

        Precipitation is {thirdRecord?.precip}. Snow is currently at {thirdRecord?.snow} and 
        snow depth {thirdRecord?.snow_depth}. The clouds are {thirdRecord?.clouds}. The hi clouds 
        are currently at {thirdRecord?.clouds_hi}  and the mid clouds are {thirdRecord?.clouds_mid} and 
        low clouds are at {thirdRecord?.clouds_low}. This means vis is currently {thirdRecord?.vis}.

        Sunrise is set for {thirdRecord?.sunrise_ts} and sunset for {thirdRecord?.sunset_ts}. 
        Moonrise is currently timed for {thirdRecord?.moonrise_ts} and scheduled to set
        at {thirdRecord?.moonset_ts}. The moon phase is currently {thirdRecord?.moon_phase} and 
        the moon phase lunation is {thirdRecord?.moon_phase_lunation}.

        Other information: rh is currently {thirdRecord?.rh}. The pres is {thirdRecord?.pres}. 
        The ozone is currently at {thirdRecord?.ozone}. The ts is {thirdRecord?.ts}
        and the pop is {thirdRecord?.pop}. The slp is at {thirdRecord?.slp}. The dewpt 
        is {thirdRecord?.dewpt} UV radiation is expected to be {thirdRecord?.uv}.
      </p>

      <img src={icon} className="icon"></img>
    </div>
  )
}

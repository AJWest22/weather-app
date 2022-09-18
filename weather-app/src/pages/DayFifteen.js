import React, {useEffect, useState} from 'react'
import info from '../weather-data.json'
import icon from '../icons/c03d.png'

export default function DayFifteen() {
  const [fifteenthRecord, setFifteenthRecord] = useState({});

  useEffect(() => {
    const fifteenthDetail = info.data.filter((it) => it.rh === 84);
    setFifteenthRecord(fifteenthDetail[0]);
  }, []);

  return (
    <div>
      <h3>Day Fifteen</h3>

      <h6>
        Location: {info.city_name}, Longitude: {info.lon}, Timezone: {info.timezone}, Latitude: {info.lat},
        Country Code: {info.country_code}, State Code: {info.state_code}.
        Weather code: {fifteenthRecord?.weather?.code}. 
        Weather Description: {fifteenthRecord?.weather?.description}
      </h6>

      <p>
        For {fifteenthRecord?.valid_date} at this time {fifteenthRecord?.datetime}
        There is a average temperature of {fifteenthRecord?.temp} and a low temperature 
        of {fifteenthRecord?.low_temp} and a high temperature of {fifteenthRecord?.high_temp}. 
        There's a max temperature of {fifteenthRecord?.max_temp} and a min temperature 
        of {fifteenthRecord?.min_temp}. The app max temperature is {fifteenthRecord?.app_max_temp} and 
        the app min temperature is {fifteenthRecord?.app_min_temp}.

        The wind CDR is {fifteenthRecord?.wind_cdir} and the full CDR is {fifteenthRecord?.wind_cdir_full}. 
        The wind direction is currently {fifteenthRecord?.wind_dir}. The wind speed is currently 
        at {fifteenthRecord?.wind_spd} with gust speeds expected to be {fifteenthRecord?.wind_gust_spd}.

        Precipitation is {fifteenthRecord?.precip}. Snow is currently at {fifteenthRecord?.snow} and 
        snow depth {fifteenthRecord?.snow_depth}. The clouds are {fifteenthRecord?.clouds}. The hi clouds 
        are currently at {fifteenthRecord?.clouds_hi} and the mid clouds are {fifteenthRecord?.clouds_mid} and 
        low clouds are at {fifteenthRecord?.clouds_low}. This means vis is currently {fifteenthRecord?.vis}.

        Sunrise is set for {fifteenthRecord?.sunrise_ts} and sunset for {fifteenthRecord?.sunset_ts}. 
        Moonrise is currently timed for {fifteenthRecord?.moonrise_ts} and scheduled to set
        at {fifteenthRecord?.moonset_ts}. The moon phase is currently {fifteenthRecord?.moon_phase} and 
        the moon phase lunation is {fifteenthRecord?.moon_phase_lunation}.

        Other information: rh is currently {fifteenthRecord?.rh}. The pres is {fifteenthRecord?.pres}. 
        The ozone is currently at {fifteenthRecord?.ozone}. The ts is {fifteenthRecord?.ts}
        and the pop is {fifteenthRecord?.pop}. The slp is at {fifteenthRecord?.slp}. The dewpt 
        is {fifteenthRecord?.dewpt} UV radiation is expected to be {fifteenthRecord?.uv}.
      </p>

      <img src={icon} className="icon"></img>
    </div>
  )
}

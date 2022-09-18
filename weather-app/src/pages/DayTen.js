import React, {useEffect, useState} from 'react'
import info from '../weather-data.json'
import icon from '../icons/c03d.png'

export default function DayTen() {
  const [tenthRecord, setTenthRecord] = useState({});

  useEffect(() => {
    const tenthDetail = info.data.filter((it) => it.wind_cdir === "SW");
    setTenthRecord(tenthDetail[0]);
  }, []);

  return (
    <div>
      <h3>Day Ten</h3>

      <h6>
        Location: {info.city_name}, Longitude: {info.lon}, Timezone: {info.timezone}, Latitude: {info.lat},
        Country Code: {info.country_code}, State Code: {info.state_code}.
        Weather code: {tenthRecord?.weather?.code}. 
        Weather Description: {tenthRecord?.weather?.description}
      </h6>

      <p>
        For {tenthRecord?.valid_date} at this time {tenthRecord?.datetime}
        There is a average temperature of {tenthRecord?.temp} and a low temperature 
        of {tenthRecord?.low_temp} and a high temperature of {tenthRecord?.high_temp}. 
        There's a max temperature of {tenthRecord?.max_temp} and a min temperature 
        of {tenthRecord?.min_temp}. The app max temperature is {tenthRecord?.app_max_temp} and 
        the app min temperature is {tenthRecord?.app_min_temp}.

        The wind CDR is {tenthRecord?.wind_cdir} and the full CDR is {tenthRecord?.wind_cdir_full}. 
        The wind direction is currently {tenthRecord?.wind_dir}. The wind speed is currently 
        at {tenthRecord?.wind_spd} with gust speeds expected to be {tenthRecord?.wind_gust_spd}.

        Precipitation is {tenthRecord?.precip}. Snow is currently at {tenthRecord?.snow} and 
        snow depth {tenthRecord?.snow_depth}. The clouds are {tenthRecord?.clouds}. The hi clouds 
        are currently at {tenthRecord?.clouds_hi} and the mid clouds are {tenthRecord?.clouds_mid} and 
        low clouds are at {tenthRecord?.clouds_low}. This means vis is currently {tenthRecord?.vis}.

        Sunrise is set for {tenthRecord?.sunrise_ts} and sunset for {tenthRecord?.sunset_ts}. 
        Moonrise is currently timed for {tenthRecord?.moonrise_ts} and scheduled to set
        at {tenthRecord?.moonset_ts}. The moon phase is currently {tenthRecord?.moon_phase} and 
        the moon phase lunation is {tenthRecord?.moon_phase_lunation}.

        Other information: rh is currently {tenthRecord?.rh}. The pres is {tenthRecord?.pres}. 
        The ozone is currently at {tenthRecord?.ozone}. The ts is {tenthRecord?.ts}
        and the pop is {tenthRecord?.pop}. The slp is at {tenthRecord?.slp}. The dewpt 
        is {tenthRecord?.dewpt} UV radiation is expected to be {tenthRecord?.uv}.
      </p>

      <img src={icon} className="icon"></img>
    </div>
  )
}


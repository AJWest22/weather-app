import React, {useEffect, useState} from 'react'
import info from '../weather-data.json'
import icon from '../icons/c03d.png'

export default function DaySeven() {
  const [seventhRecord, setSeventhRecord] = useState({});

  useEffect(() => {
    const seventhDetail = info.data.filter((it) => it.rh === 74);
    setSeventhRecord(seventhDetail[0]);
  }, []);

  return (
    <div>
      <h3>Day Seven</h3>

      <h6>
        Location: {info.city_name}, Longitude: {info.lon}, Timezone: {info.timezone}, Latitude: {info.lat},
        Country Code: {info.country_code}, State Code: {info.state_code}.
        Weather code: {seventhRecord?.weather?.code}. 
        Weather Description: {seventhRecord?.weather?.description}
      </h6>

      <p>
        For {seventhRecord?.valid_date} at this time {seventhRecord?.datetime}
        There is a average temperature of {seventhRecord?.temp} and a low temperature 
        of {seventhRecord?.low_temp} and a high temperature of {seventhRecord?.high_temp}. 
        There's a max temperature of {seventhRecord?.max_temp} and a min temperature 
        of {seventhRecord?.min_temp}. The app max temperature is {seventhRecord?.app_max_temp} and 
        the app min temperature is {seventhRecord?.app_min_temp}.

        The wind CDR is {seventhRecord?.wind_cdir} and the full CDR is {seventhRecord?.wind_cdir_full}. 
        The wind direction is currently {seventhRecord?.wind_dir}. The wind speed is currently 
        at {seventhRecord?.wind_spd} with gust speeds expected to be {seventhRecord?.wind_gust_spd}.

        Precipitation is {seventhRecord?.precip}. Snow is currently at {seventhRecord?.snow} and 
        snow depth {seventhRecord?.snow_depth}. The clouds are {seventhRecord?.clouds}. The hi clouds 
        are currently at {seventhRecord?.clouds_hi} and the mid clouds are {seventhRecord?.clouds_mid} and 
        low clouds are at {seventhRecord?.clouds_low}. This means vis is currently {seventhRecord?.vis}.

        Sunrise is set for {seventhRecord?.sunrise_ts} and sunset for {seventhRecord?.sunset_ts}. 
        Moonrise is currently timed for {seventhRecord?.moonrise_ts} and scheduled to set
        at {seventhRecord?.moonset_ts}. The moon phase is currently {seventhRecord?.moon_phase} and 
        the moon phase lunation is {seventhRecord?.moon_phase_lunation}.

        Other information: rh is currently {seventhRecord?.rh}. The pres is {seventhRecord?.pres}. 
        The ozone is currently at {seventhRecord?.ozone}. The ts is {seventhRecord?.ts}
        and the pop is {seventhRecord?.pop}. The slp is at {seventhRecord?.slp}. The dewpt 
        is {seventhRecord?.dewpt} UV radiation is expected to be {seventhRecord?.uv}.
      </p>

      <img src={icon} className="icon"></img>
    </div>
  )
}


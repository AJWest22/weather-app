import React, {useEffect, useState} from 'react'
import info from '../weather-data.json'
import icon from '../icons/c03d.png'

export default function DayNine() {
  const [ninthRecord, setNinthRecord] = useState({});

  useEffect(() => {
    const ninthDetail = info.data.filter((it) => it.wind_cdir === "WSW");
    setNinthRecord(ninthDetail[0]);
  }, []);

  return (
    <div>
      <h3>Day Nine</h3>

      <h6>
        Location: {info.city_name}, Longitude: {info.lon}, Timezone: {info.timezone}, Latitude: {info.lat},
        Country Code: {info.country_code}, State Code: {info.state_code}.
        Weather code: {ninthRecord?.weather?.code}. 
        Weather Description: {ninthRecord?.weather?.description}
      </h6>

      <p>
        For {ninthRecord?.valid_date} at this time {ninthRecord?.datetime}
        There is a average temperature of {ninthRecord?.temp} and a low temperature 
        of {ninthRecord?.low_temp} and a high temperature of {ninthRecord?.high_temp}. 
        There's a max temperature of {ninthRecord?.max_temp} and a min temperature 
        of {ninthRecord?.min_temp}. The app max temperature is {ninthRecord?.app_max_temp} and 
        the app min temperature is {ninthRecord?.app_min_temp}.

        The wind CDR is {ninthRecord?.wind_cdir} and the full CDR is {ninthRecord?.wind_cdir_full}. 
        The wind direction is currently {ninthRecord?.wind_dir}. The wind speed is currently 
        at {ninthRecord?.wind_spd} with gust speeds expected to be {ninthRecord?.wind_gust_spd}.

        Precipitation is {ninthRecord?.precip}. Snow is currently at {ninthRecord?.snow} and 
        snow depth {ninthRecord?.snow_depth}. The clouds are {ninthRecord?.clouds}. The hi clouds 
        are currently at {ninthRecord?.clouds_hi} and the mid clouds {ninthRecord?.clouds_mid} are  
        and low clouds are at {ninthRecord?.clouds_low}. This means vis is currently {ninthRecord?.vis}.

        Sunrise is set for {ninthRecord?.sunrise_ts} and sunset for {ninthRecord?.sunset_ts}. 
        Moonrise is currently timed for {ninthRecord?.moonrise_ts} and scheduled to set
        at {ninthRecord?.moonset_ts}. The moon phase is currently {ninthRecord?.moon_phase} and 
        the moon phase lunation is {ninthRecord?.moon_phase_lunation}.

        Other information: rh is currently {ninthRecord?.rh}. The pres is {ninthRecord?.pres}. 
        The ozone is currently at {ninthRecord?.ozone}. The ts is {ninthRecord?.ts}
        and the pop is {ninthRecord?.pop}. The slp is at {ninthRecord?.slp}. The dewpt 
        is {ninthRecord?.dewpt} UV radiation is expected to be {ninthRecord?.uv}.
      </p>

      <img src={icon} className="icon"></img>
    </div>
  )
}


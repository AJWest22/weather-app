import React, {useEffect, useState} from 'react'
import info from '../weather-data.json'
import icon from '../icons/c04d.png'

// Gets the weather for day 12 from the JSON

const DayTwelve = () => {
  const [twelfthRecord, setTwelfthRecord] = useState({});

  useEffect(() => {
    const twelfthDetail = info.data.filter((it) => it.wind_cdir === "E");
    setTwelfthRecord(twelfthDetail[0]);
  }, []);

  return (
    <div>
      {/* Displays a detailed look at day 12's forecast */}
      <h3>Day Twelve</h3>
      
      <h6>
        Location: {info.city_name}, Longitude: {info.lon}, Timezone: {info.timezone}, Latitude: {info.lat},
        Country Code: {info.country_code}, State Code: {info.state_code}.
        Weather code: {twelfthRecord?.weather?.code}. 
        Weather Description: {twelfthRecord?.weather?.description}
      </h6>

      <p>
        For {twelfthRecord?.valid_date} at this time {twelfthRecord?.datetime}
        There is a average temperature of {twelfthRecord?.temp} and a low temperature 
        of {twelfthRecord?.low_temp} and a high temperature of {twelfthRecord?.high_temp}. 
        There's a max temperature of {twelfthRecord?.max_temp} and a min temperature 
        of {twelfthRecord?.min_temp}. The app max temperature is {twelfthRecord?.app_max_temp} and 
        the app min temperature is {twelfthRecord?.app_min_temp}.

        The wind CDR is {twelfthRecord?.wind_cdir} and the full CDR is {twelfthRecord?.wind_cdir_full}. 
        The wind direction is currently {twelfthRecord?.wind_dir}. The wind speed is currently 
        at {twelfthRecord?.wind_spd} with gust speeds expected to be {twelfthRecord?.wind_gust_spd}.

        Precipitation is {twelfthRecord?.precip}. Snow is currently at {twelfthRecord?.snow} and 
        snow depth {twelfthRecord?.snow_depth}. The clouds are {twelfthRecord?.clouds}. The hi clouds 
        are currently at {twelfthRecord?.clouds_hi} and the mid clouds are {twelfthRecord?.clouds_mid} 
        and low clouds are at {twelfthRecord?.clouds_low}. This means vis is currently {twelfthRecord?.vis}.

        Sunrise is set for {twelfthRecord?.sunrise_ts} and sunset for {twelfthRecord?.sunset_ts}. 
        Moonrise is currently timed for {twelfthRecord?.moonrise_ts} and scheduled to set
        at {twelfthRecord?.moonset_ts}. The moon phase is currently {twelfthRecord?.moon_phase} and 
        the moon phase lunation is {twelfthRecord?.moon_phase_lunation}.

        Other information: rh is currently {twelfthRecord?.rh}. The pres is {twelfthRecord?.pres}. 
        The ozone is currently at {twelfthRecord?.ozone}. The ts is {twelfthRecord?.ts}
        and the pop is {twelfthRecord?.pop}. The slp is at {twelfthRecord?.slp}. The dewpt 
        is {twelfthRecord?.dewpt} UV radiation is expected to be {twelfthRecord?.uv}. The 
        Max DHI is {twelfthRecord?.max_dhi}.
      </p>

      <img src={icon} className="icon"></img>
    </div>
  )
}

export default DayTwelve
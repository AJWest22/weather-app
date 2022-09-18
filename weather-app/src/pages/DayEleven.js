import React, {useEffect, useState} from 'react'
import info from '../weather-data.json'
import icon from '../icons/c03d.png'

export default function DayEleven() {
  const [eleventhRecord, setEleventhRecord] = useState({});

  useEffect(() => {
    const eleventhDetail = info.data.filter((it) => it.wind_cdir === "SSW");
    setEleventhRecord(eleventhDetail[0]);
  }, []);

  return (
    <div>
      <h3>Day Eleven</h3>

      <h6>
        Location: {info.city_name}, Longitude: {info.lon}, Timezone: {info.timezone}, Latitude: {info.lat},
        Country Code: {info.country_code}, State Code: {info.state_code}.
        Weather code: {eleventhRecord?.weather?.code}. 
        Weather Description: {eleventhRecord?.weather?.description}
      </h6>

      <p>
        For {eleventhRecord?.valid_date} at this time {eleventhRecord?.datetime}
        There is a average temperature of {eleventhRecord?.temp} and a low temperature 
        of {eleventhRecord?.low_temp} and a high temperature of {eleventhRecord?.high_temp}. 
        There's a max temperature of {eleventhRecord?.max_temp} and a min temperature 
        of {eleventhRecord?.min_temp}. The app max temperature is {eleventhRecord?.app_max_temp} and 
        the app min temperature is {eleventhRecord?.app_min_temp}.

        The wind CDR is {eleventhRecord?.wind_cdir} and the full CDR is {eleventhRecord?.wind_cdir_full}. 
        The wind direction is currently {eleventhRecord?.wind_dir}. The wind speed is currently 
        at {eleventhRecord?.wind_spd} with gust speeds expected to be {eleventhRecord?.wind_gust_spd}.

        Precipitation is {eleventhRecord?.precip}. Snow is currently at {eleventhRecord?.snow} and 
        snow depth {eleventhRecord?.snow_depth}. The clouds are {eleventhRecord?.clouds}. The hi clouds 
        are currently at {eleventhRecord?.clouds_hi} and the mid clouds are {eleventhRecord?.clouds_mid} and 
        low clouds are at {eleventhRecord?.clouds_low}. This means vis is currently {eleventhRecord?.vis}.

        Sunrise is set for {eleventhRecord?.sunrise_ts} and sunset for {eleventhRecord?.sunset_ts}. 
        Moonrise is currently timed for {eleventhRecord?.moonrise_ts} and scheduled to set
        at {eleventhRecord?.moonset_ts}. The moon phase is currently {eleventhRecord?.moon_phase} and 
        the moon phase lunation is {eleventhRecord?.moon_phase_lunation}.

        Other information: rh is currently {eleventhRecord?.rh}. The pres is {eleventhRecord?.pres}. 
        The ozone is currently at {eleventhRecord?.ozone}. The ts is {eleventhRecord?.ts}
        and the pop is {eleventhRecord?.pop}. The slp is at {eleventhRecord?.slp}. The dewpt 
        is {eleventhRecord?.dewpt} UV radiation is expected to be {eleventhRecord?.uv}.
      </p>

      <img src={icon} className="icon"></img>
    </div>
  )
}


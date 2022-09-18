import React, {useEffect, useState} from 'react'
import info from '../weather-data.json'
import icon from '../icons/c03d.png'

export default function DayFourteen() {
  const [fourteenthRecord, setFourteenthRecord] = useState({});

  useEffect(() => {
    const fourteenthDetail = info.data.filter((it) => it.rh === 79);
    setFourteenthRecord(fourteenthDetail[0]);
  }, []);

  return (
    <div>
      <h3>Day Fourteen</h3>

      <h6>
        Location: {info.city_name}, Longitude: {info.lon}, Timezone: {info.timezone}, Latitude: {info.lat},
        Country Code: {info.country_code}, State Code: {info.state_code}.
        Weather code: {fourteenthRecord?.weather?.code}. 
        Weather Description: {fourteenthRecord?.weather?.description}
      </h6>

      <p>
        For {fourteenthRecord?.valid_date} at this time {fourteenthRecord?.datetime}
        There is a average temperature of {fourteenthRecord?.temp} and a low temperature 
        of {fourteenthRecord?.low_temp} and a high temperature of {fourteenthRecord?.high_temp}. 
        There's a max temperature of {fourteenthRecord?.max_temp} and a min temperature 
        of {fourteenthRecord?.min_temp}. The app max temperature is {fourteenthRecord?.app_max_temp} and 
        the app min temperature is {fourteenthRecord?.app_min_temp}.

        The wind CDR is {fourteenthRecord?.wind_cdir} and the full CDR is {fourteenthRecord?.wind_cdir_full}. 
        The wind direction is currently {fourteenthRecord?.wind_dir}. The wind speed is currently 
        at {fourteenthRecord?.wind_spd} with gust speeds expected to be {fourteenthRecord?.wind_gust_spd}.

        Precipitation is {fourteenthRecord?.precip}. Snow is currently at {fourteenthRecord?.snow} and 
        snow depth {fourteenthRecord?.snow_depth}. The clouds are {fourteenthRecord?.clouds}. The hi clouds 
        are currently at {fourteenthRecord?.clouds_hi} and the mid clouds {fourteenthRecord?.clouds_mid} are 
        and low clouds are at {fourteenthRecord?.clouds_low}. This means vis is currently {fourteenthRecord?.vis}.

        Sunrise is set for {fourteenthRecord?.sunrise_ts} and sunset for {fourteenthRecord?.sunset_ts}. 
        Moonrise is currently timed for {fourteenthRecord?.moonrise_ts} and scheduled to set
        at {fourteenthRecord?.moonset_ts}. The moon phase is currently {fourteenthRecord?.moon_phase} and 
        the moon phase lunation is {fourteenthRecord?.moon_phase_lunation}.

        Other information: rh is currently {fourteenthRecord?.rh}. The pres is {fourteenthRecord?.pres}. 
        The ozone is currently at {fourteenthRecord?.ozone}. The ts is {fourteenthRecord?.ts}
        and the pop is {fourteenthRecord?.pop}. The slp is at {fourteenthRecord?.slp}. The dewpt 
        is {fourteenthRecord?.dewpt} UV radiation is expected to be {fourteenthRecord?.uv}. The 
        Max DHI is {fourteenthRecord?.max_dhi}.
      </p>

      <img src={icon} className="icon"></img>
    </div>
  )
}


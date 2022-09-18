import React, {useEffect, useState} from 'react'
import info from '../weather-data.json'
import icon from '../icons/c03d.png'

// Gets the weather for day 13 from the JSON

const DayThirteen = () => {
  const [thirteenthRecord, setThirteenthRecord] = useState({});

  useEffect(() => {
    const thirteenthDetail = info.data.filter((it) => it.rh === 86);
    setThirteenthRecord(thirteenthDetail[0]);
  }, []);

  return (
    <div>
      {/* Displays a detailed look at day 13's forecast */}
      <h3>Day Thirteen</h3>

      <h6>
        Location: {info.city_name}, Longitude: {info.lon}, Timezone: {info.timezone}, Latitude: {info.lat},
        Country Code: {info.country_code}, State Code: {info.state_code}.
        Weather code: {thirteenthRecord?.weather?.code}. 
        Weather Description: {thirteenthRecord?.weather?.description}
      </h6>

      <p>
        For {thirteenthRecord?.valid_date} at this time {thirteenthRecord?.datetime}
        There is a average temperature of {thirteenthRecord?.temp} and a low temperature 
        of {thirteenthRecord?.low_temp} and a high temperature of {thirteenthRecord?.high_temp}. 
        There's a max temperature of {thirteenthRecord?.max_temp} and a min temperature 
        of {thirteenthRecord?.min_temp}. The app max temperature is {thirteenthRecord?.app_max_temp} and 
        the app min temperature is {thirteenthRecord?.app_min_temp}.

        The wind CDR is {thirteenthRecord?.wind_cdir} and the full CDR is {thirteenthRecord?.wind_cdir_full}. 
        The wind direction is currently {thirteenthRecord?.wind_dir}. The wind speed is currently 
        at {thirteenthRecord?.wind_spd} with gust speeds expected to be {thirteenthRecord?.wind_gust_spd}.

        Precipitation is {thirteenthRecord?.precip}. Snow is currently at {thirteenthRecord?.snow} and 
        snow depth {thirteenthRecord?.snow_depth}. The clouds are {thirteenthRecord?.clouds}. The hi clouds 
        are currently at {thirteenthRecord?.clouds_hi} and the mid clouds {thirteenthRecord?.clouds_mid} are 
        and low clouds are at {thirteenthRecord?.clouds_low}. This means vis is currently {thirteenthRecord?.vis}.

        Sunrise is set for {thirteenthRecord?.sunrise_ts} and sunset for {thirteenthRecord?.sunset_ts}. 
        Moonrise is currently timed for {thirteenthRecord?.moonrise_ts} and scheduled to set
        at {thirteenthRecord?.moonset_ts}. The moon phase is currently {thirteenthRecord?.moon_phase} and 
        the moon phase lunation is {thirteenthRecord?.moon_phase_lunation}.

        Other information: rh is currently {thirteenthRecord?.rh}. The pres is {thirteenthRecord?.pres}. 
        The ozone is currently at {thirteenthRecord?.ozone}. The ts is {thirteenthRecord?.ts}
        and the pop is {thirteenthRecord?.pop}. The slp is at {thirteenthRecord?.slp}. The dewpt 
        is {thirteenthRecord?.dewpt} UV radiation is expected to be {thirteenthRecord?.uv}. The 
        Max DHI is {thirteenthRecord?.max_dhi}.
      </p>

      <img src={icon} className="icon"></img>
    </div>
  )
}

export default DayThirteen
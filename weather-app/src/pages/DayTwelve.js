import React, {useEffect, useState} from 'react'
import info from '../weather-data.json'
import icon from '../icons/c04d.png'

const DayTwelve = () => {
  const [twelfthRecord, setTwelfthRecord] = useState({});

  useEffect(() => {
    const twelfthDetail = info.data.filter((it) => it.wind_cdir === "E");
    setTwelfthRecord(twelfthDetail[0]);
  }, []);

  return (
    <div>
      <h3>Day Twelve</h3>
      
      <h6>
        Weather code: {twelfthRecord?.weather?.code}. 
        Weather Description: {twelfthRecord?.weather?.description}
      </h6>

      <p>
        For {twelfthRecord?.valid_date} at this time {twelfthRecord?.datetime}
        There is a average temperature of {twelfthRecord?.temp} and a low temperature 
        of {twelfthRecord?.low_temp} and a high temperature of {twelfthRecord?.high_temp}. 
        There's a max temperature of {twelfthRecord?.max_temp} and a mintemperature 
        of {twelfthRecord?.min_temp}. The app max temperature is {twelfthRecord?.app_max_temp} and 
        the app min temperature is {twelfthRecord?.app_min_temp}.

        The wind CDR is {twelfthRecord?.wind_cdir} and the full CDR is {twelfthRecord?.wind_cdir_full}. 
        The wind direction is currently {twelfthRecord?.wind_dir}. The wind speed is currently 
        at {twelfthRecord?.wind_spd} with gust speeds expected to be {twelfthRecord?.wind_gust_spd}.

        Precipitation is {twelfthRecord?.precip}. Snow is currently at {twelfthRecord?.snow} and 
        snow depth {twelfthRecord?.snow_depth}. The clouds are {twelfthRecord?.clouds}. The hi clouds 
        are currently at {twelfthRecord?.clouds_hi}and the mid cloudsare  and low clouds are 
        at {twelfthRecord?.clouds_low}. This means vis is currently {twelfthRecord?.vis}.

        Sunrise is set for {twelfthRecord?.sunrise_ts} and sunset for {twelfthRecord?.sunset_ts}. 
        Moonrise is currently timed for {twelfthRecord?.moonrise_ts} and scheduled to set
        at {twelfthRecord?.moonset_ts}. The moon phase is currently {twelfthRecord?.moon_phase} and 
        the moon phase lunation is {twelfthRecord?.moon_phase_lunation}.

        Other information: rh is currently {twelfthRecord?.rh}. The pres is {twelfthRecord?.pres}. 
        The ozone is currently at {twelfthRecord?.ozone}. The ts is {twelfthRecord?.ts}
        and the pop is {twelfthRecord?.pop}. The slp is at {twelfthRecord?.slp}. The dewpt 
        is {twelfthRecord?.dewpt} UV radiation is expected to be {twelfthRecord?.uv}.
      </p>

      <img src={icon} width="100px" height="100px"></img>
    </div>
  )
}

export default DayTwelve
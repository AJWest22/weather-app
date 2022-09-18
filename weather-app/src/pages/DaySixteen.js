import React, {useEffect, useState} from 'react'
import info from '../weather-data.json'

export default function DaySixteen() {
  const [sixteenthRecord, setSixteenthRecord] = useState({});

  useEffect(() => {
    const sixteenthDetail = info.data.filter((it) => it.rh === 84);
    setSixteenthRecord(sixteenthDetail[0]);
  }, []);
  return (
    <div>
      <h3>Day Sixteen</h3>

      <p>
        Weather code: {sixteenthRecord?.weather?.code}. 
        Weather Description: {sixteenthRecord?.weather?.description}
      </p>

      <p>
        For {sixteenthRecord?.valid_date} at this time {sixteenthRecord?.datetime}
        There is a average temperature of {sixteenthRecord?.temp} and a low temperature 
        of {sixteenthRecord?.low_temp} and a high temperature of {sixteenthRecord?.high_temp}. 
        There's a max temperature of {sixteenthRecord?.max_temp} and a mintemperature 
        of {sixteenthRecord?.min_temp}. The app max temperature is {sixteenthRecord?.app_max_temp} and 
        the app min temperature is {sixteenthRecord?.app_min_temp}.

        The wind CDR is {sixteenthRecord?.wind_cdr} and the full CDR is {sixteenthRecord?.wind_cdr_full}. 
        The wind direction is currently {sixteenthRecord?.wind_dir}. The wind speed is currently 
        at {sixteenthRecord?.wind_spd} with gust speeds expected to be {sixteenthRecord?.wind_gust_spd}.

        Precipitation is {sixteenthRecord?.precip}. Snow is currently at {sixteenthRecord?.snow} and 
        snow depth {sixteenthRecord?.snow_depth}. The clouds are {sixteenthRecord?.clouds}. The hi clouds 
        are currently at {sixteenthRecord?.clouds_hi}and the mid cloudsare  and low clouds are 
        at {sixteenthRecord?.clouds_low}. This means vis is currently {sixteenthRecord?.vis}.

        Sunrise is set for {sixteenthRecord?.sunrise_ts} and sunset for {sixteenthRecord?.sunset_ts}. 
        Moonrise is currently timed for {sixteenthRecord?.moonrise_ts} and scheduled to set
        at {sixteenthRecord?.moonset_ts}. The moon phase is currently {sixteenthRecord?.moon_phase} and 
        the moon phase lunation is {sixteenthRecord?.moon_phase_lunation}.

        Other information: rh is currently {sixteenthRecord?.rh}. The pres is {sixteenthRecord?.pres}. 
        The ozone is currently at {sixteenthRecord?.ozone}. The ts is {sixteenthRecord?.ts}
        and the pop is {sixteenthRecord?.pop}. The slp is at {sixteenthRecord?.slp}. The dewpt 
        is {sixteenthRecord?.dewpt} UV radiation is expected to be {sixteenthRecord?.uv}.
      </p>
    </div>
  )
}

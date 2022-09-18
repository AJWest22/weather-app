import React, {useState, useEffect} from 'react'
import info from '../weather-data.json'
import icon from '../icons/c03d.png'
import'../components/GroupOne.js'

export default function DayFour() {
  const [fourthRecord, setFourthRecord] = useState({});

  useEffect(() => {
    const fourthDetail = info.data.filter((it) => it.wind_cdir === "NNW");
    setFourthRecord(fourthDetail[0]);
  }, []);
  return (
    <div>
      <h3>Day Four</h3>
      <p>
        Weather code: {fourthRecord?.weather?.code}. 
        Weather Description: {fourthRecord?.weather?.description}
      </p>

      <p>
        For {fourthRecord?.valid_date} at this time {fourthRecord?.datetime}
        There is a average temperature of {fourthRecord?.temp} and a low temperature 
        of {fourthRecord?.low_temp} and a high temperature of {fourthRecord?.high_temp}. 
        There's a max temperature of {fourthRecord?.max_temp} and a mintemperature 
        of {fourthRecord?.min_temp}. The app max temperature is {fourthRecord?.app_max_temp} and 
        the app min temperature is {fourthRecord?.app_min_temp}.

        The wind CDR is {fourthRecord?.wind_cdr} and the full CDR is {fourthRecord?.wind_cdr_full}. 
        The wind direction is currently {fourthRecord?.wind_dir}. The wind speed is currently 
        at {fourthRecord?.wind_spd} with gust speeds expected to be {fourthRecord?.wind_gust_spd}.

        Precipitation is {fourthRecord?.precip}. Snow is currently at {fourthRecord?.snow} and 
        snow depth {fourthRecord?.snow_depth}. The clouds are {fourthRecord?.clouds}. The hi clouds 
        are currently at {fourthRecord?.clouds_hi}and the mid cloudsare  and low clouds are 
        at {fourthRecord?.clouds_low}. This means vis is currently {fourthRecord?.vis}.

        Sunrise is set for {fourthRecord?.sunrise_ts} and sunset for {fourthRecord?.sunset_ts}. 
        Moonrise is currently timed for {fourthRecord?.moonrise_ts} and scheduled to set
        at {fourthRecord?.moonset_ts}. The moon phase is currently {fourthRecord?.moon_phase} and 
        the moon phase lunation is {fourthRecord?.moon_phase_lunation}.

        Other information: rh is currently {fourthRecord?.rh}. The pres is {fourthRecord?.pres}. 
        The ozone is currently at {fourthRecord?.ozone}. The ts is {fourthRecord?.ts}
        and the pop is {fourthRecord?.pop}. The slp is at {fourthRecord?.slp}. The dewpt 
        is {fourthRecord?.dewpt} UV radiation is expected to be {fourthRecord?.uv}.
      </p>

      <img src={icon} width="100px" height="100px"></img>
    </div>
  )
}

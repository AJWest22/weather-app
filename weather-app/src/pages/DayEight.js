import React, {useEffect, useState} from 'react'
import info from '../weather-data.json'

export default function DayEight() {
  const [eighthRecord, setEighthRecord] = useState({});

  useEffect(() => {
    const eighthDetail = info.data.filter((it) => it.wind_cdir === "NW");
    setEighthRecord(eighthDetail[0]);
  }, []);
  return (
    <div>DayEight</div>
  )
}

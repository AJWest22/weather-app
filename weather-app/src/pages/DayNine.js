import React, {useEffect, useState} from 'react'
import info from '../weather-data.json'

export default function DayNine() {
  const [ninthRecord, setNinthRecord] = useState({});

  useEffect(() => {
    const ninthDetail = info.data.filter((it) => it.wind_cdir === "W");
    setNinthRecord(ninthDetail[0]);
  }, []);
  return (
    <div>DayNine</div>
  )
}


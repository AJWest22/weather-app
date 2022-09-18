import React, {useEffect, useState} from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import info from '../weather-data.json'
import'../components/GroupOne.js'


export default function DayTwo() {
  const [detailedRecord, setDetailedRecord] = useState({});

  useEffect(() => {
    const detail = info.data.filter((it) => it.wind_dir === 289);
    setDetailedRecord(detail[0]);
  }, []);
  return (
    <div>
      <h3>Tomorrow's Forecast</h3>
      <p className="group-text">{detailedRecord.temp}</p>
    </div>
  )
}

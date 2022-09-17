import React from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import info from '../weather-data.json'
import'../components/GroupOne.js'
import filteredRecord from '../components/GroupOne.js'


export default function DayTwo() {
  return (
    <div>
      <h3>Tomorrow's Forecast</h3>
      <p>{filteredRecord.wind_dir}</p>
    </div>
  )
}

import React from 'react'
import info from '../weather-data.json'
import './CityWeather.css'


export default function CityWeather() {
  return (
    <div>
      <h2>{info.city_name}</h2>
      {info.data.map((it, i) => (
        <p key={i}>{it.weather.description}{it.moon_phase_lunation}</p>
      ))}

      
    </div>
  )
}

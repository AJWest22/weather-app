import React from 'react'
import info from '../weather-data.json'
import '../CityWeather.css'


export default function CityWeather() {
  return (
    <div>
      <h1>{info.city_name}</h1>
      {info.data.map((it, i) => (
        <p key={i}>{it.weather.description}{it.moon_phase_lunation}</p>
      ))}

      
    </div>
  )
}

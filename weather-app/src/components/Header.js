import React from 'react'
import './Header.css'
import icon from '../icons/c02d.png'

export default function Header() {
  return (
    <div id="header">
        <h1>React Weather App</h1>
        <img src={icon} alt="weather-icon" width="100" height="100"></img>
    </div>
  )
}


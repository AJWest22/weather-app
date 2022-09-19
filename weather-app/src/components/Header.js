import React from 'react'
import './Header.css'
import icon from '../icons/c02d.png'

/* Code for displaying the Header of the App */

export default function Header() {
  return (
    <div id="header">
      <h1>React Weather App</h1>
      <img id="header-icon" src={icon} alt="weather-icon" width="100" height="100"></img>
    </div>
  )
}


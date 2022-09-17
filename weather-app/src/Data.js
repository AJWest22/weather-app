import React from 'react'
import Header from './components/Header'
import CityWeather from './components/CityWeather'
import GroupOne from './components/GroupOne' 
import GroupTwo from './components/GroupTwo' 
import GroupThree from './components/GroupThree'

const Data = () => {
  return (
    <div>
        <Header />
        <CityWeather />
        <GroupOne />
        <GroupTwo />
        <GroupThree />
    </div>
  )
}

export default Data
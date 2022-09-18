import React, { useEffect, useState } from 'react';
import {Routes, Route, HashRouter, Link} from 'react-router-dom'
import info from '../weather-data.json'
import DayTwo from '../pages/DayTwo.js'
import DayThree from '../pages/DayThree.js'
import DayFour from '../pages/DayFour.js'
import DayFive from '../pages/DayFive.js'
import DaySix from '../pages/DaySix.js'
import './GroupOne.css'

export default function GroupOne() {
    const [filteredRecord, setFilteredRecord] = useState({});
    const [secondFilteredRecord, setSecondFilteredRecord] = useState({});
    const [thirdFilteredRecord, setThirdFilteredRecord] = useState({});
    const [fourthFilteredRecord, setFourthFilteredRecord] = useState({});
    const [fifthFilteredRecord, setFifthFilteredRecord] = useState({});


    useEffect(() => {
      const record = info.data.filter((it) => it.wind_dir === 289);
      const secondRecord = info.data.filter((it) => it.wind_cdir === "NW");
      const thirdRecord = info.data.filter((it) => it.wind_cdir === "NNW");
      const fourthRecord = info.data.filter((it) => it.rh === 72);
      const fifthRecord = info.data.filter((it) => it.rh === 74);
      setFilteredRecord(record[0]);
      setSecondFilteredRecord(secondRecord[0]);
      setThirdFilteredRecord(thirdRecord[0]);
      setFourthFilteredRecord(fourthRecord[0]);
      setFifthFilteredRecord(fifthRecord[0]);

    }, []);
  
    return (
    <div id="group-one-container">
      <div id="forecast-container">
        <h2 id="forecast">Forecast for the Next Five Days:</h2>
      </div>
      <div className="group-flex">
        <div className="groups">
          <h5>Tomorrow's Forecast</h5>
          <p className="group-text">Wind Direction: {filteredRecord.wind_dir}</p>
          <p className="group-text">Low Temperature: {filteredRecord.low_temp}</p>
          <p className="group-text">Max Temperature: {filteredRecord.max_temp}</p>
          <Link to="/pages/daytwo">Read More</Link>
        </div>
        <div className="groups">
          <h5>Day 3</h5>
          <p className="group-text">Moonrise Ts: {secondFilteredRecord.moonrise_ts}</p>
          <p className="group-text">Wind CDIR: {secondFilteredRecord.wind_cdir}</p>
          <p className="group-text">High Temperature: {secondFilteredRecord.high_temp}</p>
          <Link to="/pages/daythree">Read More</Link>
        </div>
        <div className="groups">
          <h5>Day 4</h5>
          <p className="group-text">Wind Dir: {thirdFilteredRecord.wind_dir}</p>
          <p className="group-text">Clouds Hi: {thirdFilteredRecord.clouds_hi}</p>
          <p className="group-text">Precipitation: {thirdFilteredRecord.precip}</p>
          <Link to="/pages/dayfour">Read More</Link>
        </div>
        <div className="groups">
          <h5>Day 5</h5>
          <p className="group-text">High Temperature: {fourthFilteredRecord.high_temp}</p>
          <p className="group-text">Clouds: {fourthFilteredRecord.clouds}</p>
          <p className="group-text">App Min Temperature: {fourthFilteredRecord.app_min_temp}</p>
          <Link to="/pages/dayfive">Read More</Link>
        </div>
        <div className="groups">
          <h5>Day 6</h5>
          <p className="group-text">Low Temperature: {fifthFilteredRecord.low_temp}</p>
          <p className="group-text">Max Temperature: {fifthFilteredRecord.max_temp}</p>
          <p className="group-text">Temperature: {fifthFilteredRecord.temp}</p>
          <Link to="/pages/daysix">Read More</Link>
        </div>
      </div>
    </div>
    );
}

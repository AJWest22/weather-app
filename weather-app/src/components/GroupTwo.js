import React, { useEffect, useState } from 'react'
import {Routes, Route, HashRouter, Link} from 'react-router-dom'
import info from '../weather-data.json'
import './GroupTwo.css'

export default function GroupTwo() {
    const [sixthFilteredRecord, setSixthFilteredRecord] = useState({});
    const [seventhFilteredRecord, setSeventhFilteredRecord] = useState({});
    const [eighthFilteredRecord, setEighthFilteredRecord] = useState({});
    const [ninthFilteredRecord, setNinthFilteredRecord] = useState({});
    const [tenthFilteredRecord, setTenthFilteredRecord] = useState({});

    useEffect(() => {
        const sixthRecord = info.data.filter((it) => it.rh === 76);
        const seventhRecord = info.data.filter((it) => it.wind_cdir === "W");
        const eighthRecord= info.data.filter((it) => it.wind_cdir === "WSW");
        const ninthRecord = info.data.filter((it) => it.wind_cdir === "SW");
        const tenthRecord = info.data.filter((it) => it.wind_cdir === "SSW");
        setSixthFilteredRecord(sixthRecord[0]);
        setSeventhFilteredRecord(seventhRecord[0]);
        setEighthFilteredRecord(eighthRecord[0]);
        setNinthFilteredRecord(ninthRecord[0]);
        setTenthFilteredRecord(tenthRecord[0]);
  
    }, []);

  return (
    <div>
      <div id="forecast-container-two">
        {/* Displays an overview of the next 7-11 days forecast */}
        <h2 id="forecast-two">Forecast for Week 2:</h2>
      </div>
      <div className="group-flex">
        <div className="group-two">
          <h5>Day 7</h5>
          <p className="group-text">Wind Dir: {sixthFilteredRecord.wind_dir}</p>
          <p className="group-text">Low Temperature: {sixthFilteredRecord.low_temp}</p>
          <p className="group-text">Max Temperature: {sixthFilteredRecord.max_temp}</p>
          <Link to="/pages/dayseven">Read More</Link>
        </div>
        <div className="group-two">
          <h5>Day 8</h5>
          <p className="group-text">Moonrise Ts: {seventhFilteredRecord.moonrise_ts}</p>
          <p className="group-text">Wind CDIR: {seventhFilteredRecord.wind_cdir}</p>
          <p className="group-text">High Temperature: {seventhFilteredRecord.high_temp}</p>
          <Link to="/pages/dayeight">Read More</Link>
        </div>
        <div className="group-two">
          <h5>Day 9</h5>
          <p className="group-text">Wind Dir: {eighthFilteredRecord.wind_dir}</p>
          <p className="group-text">Clouds Hi: {eighthFilteredRecord.clouds_hi}</p>
          <p className="group-text">Precipitation: {eighthFilteredRecord.precip}</p>
          <Link to="/pages/daynine">Read More</Link>
        </div>
        <div className="group-two">
          <h5>Day 10</h5>
          <p className="group-text">High Temperature: {ninthFilteredRecord.high_temp}</p>
          <p className="group-text">Clouds: {ninthFilteredRecord.clouds}</p>
          <p className="group-text">App Min Temperature: {ninthFilteredRecord.app_min_temp}</p>
          <Link to="/pages/dayten">Read More</Link>
        </div>
        <div className="group-two">
          <h5>Day 11</h5>
          <p className="group-text">Low Temperature: {tenthFilteredRecord.low_temp}</p>
          <p className="group-text">Max Temperature: {tenthFilteredRecord.max_temp}</p>
          <p className="group-text">Temperature: {tenthFilteredRecord.temp}</p>
          <Link to="/pages/dayeleven">Read More</Link>
        </div>
      </div>
    </div>
  )
}

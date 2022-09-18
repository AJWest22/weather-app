import React, { useEffect, useState } from 'react'
import {Routes, Route, HashRouter, Link} from 'react-router-dom'
import info from '../weather-data.json'
import './GroupTwo.css'

export default function GroupTwo() {
    const [seventhFilteredRecord, setSixthFilteredRecord] = useState({});
    const [eighthFilteredRecord, setSeventhFilteredRecord] = useState({});
    const [ninthFilteredRecord, setEighthFilteredRecord] = useState({});
    const [tenthFilteredRecord, setNinthFilteredRecord] = useState({});
    const [eleventhFilteredRecord, setTenthFilteredRecord] = useState({});

    useEffect(() => {
        const seventhRecord = info.data.filter((it) => it.rh === 74);
        const eighthRecord = info.data.filter((it) => it.wind_cdir === "NW");
        const ninthRecord= info.data.filter((it) => it.wind_cdir === "W");
        const tenthRecord = info.data.filter((it) => it.wind_cdir === "WSW");
        const eleventhRecord = info.data.filter((it) => it.wind_cdir === "SW");
        setSixthFilteredRecord(seventhRecord[0]);
        setSeventhFilteredRecord(eighthRecord[0]);
        setEighthFilteredRecord(ninthRecord[0]);
        setNinthFilteredRecord(tenthRecord[0]);
        setTenthFilteredRecord(eleventhRecord[0]);
  
    }, []);

  return (
    <div>
      <div id="forecast-container-two">
        <h2 id="forecast-two">Forecast for Week 2:</h2>
      </div>
      <div className="group-flex">
        <div className="group-two">
          <h5>Day 7</h5>
          <p className="group-text">{seventhFilteredRecord.wind_dir}</p>
          <p className="group-text">{seventhFilteredRecord.low_temp}</p>
          <p className="group-text">{seventhFilteredRecord.max_temp}</p>
          <Link to="/pages/dayseven">Read More</Link>
        </div>
        <div className="group-two">
          <h5>Day 8</h5>
          <p className="group-text">{eighthFilteredRecord.moonrise_ts}</p>
          <p className="group-text">{eighthFilteredRecord.wind_cdir}</p>
          <p className="group-text">{eighthFilteredRecord.high_temp}</p>
          <Link to="/pages/dayeight">Read More</Link>
        </div>
        <div className="group-two">
          <h5>Day 9</h5>
          <p className="group-text">{ninthFilteredRecord.wind_dir}</p>
          <p className="group-text">{ninthFilteredRecord.clouds_hi}</p>
          <p className="group-text">{ninthFilteredRecord.precip}</p>
          <Link to="/pages/daynine">Read More</Link>
        </div>
        <div className="group-two">
          <h5>Day 10</h5>
          <p className="group-text">{tenthFilteredRecord.high_temp}</p>
          <p className="group-text">{tenthFilteredRecord.clouds}</p>
          <p className="group-text">{tenthFilteredRecord.app_min_temp}</p>
          <Link to="/pages/dayten">Read More</Link>
        </div>
        <div className="group-two">
          <h5>Day 11</h5>
          <p className="group-text">{eleventhFilteredRecord.low_temp}</p>
          <p className="group-text">{eleventhFilteredRecord.max_temp}</p>
          <p className="group-text">{eleventhFilteredRecord.temp}</p>
          <Link to="/pages/dayeleven">Read More</Link>
        </div>
      </div>
    </div>
  )
}

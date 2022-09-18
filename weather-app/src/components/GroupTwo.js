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
        <h2 id="forecast-two">Forecast for Week 2:</h2>
      </div>
      <div className="group-flex">
        <div className="group-two">
          <h5>Day 7</h5>
          <p className="group-text">{sixthFilteredRecord.wind_dir}</p>
          <p className="group-text">{sixthFilteredRecord.low_temp}</p>
          <p className="group-text">{sixthFilteredRecord.max_temp}</p>
          <Link to="/pages/dayseven">Read More</Link>
        </div>
        <div className="group-two">
          <h5>Day 8</h5>
          <p className="group-text">{seventhFilteredRecord.moonrise_ts}</p>
          <p className="group-text">{seventhFilteredRecord.wind_cdir}</p>
          <p className="group-text">{seventhFilteredRecord.high_temp}</p>
          <Link to="/pages/dayeight">Read More</Link>
        </div>
        <div className="group-two">
          <h5>Day 9</h5>
          <p className="group-text">{eighthFilteredRecord.wind_dir}</p>
          <p className="group-text">{eighthFilteredRecord.clouds_hi}</p>
          <p className="group-text">{eighthFilteredRecord.precip}</p>
          <Link to="/pages/daynine">Read More</Link>
        </div>
        <div className="group-two">
          <h5>Day 10</h5>
          <p className="group-text">{ninthFilteredRecord.high_temp}</p>
          <p className="group-text">{ninthFilteredRecord.clouds}</p>
          <p className="group-text">{ninthFilteredRecord.app_min_temp}</p>
          <Link to="/pages/dayten">Read More</Link>
        </div>
        <div className="group-two">
          <h5>Day 11</h5>
          <p className="group-text">{tenthFilteredRecord.low_temp}</p>
          <p className="group-text">{tenthFilteredRecord.max_temp}</p>
          <p className="group-text">{tenthFilteredRecord.temp}</p>
          <Link to="/pages/dayeleven">Read More</Link>
        </div>
      </div>
    </div>
  )
}

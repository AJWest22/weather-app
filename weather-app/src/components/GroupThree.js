import React, { useEffect, useState } from 'react';
import {Routes, Route, HashRouter, Link} from 'react-router-dom'
import info from '../weather-data.json'
import './GroupThree.css'


export default function GroupThree() {
  const [twelfthFilteredRecord, setTwelfthFilteredRecord] = useState({});
  const [thirteenthFilteredRecord, setThirteenthFilteredRecord] = useState({});
  const [fourteenthFilteredRecord, setFourteenthFilteredRecord] = useState({});
  const [fifteenthFilteredRecord, setFifteenthFilteredRecord] = useState({});
  const [sixteenthFilteredRecord, setSixteenthFilteredRecord] = useState({});

  useEffect(() => {
      const twelfthRecord = info.data.filter((it) => it.rh === 75);
      const thirteenthRecord = info.data.filter((it) => it.rh === 86);
      const fourteenthRecord= info.data.filter((it) => it.rh === 79);
      const fifteenthRecord = info.data.filter((it) => it.rh === 83);
      const sixteenthRecord = info.data.filter((it) => it.rh === 84);
      setTwelfthFilteredRecord(twelfthRecord[0]);
      setThirteenthFilteredRecord(thirteenthRecord[0]);
      setFourteenthFilteredRecord(fourteenthRecord[0]);
      setFifteenthFilteredRecord(fifteenthRecord[0]);
      setSixteenthFilteredRecord(sixteenthRecord[0]);

  }, []);

return (
  <div>
    <div id="forecast-container-three">
      <h2 id="forecast-three">Forecast for Week 3:</h2>
    </div>
    <div className="group-flex">
      <div className="group-three">
        <h5>Day 12</h5>
        <p className="group-text">{twelfthFilteredRecord.wind_dir}</p>
        <p className="group-text">{twelfthFilteredRecord.low_temp}</p>
        <p className="group-text">{twelfthFilteredRecord.max_temp}</p>
        <Link to="/pages/day">Read More</Link>
      </div>
      <div className="group-three">
        <h5>Day 13</h5>
        <p className="group-text">{thirteenthFilteredRecord.moonrise_ts}</p>
        <p className="group-text">{thirteenthFilteredRecord.wind_cdir}</p>
        <p className="group-text">{thirteenthFilteredRecord.high_temp}</p>
      </div>
      <div className="group-three">
        <h5>Day 14</h5>
        <p className="group-text">{fourteenthFilteredRecord.wind_dir}</p>
        <p className="group-text">{fourteenthFilteredRecord.clouds_hi}</p>
        <p className="group-text">{fourteenthFilteredRecord.precip}</p>
      </div>
      <div className="group-three">
        <h5>Day 15</h5>
        <p className="group-text">{fifteenthFilteredRecord.high_temp}</p>
        <p className="group-text">{fifteenthFilteredRecord.clouds}</p>
        <p className="group-text">{fifteenthFilteredRecord.app_min_temp}</p>
      </div>
      <div className="group-three">
        <h5>Day 16</h5>
        <p className="group-text">{sixteenthFilteredRecord.low_temp}</p>
        <p className="group-text">{sixteenthFilteredRecord.max_temp}</p>
        <p className="group-text">{sixteenthFilteredRecord.temp}</p>
      </div>
    </div>
  </div>
)
}
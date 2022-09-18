import React, { useEffect, useState } from 'react';
import {Routes, Route, HashRouter, Link} from 'react-router-dom'
import info from '../weather-data.json'
import './GroupThree.css'


export default function GroupThree() {
  const [eleventhFilteredRecord, setEleventhFilteredRecord] = useState({});
  const [twelfthFilteredRecord, setTwelfthFilteredRecord] = useState({});
  const [thirteenthFilteredRecord, setThirteenthFilteredRecord] = useState({});
  const [fourteenthFilteredRecord, setFourteenthFilteredRecord] = useState({});
  const [fifteenthFilteredRecord, setFifteenthFilteredRecord] = useState({});

  useEffect(() => {
      const eleventhRecord = info.data.filter((it) => it.wind_cdir === "E");
      const twelfthRecord = info.data.filter((it) => it.wind_cdir === "S");
      const thirteenthRecord= info.data.filter((it) => it.wind_cdir === "SSW");
      const fourteenthRecord = info.data.filter((it) => it.rh === 84);
      const fifteenthRecord = info.data.filter((it) => it.wind_cdir === "SE");
      setEleventhFilteredRecord(eleventhRecord[0]);
      setTwelfthFilteredRecord(twelfthRecord[0]);
      setThirteenthFilteredRecord(thirteenthRecord[0]);
      setFourteenthFilteredRecord(fourteenthRecord[0]);
      setFifteenthFilteredRecord(fifteenthRecord[0]);

  }, []);

return (
  <div>
    <div id="forecast-container-three">
      <h2 id="forecast-three">Forecast for Week 3:</h2>
    </div>
    <div className="group-flex">
      <div className="group-three">
        <h5>Day 12</h5>
        <p className="group-text">Wind Dir: {eleventhFilteredRecord.wind_dir}</p>
        <p className="group-text">Low Temperature: {eleventhFilteredRecord.low_temp}</p>
        <p className="group-text">Max Temperature: {eleventhFilteredRecord.max_temp}</p>
        <Link to="/pages/daytwelve">Read More</Link>
      </div>
      <div className="group-three">
        <h5>Day 13</h5>
        <p className="group-text">Moonrise Ts: {twelfthFilteredRecord.moonrise_ts}</p>
        <p className="group-text">Wind CDIR: {twelfthFilteredRecord.wind_cdir}</p>
        <p className="group-text">High Temperature: {twelfthFilteredRecord.high_temp}</p>
        <Link to="/pages/daythirteen">Read More</Link>
      </div>
      <div className="group-three">
        <h5>Day 14</h5>
        <p className="group-text">Wind Direction: {thirteenthFilteredRecord.wind_dir}</p>
        <p className="group-text">Clouds Hi: {thirteenthFilteredRecord.clouds_hi}</p>
        <p className="group-text">Precipitation: {thirteenthFilteredRecord.precip}</p>
        <Link to="/pages/dayfourteen">Read More</Link>
      </div>
      <div className="group-three">
        <h5>Day 15</h5>
        <p className="group-text">High Temperature: {fourteenthFilteredRecord.high_temp}</p>
        <p className="group-text">Clouds: {fourteenthFilteredRecord.clouds}</p>
        <p className="group-text">App Min Temperature: {fourteenthFilteredRecord.app_min_temp}</p>
        <Link to="/pages/dayfifteen">Read More</Link>
      </div>
      <div className="group-three">
        <h5>Day 16</h5>
        <p className="group-text">Low Temperature: {fifteenthFilteredRecord.low_temp}</p>
        <p className="group-text">Max Temperature: {fifteenthFilteredRecord.max_temp}</p>
        <p className="group-text">Temperature: {fifteenthFilteredRecord.temp}</p>
        <Link to="/pages/daysixteen">Read More</Link>
      </div>
    </div>
  </div>
)
}
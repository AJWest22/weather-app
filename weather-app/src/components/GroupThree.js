import React, { useEffect, useState } from 'react';
import info from '../weather-data.json'
import './GroupThree.css'


const [eleventhFilteredRecord, setEleventhFilteredRecord] = useState({});
const [twelfthFilteredRecord, setTwelfthFilteredRecord] = useState({});
const [thirteenthFilteredRecord, setThirteenthFilteredRecord] = useState({});
const [fourteenthFilteredRecord, setFourteenthFilteredRecord] = useState({});
const [fifteenthFilteredRecord, setFifteenthFilteredRecord] = useState({});

    useEffect(() => {
        const eleventhRecord = info.data.filter((it) => it.wind_cdir === "E");
        const twelfthRecord = info.data.filter((it) => it.wind_cdir === "S");
        const thirteenthRecord= info.data.filter((it) => it.clouds=== 25);
        const fourteenthRecord = info.data.filter((it) => it.rh === 83);
        const fifteenthRecord = info.data.filter((it) => it.wind_cdir === "SE");
        setEleventhFilteredRecord(eleventhRecord[0]);
        setTwelfthFilteredRecord(twelfthRecord[0]);
        setThirteenthFilteredRecord(thirteenthRecord[0]);
        setFourteenthFilteredRecord(fourteenthRecord[0]);
        setFifteenthFilteredRecord(fifteenthRecord[0]);
  
}, []);

export default function GroupThree() {
  return (
    <div>
        <div id="forecast-container-three">
        <h2 id="forecast-three">Forecast for Week 3:</h2>
      </div>
      <div class="group-flex">
        <div class="groups">
          <h5>Day 12</h5>
          <p class="group-text">{eleventhFilteredRecord.wind_dir}</p>
          <p class="group-text">{eleventhFilteredRecord.low_temp}</p>
          <p class="group-text">{eleventhFilteredRecord.max_temp}</p>
        </div>
        <div class="groups">
          <h5>Day 13</h5>
          <p class="group-text">{twelfthFilteredRecord.moonrise_ts}</p>
          <p class="group-text">{twelfthFilteredRecord.wind_cdir}</p>
          <p class="group-text">{twelfthFilteredRecord.high_temp}</p>
        </div>
        <div class="groups">
          <h5>Day 14</h5>
          <p class="group-text">{thirteenthFilteredRecord.wind_dir}</p>
          <p class="group-text">{thirteenthFilteredRecord.clouds_hi}</p>
          <p class="group-text">{thirteenthFilteredRecord.precip}</p>
        </div>
        <div class="groups">
          <h5>Day 15</h5>
          <p class="group-text">{fourteenthFilteredRecord.high_temp}</p>
          <p class="group-text">{fourteenthFilteredRecord.clouds}</p>
          <p class="group-text">{fourteenthFilteredRecord.app_min_temp}</p>
        </div>
        <div class="groups">
          <h5>Day 16</h5>
          <p class="group-text">{fifteenthFilteredRecord.low_temp}</p>
          <p class="group-text">{fifteenthFilteredRecord.max_temp}</p>
          <p class="group-text">{fifteenthFilteredRecord.temp}</p>
        </div>
      </div>
    </div>
  )
}

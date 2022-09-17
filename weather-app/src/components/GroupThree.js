import React, { useEffect, useState } from 'react';
import info from '../weather-data.json'
import './GroupThree.css'


export default function GroupThree() {
  const [eleventhRecord, setEleventhFilteredRecord] = useState({});
  const [twelfthFilteredRecord, setTwelfthFilteredRecord] = useState({});
  const [thirteenthFilteredRecord, setThirteenthFilteredRecord] = useState({});
  const [fourteenthFilteredRecord, setFourteenthFilteredRecord] = useState({});
  const [fifteenthFilteredRecord, setFifteenthFilteredRecord] = useState({});

  useEffect(() => {
      const eleventhRecord = info.data.filter((it) => it.rh === 75);
      const twelfthRecord = info.data.filter((it) => it.rh === 86);
      const thirteenthRecord= info.data.filter((it) => it.rh === 79);
      const fourteenthRecord = info.data.filter((it) => it.rh === 83);
      const fifteenthRecord = info.data.filter((it) => it.rh === 84);
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
        <h5>Day 11</h5>
        <p className="group-text">{eleventhRecord.wind_dir}</p>
        <p className="group-text">{eleventhRecord.low_temp}</p>
        <p className="group-text">{eleventhRecord.max_temp}</p>
      </div>
      <div className="group-three">
        <h5>Day 12</h5>
        <p className="group-text">{twelfthFilteredRecord.moonrise_ts}</p>
        <p className="group-text">{twelfthFilteredRecord.wind_cdir}</p>
        <p className="group-text">{twelfthFilteredRecord.high_temp}</p>
      </div>
      <div className="group-three">
        <h5>Day 13</h5>
        <p className="group-text">{thirteenthFilteredRecord.wind_dir}</p>
        <p className="group-text">{thirteenthFilteredRecord.clouds_hi}</p>
        <p className="group-text">{thirteenthFilteredRecord.precip}</p>
      </div>
      <div className="group-three">
        <h5>Day 14</h5>
        <p className="group-text">{fourteenthFilteredRecord.high_temp}</p>
        <p className="group-text">{fourteenthFilteredRecord.clouds}</p>
        <p className="group-text">{fourteenthFilteredRecord.app_min_temp}</p>
      </div>
      <div className="group-three">
        <h5>Day 15</h5>
        <p className="group-text">{fifteenthFilteredRecord.low_temp}</p>
        <p className="group-text">{fifteenthFilteredRecord.max_temp}</p>
        <p className="group-text">{fifteenthFilteredRecord.temp}</p>
      </div>
    </div>
  </div>
)
}
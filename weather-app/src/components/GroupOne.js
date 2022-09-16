import React, { useEffect, useState } from 'react';
import info from '../weather-data.json'
import './GroupOne.css'

export default function GroupOne() {
    const [filteredRecord, setFilteredRecord] = useState({});
    const [secondFilteredRecord, setSecondFilteredRecord] = useState({});
    const [thirdFilteredRecord, setThirdFilteredRecord] = useState({});
    const [fourthFilteredRecord, setFourthFilteredRecord] = useState({});
    const [fifthFilteredRecord, setFifthFilteredRecord] = useState({});

    useEffect(() => {
      const record = info.data.filter((it) => it.wind_dir === 238);
      const secondRecord = info.data.filter((it) => it.wind_cdir === "WNW");
      const thirdRecord = info.data.filter((it) => it.wind_cdir === "NW");
      const fourthRecord = info.data.filter((it) => it.wind_cdir === "NNW");
      const fifthRecord = info.data.filter((it) => it.rh === 74);
      setFilteredRecord(record[0]);
      setSecondFilteredRecord(secondRecord[0]);
      setThirdFilteredRecord(thirdRecord[0]);
      setFourthFilteredRecord(fourthRecord[0]);
      setFifthFilteredRecord(fifthRecord[0]);

    }, []);
  
    return (
    <div>
      <div id="forecast-container">
        <h2 id="forecast">Forecast for the Next Five Days:</h2>
      </div>
      <div class="group-flex">
        <div class="groups">
          <h5>Tomorrow's Forecast</h5>
          <p class="group-text">{filteredRecord.wind_dir}</p>
          <p class="group-text">{filteredRecord.low_temp}</p>
          <p class="group-text">{filteredRecord.max_temp}</p>
        </div>
        <div class="groups">
          <h5>Day 3</h5>
          <p class="group-text">{secondFilteredRecord.moonrise_ts}</p>
          <p class="group-text">{secondFilteredRecord.wind_cdir}</p>
          <p class="group-text">{secondFilteredRecord.high_temp}</p>
        </div>
        <div class="groups">
          <h5>Day 4</h5>
          <p class="group-text">{thirdFilteredRecord.wind_dir}</p>
          <p class="group-text">{thirdFilteredRecord.clouds_hi}</p>
          <p class="group-text">{thirdFilteredRecord.precip}</p>
        </div>
        <div class="groups">
          <h5>Day 5</h5>
          <p class="group-text">{fourthFilteredRecord.high_temp}</p>
          <p class="group-text">{fourthFilteredRecord.clouds}</p>
          <p class="group-text">{fourthFilteredRecord.app_min_temp}</p>
        </div>
        <div class="groups">
          <h5>Day 6</h5>
          <p class="group-text">{fifthFilteredRecord.low_temp}</p>
          <p class="group-text">{fifthFilteredRecord.max_temp}</p>
          <p class="group-text">{fifthFilteredRecord.temp}</p>
        </div>
      </div>
    </div>
    );
}

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
      const thirdRecord = info.data.filter((it) => it.wind_dir === 289);
      const fourthRecord = info.data.filter((it) => it.wind_cdir === "NW");
      const fifthRecord = info.data.filter((it) => it.wind_dir === 320);
      setFilteredRecord(record[0]);
      setSecondFilteredRecord(secondRecord[0]);
      setThirdFilteredRecord(thirdRecord[0]);
      setFourthFilteredRecord(fourthRecord[0]);
      setFifthFilteredRecord(fifthRecord[0]);

    }, []);
  
    return (
    <div>
      <div>
        <h2>Forecast for the Week Ahead:</h2>
      </div>
      <div id="group-one">
        <div class="groups">
          <p>{filteredRecord.wind_dir}</p>
          <p>{filteredRecord.low_temp}</p>
          <p>{filteredRecord.max_temp}</p>
        </div>
        <div class="groups">
          <p>{secondFilteredRecord.moonrise_ts}</p>
          <p>{secondFilteredRecord.wind_cdir}</p>
          <p>{secondFilteredRecord.high_temp}</p>
        </div>
        <div class="groups">
          <p>{thirdFilteredRecord.wind_dir}</p>
          <p>{thirdFilteredRecord.clouds_hi}</p>
          <p>{thirdFilteredRecord.precip}</p>
        </div>
        <div class="groups">
          <p>{fourthFilteredRecord.high_temp}</p>
          <p>{fourthFilteredRecord.clouds}</p>
          <p>{fourthFilteredRecord.app_min_temp}</p>
        </div>
        <div class="groups">
          <p>{fifthFilteredRecord.low_temp}</p>
          <p>{fifthFilteredRecord.max_temp}</p>
          <p>{fifthFilteredRecord.temp}</p>
        </div>
      </div>
    </div>
    );
}

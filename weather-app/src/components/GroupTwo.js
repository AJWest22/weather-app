import React, { useEffect, useState } from 'react'
import info from '../weather-data.json'
import './GroupTwo.css'

export default function GroupTwo() {
    const [sixthRecord, setSixthFilteredRecord] = useState({});
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
      <div id="forecast-week2">
        <h2 id="forecast2">Forecast for the Next Five Days:</h2>
      </div>
      <div id="group-two">
        <div class="groups-two">
          <h5>Tomorrow's Forecast</h5>
          <p class="group-text">{sixthRecord.wind_dir}</p>
          <p class="group-text">{sixthRecord.low_temp}</p>
          <p class="group-text">{sixthRecord.max_temp}</p>
        </div>
        <div class="groups-two">
          <h5>Day 2</h5>
          <p class="group-text">{seventhFilteredRecord.moonrise_ts}</p>
          <p class="group-text">{seventhFilteredRecord.wind_cdir}</p>
          <p class="group-text">{seventhFilteredRecord.high_temp}</p>
        </div>
        <div class="groups-two">
          <h5>Day 3</h5>
          <p class="group-text">{eighthFilteredRecord.wind_dir}</p>
          <p class="group-text">{eighthFilteredRecord.clouds_hi}</p>
          <p class="group-text">{eighthFilteredRecord.precip}</p>
        </div>
        <div class="groups-two">
          <h5>Day 4</h5>
          <p class="group-text">{ninthFilteredRecord.high_temp}</p>
          <p class="group-text">{ninthFilteredRecord.clouds}</p>
          <p class="group-text">{ninthFilteredRecord.app_min_temp}</p>
        </div>
        <div class="groups-two">
          <h5>Day 5</h5>
          <p class="group-text">{tenthFilteredRecord.low_temp}</p>
          <p class="group-text">{tenthFilteredRecord.max_temp}</p>
          <p class="group-text">{tenthFilteredRecord.temp}</p>
        </div>
      </div>
    </div>
  )
}

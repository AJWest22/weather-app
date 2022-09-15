import React, { useEffect, useState } from 'react';
import info from '../weather-data.json'
import './GroupOne.css'

export default function GroupOne() {
    const [filteredRecord, setFilteredRecord] = useState({});

    useEffect(() => {
      const record = info.data.filter((it) => it.wind_cdir === "NNW");
      setFilteredRecord(record[0]);
    }, []);
  
    return (
      <div id="group-one">
        <p>{filteredRecord.high_temp}</p>
        <p>{filteredRecord.wind_cdir_full}</p>
        <p>{filteredRecord.valid_date}</p>
        <p>{filteredRecord.uv}</p>
      </div>
    );
}

import React, { useEffect, useState } from 'react';
import info from '../weather-data.json'
import './GroupOne.css'

export default function GroupOne() {
    const [filteredRecord, setFilteredRecord] = useState({});

    useEffect(() => {
      const record = info.data.filter((it) => it.wind_dir === 238);
      const secondRecord = info.data.filter((it) => it.wind_cdr === "WNW");
      const thirdRecord = info.data.filter((it) => it.wind_dir === 289);
      const fourthRecord = info.data.filter((it) => it.wind_cdir === "NW");
      const fifthRecord = info.data.filter((it) => it.wind_dir === 320);
      setFilteredRecord(record[0]);
      setFilteredRecord(secondRecord[0]);
      setFilteredRecord(thirdRecord[0]);
      setFilteredRecord(fourthRecord[0]);
      setFilteredRecord(fifthRecord[0]);

    }, []);
  
    return (
      <div id="group-one">
        <div>
          <p>{filteredRecord.wind_dir}</p>
        </div>
        <div>
          <p>{filteredRecord.wind_cdir_full}</p>
        </div>
        <div>
          <p>{filteredRecord.wind_dir}</p>
        </div>
        <div>
          <p>{filteredRecord.wind_cdir_full}</p>
        </div>
        <div>
          <p>{filteredRecord.wind_dir}</p>
        </div>
      </div>
    );
}

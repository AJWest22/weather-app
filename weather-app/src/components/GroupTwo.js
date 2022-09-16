import React, { useEffect, useState } from 'react'
import info from '../weather-data.json'
import './GroupTwo.css'

export default function GroupTwo() {
    const [sixthRecord, setSixthFilteredRecord] = useState({});
    const [seventhFilteredRecord, setSeventhFilteredRecord] = useState({});
    const [eighthFilteredRecord, setEighthFilteredRecord] = useState({});
    const [ninthFilteredRecord, setNinthilteredRecord] = useState({});
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
    <div>GroupTwo</div>
  )
}

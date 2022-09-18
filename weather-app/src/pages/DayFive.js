import React from 'react'
import info from '../weather-data.json'
import'../components/GroupOne.js'

export default function DayFive() {
  const [fifthRecord, setFifthRecord] = useState({});

  useEffect(() => {
    const fifthDetail = info.data.filter((it) => it.wind_cdir === "NNW");
    setFifthRecord(fifthDetail[0]);
  }, []);
  return (
    <div>DayFive</div>
  )
}


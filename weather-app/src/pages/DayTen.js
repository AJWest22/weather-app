import React from 'react'
import info from '../weather-data.json'

export default function DayTen() {
  const [tenthRecord, setTenthRecord] = useState({});

  useEffect(() => {
    const tenthDetail = info.data.filter((it) => wind_cdir === "WSW");
    setTenthRecord(tenthDetail[0]);
  }, []);
  return (
    <div>DayTen</div>
  )
}


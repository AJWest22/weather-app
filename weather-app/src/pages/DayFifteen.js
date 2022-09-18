import React from 'react'
import info from '../weather-data.json'

export default function DayFifteen() {
  const [fifteenthRecord, setFifteenthRecord] = useState({});

  useEffect(() => {
    const fifteenthDetail = info.data.filter((it) => it.rh === 83);
    setFifteenthRecord(fifteenthDetail[0]);
  }, []);
  return (
    <div>DayFifteen</div>
  )
}

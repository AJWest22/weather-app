import React from 'react'
import info from '../weather-data.json'

export default function DayFourteen() {
  const [fourteenthRecord, setFourteenthRecord] = useState({});

  useEffect(() => {
    const fourteenthDetail = info.data.filter((it) => it.rh === 79);
    setFourteenthRecord(fourteenthDetail[0]);
  }, []);
  return (
    <div>DayFourteen</div>
  )
}


import React from 'react'
import info from '../weather-data.json'

export default function DaySixteen() {
  const [sixteenthRecord, setSixteenthRecord] = useState({});

  useEffect(() => {
    const sixteenthDetail = info.data.filter((it) => it.rh === 84);
    setSixteenthRecord(sixteenthDetail[0]);
  }, []);
  return (
    <div>DaySixteen</div>
  )
}

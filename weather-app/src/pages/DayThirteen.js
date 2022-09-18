import React from 'react'
import info from '../weather-data.json'

const DayThirteen = () => {
  const [thirteenthRecord, setThirteenthRecord] = useState({});

  useEffect(() => {
    const thirteenthDetail = info.data.filter((it) => it.rh === 86);
    setThirteenthRecord(thirteenthDetail[0]);
  }, []);
  return (
    <div>DayThirteen</div>
  )
}

export default DayThirteen
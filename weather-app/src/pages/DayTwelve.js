import React from 'react'
import info from '../weather-data.json'

const DayTwelve = () => {
  const [twelfthRecord, setTwelfthRecord] = useState({});

  useEffect(() => {
    const twelfthDetail = info.data.filter((it) => it.rh === 75);
    setTwelfthRecord(twelfthDetail[0]);
  }, []);
  return (
    <div>DayTwelve</div>
  )
}

export default DayTwelve
import React from 'react'
import'../components/GroupOne.js'

export default function DayThree() {
  const [secondRecord, setSecondRecord] = useState({});

  useEffect(() => {
    const secondDetail = info.data.filter((it) => it.wind_cdir === "WNW");
    setSecondRecord(secondDetail[0]);
  }, []);
  return (
    <div>DayThree</div>
  )
}

import React from 'react'
import'../components/GroupOne.js'

export default function DayFour() {
  const [fourthRecord, setFourthRecord] = useState({});

  useEffect(() => {
    const fourthDetail = info.data.filter((it) => it.wind_cdir === "NW");
    setFourthRecord(fourthDetail[0]);
  }, []);
  return (
    <div>DayFour</div>
  )
}

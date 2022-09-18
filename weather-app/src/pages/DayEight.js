import React from 'react'

export default function DayEight() {
  const [eighthRecord, setEighthRecord] = useState({});

  useEffect(() => {
    const eighthDetail = info.data.filter((it) => it.wind_cdir === "NW");
    setEighthRecord(eighthDetail[0]);
  }, []);
  return (
    <div>DayEight</div>
  )
}

import React from 'react'

export default function DayNine() {
  const [ninthRecord, setNinthRecord] = useState({});

  useEffect(() => {
    const ninthDetail = info.data.filter((it) => it.wind_cdir === "W");
    setNinthRecord(ninthDetail[0]);
  }, []);
  return (
    <div>DayNine</div>
  )
}


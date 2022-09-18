import React from 'react'

export default function DayEleven() {
  const [eleventhRecord, setEleventhRecord] = useState({});

  useEffect(() => {
    const eleventhDetail = info.data.filter((it) => it.wind_cdir === "SW");
    setEleventhRecord(eleventhDetail[0]);
  }, []);
  return (
    <div>DayEleven</div>
  )
}


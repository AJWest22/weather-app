import React from 'react'

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
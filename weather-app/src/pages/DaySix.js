import React from 'react'
import'../components/GroupOne.js'

export default function DaySix() {
  const [sixthRecord, setSixthRecord] = useState({});

  useEffect(() => {
    const sixthDetail = info.data.filter((it) => it.rh === 72);
    setSixthRecord(sixthDetail[0]);
  }, []);
  return (
    <div>DaySix</div>
  )
}


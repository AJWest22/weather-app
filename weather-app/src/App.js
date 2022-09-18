import {HashRouter, Route, Routes, useNavigate} from 'react-router-dom'
import './App.css';
import CityWeather from './components/CityWeather';
import Header from './components/Header';
import GroupOne from './components/GroupOne'
import GroupTwo from './components/GroupTwo';
import GroupThree from './components/GroupThree';
import DayTwo from './pages/DayTwo';
import DayThree from './pages/DayThree';
import DayFour from './pages/DayFour';
import DayFive from './pages/DayFive';
import DaySix from './pages/DaySix';
import DaySeven from './pages/DaySeven';
import DayEight from './pages/DayEight'
import DayNine from './pages/DayNine';
import DayTen from './pages/DayTen'
import DayEleven from './pages/DayEleven';
import DayTwelve from './pages/DayTwelve';
import DayThirteen from './pages/DayThirteen';
import DayFourteen from './pages/DayFourteen';
import DayFifteen from './pages/DayFifteen';
import DaySixteen from './pages/DaySixteen';
import Data from './Data';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes >
            <Route path="/" element={<Data />} />
            <Route path='/pages/daytwo' element={<DayTwo/>} />
            <Route path='/pages/daythree' element={<DayThree/>} />
            <Route path='/pages/dayfour' element={<DayFour/>} />
            <Route path='/pages/dayfive' element={<DayFive/>} />
            <Route path='/pages/daysix' element={<DaySix />} />
            <Route path='/pages/dayseven' element={<DaySeven />} />
            <Route path='/pages/dayeight' element={<DayEight />} />
            <Route path='/pages/daynine' element={<DayNine />} />
            <Route path='/pages/dayten' element={<DayTen />} />
            <Route path='/pages/dayeleven' element={<DayEleven />} />
            <Route path='/pages/daytwelve' element={<DayTwelve />} />
            <Route path='/pages/daythirteen' element={<DayThirteen />} />
            <Route path='/pages/dayfourteen' element={<DayFourteen />} />
            <Route path='/pages/dayfifteen' element={<DayFifteen />} />
            <Route path='/pages/daysixteen' element={<DaySixteen />} />
        </Routes >
    </div>
    </HashRouter>
  );
}

export default App;

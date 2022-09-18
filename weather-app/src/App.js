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
        </Routes >
    </div>
    </HashRouter>
  );
}

export default App;

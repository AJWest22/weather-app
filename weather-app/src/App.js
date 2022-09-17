import {HashRouter, Route, Routes, useNavigate} from 'react-router-dom'
import './App.css';
import CityWeather from './components/CityWeather';
import Header from './components/Header';
import GroupOne from './components/GroupOne'
import GroupTwo from './components/GroupTwo';
import GroupThree from './components/GroupThree';
import DayTwo from './pages/DayTwo';
import Data from './Data';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes >
            <Route path="/" element={<Data />} />
            <Route path='/pages/daytwo' element={<DayTwo/>} />
        </Routes >
    </div>
    </HashRouter>
  );
}

export default App;

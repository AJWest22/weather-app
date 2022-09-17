import {Route, Routes, useNavigate} from 'react-router-dom'
import './App.css';
import CityWeather from './components/CityWeather';
import Header from './components/Header';
import GroupOne from './components/GroupOne'
import GroupTwo from './components/GroupTwo';
import GroupThree from './components/GroupThree';
import DayTwo from './pages/DayTwo';


function App() {
  return (
    <div className="App">
      <Header />
      <CityWeather />
      <GroupOne />
      <GroupTwo />
      <GroupThree />
      <Routes >
        <Route path="pages/DayTwo" element={<DayTwo />}></Route>
      </Routes>

    </div>
  );
}

export default App;

import './App.css';
import CityWeather from './components/CityWeather';
import Header from './components/Header';
import GroupOne from './components/GroupOne'


function App() {
  return (
    <div className="App">
      <Header />
      <CityWeather />
      <GroupOne />
    </div>
  );
}

export default App;

import './App.css';
import CityWeather from './components/CityWeather';
import info from './weather-data.json'

function App() {
  return (
    <div className="App">
      <CityWeather />
    </div>
  );
}

export default App;

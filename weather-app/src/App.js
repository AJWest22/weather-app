import './App.css';
import CityWeather from './components/CityWeather';
import Header from './components/Header';
import GroupOne from './components/GroupOne'
import GroupTwo from './components/GroupTwo';


function App() {
  return (
    <div className="App">
      <Header />
      <CityWeather />
      <GroupOne />
      <GroupTwo />
    </div>
  );
}

export default App;

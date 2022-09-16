import './App.css';
import CityWeather from './components/CityWeather';
import Header from './components/Header';
import GroupOne from './components/GroupOne'
import GroupTwo from './components/GroupTwo';
import GroupThree from './components/GroupThree';


function App() {
  return (
    <div className="App">
      <Header />
      <CityWeather />
      <GroupOne />
      <GroupTwo />
      <GroupThree />
    </div>
  );
}

export default App;

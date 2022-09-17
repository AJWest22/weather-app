import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DayTwo from './pages/DayTwo.js'
import DayThree from './pages/DayThree.js'
import DayFour from './pages/DayFour.js'
import DayFive from './pages/DayFive.js'
import DaySix from './pages/DaySix.js'
import DaySeven from './pages/DaySeven.js'
import DayEight from './pages/DayEight.js'
import DayNine from './pages/DayNine.js'
import DayTen from './pages/DayTen.js'
import DayEleven from './pages/DayEleven.js'
import DayTwelve from './pages/DayTwelve.js'
import DayThirteen from './pages/DayThirteen.js'
import DayFourteen from './pages/DayFourteen.js'
import DayFifteen from './pages/DayFifteen.js'
import NoPage from './pages/NoPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
        <Routes>
          <Route path="/" element={<DayTwo />}>
            <Route index element={<DayThree />} />
            <Route path="day-four" element={<DayFour />} />
            <Route path="day-five" element={<DayFive/>} />
            <Route path="day-six" element={<DaySix/>} />
            <Route path="day-seven" element={<DaySeven/>} />
            <Route path="day-eight" element={<DayEight/>} />
            <Route path="day-nine" element={<DayNine/>} />
            <Route path="day-ten" element={<DayTen/>} />
            <Route path="day-eleven" element={<DayEleven/>} />
            <Route path="day-twelve" element={<DayTwelve/>} />
            <Route path="day-thirteen" element={<DayThirteen/>} />
            <Route path="day-fourteen" element={<DayFourteen/>} />
            <Route path="day-fifteen" element={<DayFifteen/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

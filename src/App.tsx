import React from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { MonthStatistic } from './pages/MonthStatistics/MonthStatistics';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home id='1' />} />
        <Route path='/month-statistics' element={<MonthStatistic id='1' />} />
      </Routes>
    </div>
  );
}

export default App;

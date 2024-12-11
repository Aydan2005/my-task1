import './App.css';
import Time from './Components/Time';
import Timer from './Components/Timer';
import StopWatch from './Components/StopWatch';
import {Routes, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='link'>
        <NavLink to="/time">Time</NavLink>
        <NavLink to="/stopWatch">Stop Watch</NavLink>
        <NavLink to="/timer">Timer</NavLink>
      </div>
      <Routes>
        <Route path='/time' element={<Time />} />
        <Route path='/stopWatch' element={<StopWatch />} />
        <Route path='/timer' element={<Timer />} />
      </Routes>

    </div>
  );
}

export default App;

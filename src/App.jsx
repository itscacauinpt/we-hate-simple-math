import { Routes, Route, Navigate } from 'react-router-dom';

import Menu from './Pages/Menu';
import Game from './Pages/Game';
import Credits from './Pages/Credits';
import MoreAbout from './Pages/MoreAbout';

import './App.css'

function App() {
  return (
    <Routes>
      <Route exact path="/menu" element={ <Menu /> } />
      <Route exact path="/game" element={ <Game /> } />
      <Route exact path="/credits" element={ <Credits /> } />
      <Route exact path="/more-about-math-anxiety" element={ <MoreAbout /> } />

      <Route path="/" element={ <Navigate to="/menu" replace /> } />
    </Routes>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import './App.css'

import Menu from './Pages/Menu';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Menu /> } />
    </Routes>
  );
}

export default App;

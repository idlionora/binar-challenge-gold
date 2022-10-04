import { Routes, Route, Link } from 'react-router-dom';
import CariMobil from './page/CariMobil';
import Home from './page/Home';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cari-mobil" element={<CariMobil/>}/>
      </Routes>
  )
}

export default App;

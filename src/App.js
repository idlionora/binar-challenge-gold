import { Routes, Route, Link } from 'react-router-dom';
import CariMobil from './page/CariMobil';
import DetailMobil from './page/DetailMobil';
import Home from './page/Home';
import NavLayout from './page/NavLayout';

function App() {
  return (
      <Routes>
        <Route path="/" element={<NavLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="cari-mobil" element={<CariMobil/>}/>
          <Route path="/detail-mobil/:id" element={<DetailMobil/>}/>
        </Route>
      </Routes>
  )
}

export default App;

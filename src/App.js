
import './App.css'
import Contatox from './pages/Contatox';
import Empresay from './pages/Empresay';
import Homec from './pages/Homec';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="empresay">Empresa</Link></li>
          <li><Link to="contatox">Contato</Link></li>
      </ul>
        <Routes>
          <Route path='/' element={<Homec/>}/>
          <Route path='/empresay' element={<Empresay/>}/>
          <Route path='/contatox' element={<Contatox/>}/>
      </Routes>
        </BrowserRouter>
    </div>
  );
}



export default App;


import './App.css'
import Contatox from './pages/Contatox';
import Empresay from './pages/Empresay';
import SobreInfo from './pages/SobreInfo';
import Homec from './pages/Homec';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        
          <NavBar/>
          
          <Routes>
            <Route path='/' element={<Homec/>}/>
            <Route path='/empresay' element={<Empresay/>}/>
            <Route path='/contatox' element={<Contatox/>}/>
            <Route path='/sobreinfo' element={<SobreInfo/>}/>
          </Routes>

          <Footer/>

        </BrowserRouter>
    </div>
  );
}
export default App;

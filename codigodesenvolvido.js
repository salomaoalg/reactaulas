import { useState } from 'react';
import './App.css'
import HelloWord from './components/HelloWord';
import SayMayname from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import Outralista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import SaudarCao from './components/SaudarCao';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function App() {
const [nome, setNome] = useState()
const nomes = ["SALOMAO", "MARIA", "JOSE"]
let name = 'Salomao';
let newname = name.toUpperCase();
let link = 'https://via.placeholder.com/150'

function somar(a, b){
  return(a + b);
}
  return (
    <div className="App">
      <h1>Hello React</h1>
      <h1>My name is, {name}</h1>
      <h2>Big Name, {newname}</h2>
      <h2>First Aplication</h2>
      <p>Soma, {somar(5, 5)}</p>
      <img src={link} alt="" />


      <SeuNome setNome={setNome}/>
      <SaudarCao nome={nome}/>
      <SayMayname name="Salomao isso é uma props"/>
      <Pessoa nome="Analisa" fullname="Analisa de Souza" foto="https://via.placeholder.com/100" 
      profissao="Professora" xp="5"/>
      <HelloWord/>
      <List/>
      <Evento numero={25}/>
      <Form/>
      <Condicional/>
      <Outralista itens={nomes}/>
      <Router>
        <ul>
          <li><Link to="/"></Link></li>
          <li><Link to="/"></Link></li>
          <li><Link to="/"></Link></li>
          <li><Link to="/"></Link></li>
        </ul>
      </Router>
    </div>
  );
}

export default App;

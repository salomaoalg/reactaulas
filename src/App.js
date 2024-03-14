import './App.css'
import HelloWord from './components/HelloWord';

function App() {
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
      <HelloWord/>
    </div>
  );
}

export default App;

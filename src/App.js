import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <header className="App-header">
          <ItemListContainer  greeting={"Hola Bienvenido/a Estamos a tu Servicio"} />
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a>
      </header>
    </div>
  );
} 

export default App;
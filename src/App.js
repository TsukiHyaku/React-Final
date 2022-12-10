import './App.css';
import Flex from './components/Flex/Flex';
import Item from './components/ItemListContainer/Item';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <header className="App-header">
          <Flex>
            <ItemListContainer/>
          </Flex>
      </header>
    </div>
  );
} 

export default App;
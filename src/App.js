import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/NavBar';
import Item from  './components/ItemListContainer/Item';

function App() {
  return (
 
    <div className="App">
        <NavBar/>
        <header className="App-header">
        <Item
            price={2000}
            title="Manga Rent A Girlfriend"
            description="Ivrea"
            imgurl="https://http2.mlstatic.com/D_NQ_NP_912439-MLA52217975795_102022-V.webp"
          />
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a>
      </header>
    </div>
  );
} 

export default App;
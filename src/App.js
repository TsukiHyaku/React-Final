import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

// importar los componentes
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto";
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/home' element={ <ItemListContainer/> } />
            <Route path="/category/:categoryID" element={<ItemListContainer />} />
            <Route path="/item/:itemID" element={<ItemDetailContainer />} />
            <Route path='/contacto' element={ <Contacto/> } />
            <Route path='*' element={ <h1>404:  RECURSO NO ENCONTRADO</h1> } />
        </Routes>
        </BrowserRouter>
    </div>
  );
} 

export default App;
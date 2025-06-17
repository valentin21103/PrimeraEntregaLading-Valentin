import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido a Nuestra Tienda" />} />
            <Route path="/productos" element={<ItemListContainer greeting="Nuestros Productos" />} />
            <Route path="/categoria/:categoryId" element={<ItemListContainer greeting="Productos de la categoría" />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

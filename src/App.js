import './App.css';
import { Routes, Route } from 'react-router';
import Nav from './Components/Nav/Nav';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';

function App() {
  return (
   <>
   <Nav />
   <Routes>
    <Route path='/' element={<Products />} />
    <Route path='/cart' element={<Cart />} />
   </Routes>
   </>
  );
}

export default App;

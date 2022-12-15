import './App.css';
import { Routes, Route } from 'react-router';
import Nav from './Components/Nav/Nav';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Single from './Components/SingleProduct/Single';

function App() {
  return (
   <>
   <Nav />
   <Routes>
    <Route path='/' element={<Products />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/products/:id' element={<Single />} />
   </Routes>
   </>
  );
}

export default App;

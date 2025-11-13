
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import './App.css'
import { Footer } from './components/Footer';
import Favorites from './components/Favorites';
import Form from './components/Form';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './components/Home';
import {Route, Routes ,BrowserRouter as Router} from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {

  const [tyrs, setTyrs] = useState([])

  useEffect (()=>{
  async function axiosData(){
    const tyrsData = await axios.get('https://690e60cebd0fefc30a044d8f.mockapi.io/tyrs')
    setTyrs(tyrsData.data)
  }
    axiosData();
  },[])
    
  return (
    <CartProvider>
      <div>
        <Router>
        <Header/>
        <Routes>
          <Route path='favorites'
          element ={
            <Favorites/>

          }
          />

        <Route path='/'
          element ={
                 <Home
                 item={tyrs}
                 />
          }
          />
           <Route path='/form'
          element ={
                 <Form/>

          }
          />
           <Route path='/cart'
          element ={
                 <Cart/>

          }
          />
            </Routes>
        </Router>

          <Footer/>
       </div>
    </CartProvider>
  );
}

export default App;

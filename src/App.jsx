import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import CartContextProvider from './context/CartContext'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import Home from './components/Home/Home'
import './App.css'
import './components/NavBar/navBar.css'

function App() {
 

 
  

return (
  
  <CartContextProvider>

    <BrowserRouter>

      <div>
          
          <NavBar /> 
                
        <Routes>
          
          <Route path='/' element= {<Home />} />

          <Route path='/products' element= {<ItemListContainer />} />
          
          <Route path='/category/:cat' element={<ItemListContainer />} />

          <Route path='/item/:idDetail' element={<ItemDetailContainer />} />

          <Route path='/cart' element={<Cart />} />

          <Route path='/*' element={<Navigate to='/' replace />} />
          

        </Routes>

          <Footer />
      
      </div>

    </BrowserRouter>

  
  </CartContextProvider>

  )
}

export default App
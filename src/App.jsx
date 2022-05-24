// import './App.css'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'

function App() {
  // const [count, setCount] = useState(0)

  const greeting = 'Bienvenidos! Estas son nuestras nuevas ofertas.'
  

return (
    <BrowserRouter>
    <div /*className="App"*/>
        
        <NavBar />
              
      <Routes>
        
        <Route path='/' element= {<ItemListContainer greeting= {greeting} />} />
        
        <Route path='/categoria/:cat' element={<ItemListContainer />} />

        <Route path='/item/:idDetail' element={<ItemDetailContainer />} />

        <Route path='/cart' element={<Cart />} />

        <Route path='/*' element={<Navigate to='/' replace />} />
        

      </Routes>
     
    </div>
    </BrowserRouter>
  )
}

export default App
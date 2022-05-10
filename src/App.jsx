// import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  // const [count, setCount] = useState(0)

  const greeting = 'Bienvenidos! Estas son nuestras nuevas ofertas.'
  

return (
    <div /*className="App"*/>
    
  
        <NavBar />
        <ItemListContainer name='Un pato' price='55' greeting= {greeting} />
     
    </div>
  )
}

export default App
import Button from "react-bootstrap/esm/Button"
import { Link } from "react-router-dom"

const ActionButton = ({item}) => {
  return (
    <div>
        <h1 >Enhorabuena! Has agregado {item.description} al carrito.</h1>

        <Link to={'/'}>
            <Button>
                Seguir comprando
            </Button> 
        </Link>

        <Link to={'/cart'}>
            <Button>
                Ir al carrito
            </Button> 
        </Link>
     
        
    </div>
  )
}

export default ActionButton
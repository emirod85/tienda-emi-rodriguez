import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
         


const Cart = () => {

  const {cartList, vaciarCart, deleteItem} = useCartContext()

  return (
    <>
      <section className="list-cart-container">
        <h1>CARRITO</h1>
                {cartList ? (cartList.map( item => {
                  return(     
        <div key = {item.item.id} >



            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.item.pictureUrl} />
                  <Card.Body>
                      <Card.Title><h2>{item.item.description}</h2></Card.Title>
                      <Card.Text>                 
                          <h3>Precio: ${item.item.price}</h3>
                          <h3>Cantidad: {item.item.cantidad} unidad/es</h3>
                      </Card.Text>

                  <Button  onClick={deleteItem}>Borrar item</Button>

                  </Card.Body>
              </Card>

        </div> );
                    }))
                      : <p>cargando productos</p>
                }
               
               
                {cartList.length ? 
                
                (
                    <>
                        <Button variant="outline-danger"
                                        className="button-primary button-padding"
                                        onClick={vaciarCart}
                                        >
                                    Vaciar Carrito
                        </Button>
                        
                        <Link to='/'>
                            <Button variant="success">Seguir comprando</Button>
                        </Link>
                        
                    </>
                )

               
                            : 
                            
                            <p>No hay productos en el carrito</p>
                }
            </section>
   
   
   
   
   {/* <div>
      
      {cartList.map(
        
        item => { item.id ? item.cantidad + item.item.cantidad :
          
          
          <li>Producto: {item.item.description} - Precio: {item.item.price} - Cantidad: {item.item.cantidad} </li>
        }
        
        
        )}
    <Button onClick={vaciarCart}>Vaciar Carrito</Button>
    <Link to='/'>
      <Button>Seguir comprando</Button>
    </Link>
    </div> */}
        </>
  )
}

export default Cart
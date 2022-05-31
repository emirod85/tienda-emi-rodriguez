import { collection, getFirestore, addDoc } from "firebase/firestore"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"



const Cart = () => {

  const { cartList, vaciarCart, deleteItem, precioTotal } = useCartContext()

  const buyer = [{
    name : "Jose Perez",
    phone : "155136512",
    email: "sdfsd@fdsfs.com"
  }
  ]

  const generarOrden =()=>{
    
    let orden = {}

    orden.buyer = {name: 'Juan', email :'juan@asd.com', phone: '56421654'}
    orden.total = precioTotal()

    orden.items = cartList.map(cartItem => {
      const id = cartItem.id
      const nombre = cartItem.description
      const precio = orden.total

      return {id, nombre, precio}


      })
      
      
      // crear
      const db = getFirestore()
      const queryCollection = collection(db, 'orders')
      addDoc(queryCollection, orden)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(()=>vaciarCart())

      //update
      // const db = getFirestore()
      // const queryItem = doc(db, 'items', 'OZHNws2Ej0JvAYYQE2tH')
      // updateDoc (queryItem, stock: 99)



  }
  

  return (
    <>
      <section>
        <h1>CARRITO</h1>
        
        {cartList ? 

        (cartList.map(item => {

          return (
            <div key={item.id} >

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.pictureUrl} />
                <Card.Body>
                  <Card.Title><h2>{item.description}</h2></Card.Title>
                  <Card.Text>
                    <h3>Cantidad seleccionada: {item.cantidad}</h3>
                    <h3>Precio unitario: ${item.price}</h3>
                    <h3>Subtotal: {item.cantidad*item.price}</h3>
                  </Card.Text>

                  <Button variant="outline-danger" onClick={()=>deleteItem(item.id)}>X</Button>

                </Card.Body>
              </Card>

            </div>);
        }))
          
        
        : <p>cargando productos</p>

        }


        {cartList.length ?

          (
            <>
              <h2 >
                Precio total: {precioTotal()}
              </h2>
                   
              <Button variant="outline-danger"
                      className="button-primary button-padding"
                      onClick={vaciarCart}
              >
                  Vaciar Carrito
              </Button>

              <Link to='/'>
                  <Button variant="success">Seguir comprando</Button>
              </Link>

              <Button onClick={generarOrden}>Finalizar compra</Button>

            </>
          )


          :
            <>
              <p>No hay productos en el carrito</p>

              <Link to='/'>
                <Button>Ir de compras!</Button>
              </Link>

            </>

        }
      </section>

    </>
  )
}

export default Cart
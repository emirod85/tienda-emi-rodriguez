import ItemCount from "./ItemCount"
import { Card } from "react-bootstrap";

const Item = ({props}) => {

  const { id, category, description, price, pictureUrl, stock } = props;

  return (
    <div key = {id}>

           <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pictureUrl} />
                <Card.Body>
                    <Card.Title>{description}</Card.Title>
                    <Card.Text>
                      <h3>id: {id}</h3>
                        <h2>Detalle del producto:</h2>
                        <h3>Categoria: {category}</h3>
                        <h3>Precio: {price}</h3>
                        <h3>Stock: {stock}</h3>
                    </Card.Text>
                    <ItemCount id = {id} description = {description} price = {price} stock = {stock} initial={1} onAdd={(quantity)=>console.log(`${quantity} unidad/es de ${description} agregada/s al pedido`)}/>
                </Card.Body>
            </Card>

    </div>
  )
}

export default Item
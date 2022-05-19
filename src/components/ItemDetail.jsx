// import './ItemDetail.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

export default function ItemDetail({item}) {

    return (
        <div key={item.id} className="itemDetail">

            <Card style={{ width: '500px' }}>
            <Card.Body>
                <h2>Detalle del producto</h2>
                <Card.Title>{item.description}</Card.Title>
            <Card.Img variant="top" src={item.pictureUrl} />
                <Card.Text>
            <h2>Precio: ${item.price}</h2>
            <h2> Stock: {item.stock}</h2>
                </Card.Text>

            </Card.Body>
            <ItemCount id = {item.id} description = {item.description} price = {item.price} stock = {item.stock} initial={1} onAdd={(quantity)=>console.log(`${quantity} unidad/es de ${description} agregada/s al pedido`)}/>
            <Link to={'/'}>
                <Button>Volver</Button>
            </Link>

            </Card>

        </div>

    );
}
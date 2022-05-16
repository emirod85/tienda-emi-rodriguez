// import './ItemDetail.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function ItemDetail({item}) {

    return (
        <div className="itemDetail">

            <Card style={{ width: '500px' }}>
            <Card.Body>
                <h2>Item Detail filtrado por ID:7</h2>
                <Card.Title>{item.description}</Card.Title>
            <Card.Img variant="top" src={item.pictureUrl} />
                <Card.Text>
            Precio: ${item.price}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

        </div>

    );
}
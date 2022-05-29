
import { Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Item = ({props}) => {

  const { id, description, price, pictureUrl, stock } = props;

  return (
    <div key = {props.id}>

        <Link to={`/item/${id}`}>
           <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pictureUrl} />
                <Card.Body>
                    <Card.Title><h2>{description}</h2></Card.Title>
                    <Card.Text>                 
                        <h3>Precio: ${price}</h3>
                        <h3>Stock: {stock} unidades</h3>
                    </Card.Text>

                      <Button>Comprar</Button>

                </Card.Body>
            </Card>
        </Link>

    </div>
  )
}

export default Item
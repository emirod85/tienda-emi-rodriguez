import { useState } from 'react';
import './ItemCount.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import img from '../img/un_pato.svg'

export default function ItemCount({price, name, stock, initial, onAdd}) {
    const [quantity, setQuantity] = useState(initial);

    function increase() {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        } 
    }

    function decrease() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } 
    }

    function addToCart() {
        onAdd(quantity);
    }

    return (
        <div className="itemCount">
           <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Detalle del producto
                        <h3>Precio: {price}</h3>
                        <h3>Stock: {stock}</h3>
                    </Card.Text>
                    
                    <Button id='less' className="itemCount__minusBtn" onClick={decrease}>-</Button>
                    <span className="itemCount__quantity">{quantity}</span>
                    <Button id='plus' className="itemCount__plusBtn" onClick={increase}>+</Button>
                    <Button  onClick={addToCart}>Agregar al carrito</Button>
                </Card.Body>
            </Card>
           
            
        </div>
    );
}
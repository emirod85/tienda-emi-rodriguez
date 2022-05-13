import { useState } from 'react';
import './ItemCount.css';
import Button from 'react-bootstrap/Button'


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

                    <Button id='less' className="itemCount__minusBtn" onClick={decrease}>-</Button>
                    <span className="itemCount__quantity">{quantity}</span>
                    <Button id='plus' className="itemCount__plusBtn" onClick={increase}>+</Button>
                    <Button  onClick={addToCart}>Agregar al carrito</Button>
            
        </div>
    );
}
import { useState } from 'react';
import './ItemCount.css';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';



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
            console.log(quantity)
        } 
    }

    function addToCart(quantity) {
        onAdd();
        // console.log(`${quantity} unidad/es de ${description} agregada/s al pedido`)
        console.log(quantity)
    }

    return (
        <div className="itemCount flex row">
            <div className=''>
                <h2>Cantidad</h2>
                <Button id='less' className="itemCount__minusBtn" onClick={decrease}>-</Button>

                <span className="itemCount__quantity">{quantity}</span>
                
                <Button id='plus' className="itemCount__plusBtn" onClick={increase}>+</Button>
            </div>
                   
            <div>

                <Button  onClick={addToCart}>Agregar al carrito</Button>

                <Link to={'/'}>
                    <Button>Volver</Button>
                </Link>
                    
            </div>
            
        </div>
    );
}
import { useState } from 'react';
import './ItemCount.css';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';



export default function ItemCount({price, description, stock, initial, onAdd}) {
    
    const [quantity, setQuantity] = useState(initial);


    function addCount(num) {
        setQuantity(quantity + num)
    }

    function addToCartt() {
        onAdd(quantity);
        alert(`${quantity} unidad/es de ${description} agregada/s al pedido`)
        
    }

    return (
        <div className="itemCount flex row">
            <div className=''>
                <h2>Cantidad</h2>
                <Button 
                    id='less' 
                    className="itemCount__minusBtn" 
                    onClick={()=>addCount(-1)}
                    disabled={quantity === 1 ? true : false}
                    >-</Button>

                <span className="itemCount__quantity">{quantity}</span>
                
                <Button 
                    id='plus' 
                    className="itemCount__plusBtn" 
                    onClick={()=>addCount(1)}
                    disabled={quantity === stock ? true : false}
                    >+</Button>
            </div>
                   
            <div>

                <Button variant="success" onClick={addToCartt}>Agregar al carrito</Button>

                <Link to={'/'}>
                    <Button>Volver</Button>
                </Link>
                    
            </div>
            
        </div>
    );
}
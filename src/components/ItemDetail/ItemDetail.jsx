import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount/ItemCount';
import ActionButton from '../ActionButton/ActionButton';
import {useState} from 'react'
import { useCartContext } from '../../context/CartContext';



export default function ItemDetail({item}) {

    const [button, setButton] = useState('buyButton')
    
    const {cartList, addToCart} = useCartContext()
    

    const onAdd = (cantidad) =>{
        // console.log(cantidad)
        setButton('action')

        addToCart( { ...item, cantidad: cantidad } )
    }
    
    
    console.log(cartList)
    
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

            {button === 'buyButton' ?  

                <ItemCount id = {item.id} description = {item.description} 
                price = {item.price} stock = {item.stock} initial={1} 
                onAdd={onAdd}/>
            :
                <ActionButton item = {item} />

            }

            </Card.Body>

        
            </Card>


        </div>

    );
}
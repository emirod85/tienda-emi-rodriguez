import ItemCount from '../ItemCount/ItemCount';
import ActionButton from '../ActionButton/ActionButton';
import {useState} from 'react'
import { useCartContext } from '../../context/CartContext';
import './ItemDetail.css'



export default function ItemDetail({item}) {

    const [button, setButton] = useState('buyButton') 
    const {addToCart} = useCartContext()
    const arrow = ">"

    const onAdd = (cantidad) =>{
        setButton('action')
        addToCart( item, cantidad )
    }
    
   
    
    return (
        <div key={item.id} className="itemDetail">

         

                <div className='section'>
                    <p className='titleSection'>{item.category.toUpperCase()} {arrow} <span className='titleSectionBis'>{item.title}</span></p>

                    <div className='productArea'>
                        <section className='secImg'>
                            <div className='rectangle'></div>
                            <img className='imgDetail' variant="top" src={item.pictureUrl} />

                        </section>
                    
                        <div className='textDetail'>
                            <h3 className='titleDetail'>{item.title} · {item.subtitle}</h3> 
                            <p className='itemDesc'>{item.description}</p>
                            <h3 className='itemCat'>{item.category}</h3>
                             <h2 className='itemPrice'>U$D {item.price}</h2>

                            {button === 'buyButton' ?  

                                <ItemCount id = {item.id} description = {item.description} 
                                price = {item.price} stock = {item.stock} initial={1} 
                                onAdd={onAdd}/>
                            :
                                <ActionButton />
                                

                            }

                            <h2 className='stockClass'> Stock {item.stock} units</h2>
                        </div>

                    
                    </div>  




                </div>

        
           


        </div>

    );
}
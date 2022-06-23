import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './ItemCount.css';


export default function ItemCount({stock, initial, onAdd}) {
    
    const [quantity, setQuantity] = useState(initial);
    const history = useNavigate()
    const goBack = "<< GO BACK"
    const goBackHandle = ()=>{history(-1)}

    function addCount(num) {
        setQuantity(quantity + num)
    }


    return (
        <div className="itemCount">
            <div className='countBtn'>
                
                <button 
                    id='less' 
                    className="minusBtn" 
                    onClick={()=>addCount(-1)}
                    disabled={quantity === 1 ? true : false}
                    >-</button>

                <span className="countQty">{quantity}</span>
                
                <button 
                    id='plus' 
                    className="plusBtn" 
                    onClick={()=>addCount(1)}
                    disabled={quantity === stock ? true : false}
                    >+</button>
            </div>
            
            <button className='onAddBtn' variant="success" onClick={()=>onAdd(quantity)}>ADD TO CART</button>
                   
            <div className='btnAlign'>


                
                    <h2 className='goBackBtn' onClick={goBackHandle} >
                        {goBack}
                    </h2>
               
                    
            </div>
            
        </div>
    );
}
import React from 'react'
import { Button, Card } from "react-bootstrap"
import { useCartContext } from "../../context/CartContext";
import './CartItem.css'
import deleteBtn from '../../../assets/img/deleteBtn.svg'

const CartItem = ({item}) => {

     const { deleteItem } = useCartContext()

  return (
    
    <div className='itemCart' key={item.id} >
        
        
        <img className='imgCartItem' src={item.pictureUrl} />

        <section className='sectLine'></section>
        
        <div className='description'>
          <h2 className='titleCartItem'>{item.title} · {item.subtitle}</h2>
          <h2 className='categoryItem'>{item.category}</h2>
        </div>

        <section className='sectLine'></section>
        
        <div className='textItemContainer'>
          <h3 className='textItem'>Quantity: {item.qty}</h3>
          <h3 className='textItem'>Unit price: ${item.price}</h3>
          <h3 className='textItem'>Subtotal: ${item.qty*item.price}</h3>
        </div>

        <section className='sectLine'></section>
            <img className='deleteBtn' onClick={()=>deleteItem(item.id)} src={deleteBtn}/>

        
        

    </div>
    
  )
}

export default CartItem
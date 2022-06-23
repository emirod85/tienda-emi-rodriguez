
import { useState } from "react"

import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import {  useNavigate } from 'react-router-dom';
import CartList from "../CartList/CartList"
import alert from '../../../assets/img/alert.svg'
import orderSentImg from '../../../assets/img/order_sent.svg'

import './cart.css'



const Cart = () => {

  const {orderId, createOrder, cartList} = useCartContext();
  const [orderSent, setOrderSent] = useState(false)
  let arrow = ">"
  const history = useNavigate()
  const goBack = "<< GO BACK"
  const goBackHandle = ()=>{history(-1)}

  function sendOrderManage(costumerData) {
      setOrderSent(true);
      createOrder(costumerData);
    }

  
    return (
    <div className='cartContainer'>
    {cartList&&
    
    <div>
            <h1 className='cartTitle'>SHOPPING CART {arrow}</h1>
            <div className='orderSent'>            
                {orderSent && 
                <>
                  <div className='sendContainer'>
                      <img className='sentImg' src={orderSentImg}/>

                      <h3 className="congrats">Congrats! The purchase was successful.</h3>
                        
                      <h3 className="orderStyle">We are preparing your order. </h3>
                      <h3 className="sendStyle">Your traking number is <span className="idColor">{orderId}</span></h3> 
                      <h3 className="orderStyle">Please check your email for further details. </h3>
                      <h3 className="orderStyle">Thanks for shopping with us :) </h3>
                       <Link to='/products'>
                <button className='goShoppingBtn'>SHOP AGAIN!</button>
              </Link>

              <h2 className='goBackBtn' onClick={goBackHandle} >
                        {goBack}
                    </h2>
                
                  </div>
                </>
                }   
            </div>

            <div>
                <CartList sendOrderManage={sendOrderManage}/>
            </div>

        </div>

        }
    {cartList=='' && orderSent==false &&
    <>

        
        <div className='emptyCartDiv'>
              <img className='imgAlert' src={alert} />
             <p>OH NO! Your cart it’s empty. </p><p> Looks like you haven’t added anything to your cart yet.</p>

              <Link to='/products'>
                <button className='goShoppingBtn'>Start Shopping!</button>
              </Link>

              <h2 className='goBackBtn' onClick={goBackHandle} >
                        {goBack}
                    </h2>
        
        </div>
    </>
  }
    </div>
    
    )
    
 
}


export default Cart
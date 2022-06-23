import { Button, Spinner} from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import BuyDataForm from "../buyDataForm/BuyDataForm";
import "./CartList.css"


const CartList = ({sendOrderManage}) => {


    const [costumerData, setCostumerData] = useState({ name: '', phone: '', email: '', email2: ''});

    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [email2Error, setEmail2Error] = useState(false);

    const { cartList, clearCart, totalPrice} = useCartContext()

    function handlerChange(e) {
    
        setCostumerData({
        ...costumerData,
        [e.target.name]: e.target.value
    });
    }

   function dataManage() {
        setNameError(!costumerData.name);
        setPhoneError(!costumerData.phone);
        setEmailError(!costumerData.email);
        setEmail2Error(!(costumerData.email2 === costumerData.email));
        if (costumerData.name && costumerData.phone && costumerData.email && (costumerData.email2 === costumerData.email)) {
              sendOrderManage(costumerData);
          }}
      

  return (
   <>
      <section className='checkOutSection'>
        
          <div className='noFormSect'>

        
            
            {cartList ? 
              (
                (cartList.map(item => {

                  return (
                      
                      <CartItem key={item.id} item={item}/>
                  
                    );
                }))
                  
              )
            : 

              <Spinner className='spinnerStyle' animation="border" variant="secondary" />
            
            }


            {cartList.length !== 0 &&

              (
                <>
                  <div className="alignBtns">

                    <div className='totalPrice'>
                      Total price: U$D {totalPrice()}
                    </div>

                    <div>

                      <button 
                              className="clearKeepCartBtn"
                              onClick={clearCart}
                              >
                          CLEAR CART
                      </button>

                      <Link to='/'>
                          <button className="clearKeepCartBtn" >KEEP SHOPPING</button>
                      </Link>
                    </div>
                  </div>
                </>
                      )
          
                    }
          </div>

          <div className="formSection">   
              {cartList.length !== 0 && (
                
                <>


                  <div className="dataForm">
                      <BuyDataForm handlerChange={handlerChange}/>
                  </div>


                  <button className='placeOrdenBtn'
                    onClick={dataManage}
                      // disabled={ 
                      //               costumerData.name == "" ||
                      //               costumerData.phone == "" ||
                      //               costumerData.email == "" ||
                      //               (costumerData.email !== costumerData.email2)  
                      //  }
                      
                      >PLACE ORDER
                  </button>

                  <div className='spanStyleContainer'>                  
                    {nameError && <span className="alertSpan">*Please, enter a name.</span>}
                    {phoneError && <span className="alertSpan">*Please, enter your number phone.</span>}
                    {emailError && <span className="alertSpan">*Please, enter you e-mail.</span>}
                    {email2Error && <span className="alertSpan">*The E-mail address doesn´t match.</span>}
                  </div>

                </>
              )}
          </div>
      </section>

    </>
  )
}

export default CartList


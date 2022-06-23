import { createContext,useContext, useState } from "react";
import { addDoc, collection, getFirestore, where, query, documentId, writeBatch, getDocs } from "firebase/firestore";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) => {

  const [cartList, setCartList] = useState([])
  const [orderId, setOrderId] = useState();
  

  
  const addToCart = (item, qty) => {

    if (cartList.some((el) => el.id === item.id)) {
     alert("Ya habias agregado este producto, sumamos cantidad")
      const newCart = cartList.map((el) => {
        if (el.id === item.id) {          
          el.qty += qty; 
          return el; 
        } else {
          return el;
        }
      });
      setCartList(newCart);
    
    } else {

      alert("Agregaste este producto")
      let newProduct = { ...item, qty };
      setCartList([...cartList, newProduct]);
    }
  };

  const deleteItem = (id) => {
      const newCart = [...cartList];
      setCartList(newCart.filter(prod => prod.id !== id))
  }

  const clearCart = () =>{
      setCartList([])
  }

  const totalQty = () => {
      return cartList.reduce(
          (counter, prod)=> counter += prod.qty, 0
      )
  }

  const totalPrice = () => {
  return cartList.reduce(
      (counter, prod)=> counter += (prod.qty * prod.price), 0
  )
    }

    function createOrder (costumerData){
    
      let order = {} 
      
      order.buyer = costumerData
      order.total = totalPrice()
      order.date = new Date()
      order.items = cartList.map(item => {
          const id = item.id
          const name = item.description
          const qty = item.qty
          const price = item.price*item.qty
          const newStock = item.stock-item.qty
    
          return {id, name, qty, price, newStock}    
          })

      async function updateStocks() {
        const queryCollectionStocks = collection(db, 'items');
        const queryUpdateStocks = query(queryCollectionStocks, where(documentId(), 'in', cartList.map(item => item.id)));
        const batch = writeBatch(db);

        await getDocs(queryUpdateStocks)
        .then(resp => resp.docs.forEach(
            res => batch.update(res.ref, {stock: order.items.find(item => item.id === res.id).newStock})
        ))
        .catch(err => console.log(err))

        batch.commit()
      }

      // crear en firestore
      const db = getFirestore()
      const queryCollection = collection(db, 'orders')
      addDoc(queryCollection, order)
        .then(resp => setOrderId(resp.id))
        .then(() => updateStocks())
        .catch(err => console.log(err))
        .finally(()=>clearCart())

  }


    return(
        
        <CartContext.Provider value={{
            cartList,
            orderId,
            addToCart,
            clearCart,
            deleteItem,
            totalQty,
            totalPrice,
            createOrder,
        
        }}>

            {children}

        </CartContext.Provider>

        )

}

export default CartContextProvider
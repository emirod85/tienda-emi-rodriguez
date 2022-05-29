import { createContext,useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])




  const addToCart = (item, cantidad) => {

    if (cartList.some((el) => el.id === item.id)) {

     alert("Ya habias agregado este producto, sumamos cantidad")

      const newCart = cartList.map((el) => {
        if (el.id === item.id) {          
          el.cantidad += cantidad; 
          return el; 
        } else {
          return el;
        }
      });

      setCartList(newCart);
    
    } else {

      alert("Agregaste este producto")

      let newProduct = { ...item, cantidad };
      setCartList([...cartList, newProduct]);
    }
  };

    const deleteItem = (id) => {
        const newCart = [...cartList];
        setCartList(newCart.filter(prod => prod.id !== id))
    }

    const vaciarCart = () =>{
        setCartList([])
    }

    const cantidadTotal = () => {
        return cartList.reduce(
            (contador, prod)=> contador += prod.cantidad, 0
        )
    }

        const precioTotal = () => {
        return cartList.reduce(
            (contador, prod)=> contador += (prod.cantidad * prod.price), 0
        )
    }



    return(
        
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCart,
            deleteItem,
            cantidadTotal,
            precioTotal
        }}>

            {children}

        </CartContext.Provider>

        )

}

export default CartContextProvider
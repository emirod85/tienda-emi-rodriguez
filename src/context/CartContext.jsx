import { createContext,useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    // function addToCart(item) {
    //     setCartList([
    //         ...cartList, 
    //         {item}
    //     ])
    // }

    ///////////////////////////////////////////
    
    // function isInCart(id) {
    // return cartList.some(el => el.item.id === id);
    // }
    
    
    function addToCart(item, cantidad) {

        if (cartList.some(el => el.item.id === item.id)) {

            let i = cartList.findIndex(el => el.item.id === item.id);
            
            const newCartList = cartList;

            newCartList[i].item.cantidad += item.cantidad;

            setCartList(newCartList);

        } else {
            alert("Ya agregaste este producto")
            
            setCartList([
                ...cartList,
                {item}]);
            }
        }
////////////

//   const addToCart = (item, cantidad) => {

//     if (cartList.some((el) => el.id === item.id)) {
//      alert("Ya habias agregado este producto, sumamos cantidad")
//       const newCart = cartList.map((el) => {
//         if (el.id === item.id) {          
//           el.cantidad += item.cantidad; 
//           return el; 
//         } else {
//           return el;
//         }
//       });

//       setCartList(newCart);
//     } else {
//       alert("Agregaste este producto")
//       let newProduct = { ...item, cantidad };
//       setCartList([...cartList, newProduct]);
//     }
//   };






        const deleteItem = (id) => {
        const newCart = [...cartList];
        let index = newCart.findIndex((product) => product.item.id ===id);
        newCart.splice(index,1);

        setCartList([...newCart])
    }

////////////////////////////////////////////////



    const vaciarCart = () =>{
        setCartList([])
    }


    return(
        
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCart,
            deleteItem
        }}>

            {children}

        </CartContext.Provider>

        )

}

export default CartContextProvider
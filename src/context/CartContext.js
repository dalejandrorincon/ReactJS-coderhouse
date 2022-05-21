import React from "react"
/* ---------------------------- Libreria Toastify --------------------------- */
import { toast } from 'react-toastify';

/* -------- Creacion del contexto para ser usado en otros componentes ------- */
const CartContext = React.createContext();
//provider: se encarga de establecer el valor del contexto y pasar ese valor a los otros componentes
const {Provider} = CartContext;

const CartProvider = ({children}) => {
  /* ----------------------- Estado inicial del carrito ----------------------- */
  const [cart, setCart] = React.useState([]);

  /* ---------------------------- Funcion addToCart --------------------------- */
  const addToCart = (item , count) => {
    //console.log(isInCart(item.id))
    /* ---------------- Valida si el producto esta en el carrito ---------------- */
    if(isInCart(item.id)){
      console.log("cart");
      /*Se mapean los elementos del carrito, y se valida que no existan duplicados
      En caso de existir el producto, le suma una unidad a la cantidad*/
      const newCart = cart.map(cartItem => {
        if(cartItem.id === item.id){
          cartItem.quantity++
        }
        return cartItem;
      })
      /* --------------------- Se cambia el estado del carrito -------------------- */
      setCart(newCart);
    }
    /* ----- Si el producto no está en el carrito, lo agrega con cantidad 1 ----- */
    else{
      setCart([...cart, {...item, quantity: +count}])
    }
    /* ------------------------ Confirmacion con toastify ----------------------- */
    onAdded();
  }
/* ---------------------------- Funcion isInCart ---------------------------- */
  /* - Valida si el item recibido se encuentra en el carrito comparando el id - */
  const isInCart = (id) => {
    return cart.find(item => item.id === id)
  }
  /* ----------------------- Función de confirmación ----------------------- */
  const onAdded = () => {
  
    toast.success(`Producto añadido correctamente al carrito`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }
  /* ------------------------- Funcion remove to Cart ------------------------- */
  const removeFromCart = (id) => {
    const newCart = cart.filter((cartItem) => cartItem.id === id)
    setCart(newCart)
  }
  /* --------------------------- Funcion borrar todo -------------------------- */
  const deleteAll = () => {
    setCart([]);
  }
  console.log(cart)
  return(
    <Provider value={{
      addToCart,
      removeFromCart,
      deleteAll,
      isInCart,
      cart,
    }}>
      {children}
    </Provider>
  )
}

export {CartContext, CartProvider}
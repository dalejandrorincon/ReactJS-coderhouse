import React from "react"
import { NavLink } from "react-router-dom";
/* ------------------------ Importacion del contexto ------------------------ */
import { CartContext } from "../../context/CartContext";
export default function Cart(){
    /*
    2. Mostrar desglose del carrito
        - Expandir la vista
        - Mostrar lista de productos del carrito
        - Dar estilo al contexto y al array cart, e imprimir lo que tenga adentro
        - Importar el context, mapear el cart cart.map((item)=>{})
    4. Mostrar todos los items agregados, agrupados
    5. Por cada item tenemos que agregar un botón para eliminar 
        - Finalizar la función en el context.
        - OnClick que ejecuta la función
    6. Si no hay items en el cart, debe salir mensaje condicional y botón que regrese a comprar.
    7. Modificar el icono del carrito, que muestre la cantidad de unidades agregadas.
        - Hacer una función que mapee y cuente las cantidades de cada producto
    */
   /* ------------- Se obtiene el valor del contexto con useContext recibe "isInCart" y "addToCart"------------ */
    const { cart } = React.useContext(CartContext);
    console.log(!cart.length)
    !cart.length ? console.log("El carrito esta vacio") : (cart.map((item)=>{
        console.log(item.title);
    })) 
    return(
        <h1>Carrito</h1>
    )
}
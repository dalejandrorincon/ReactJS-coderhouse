import React from "react";
import {NavLink} from "react-router-dom"
/* ------------------- Importacion de libreria fontAwesome ------------------ */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
/* --------------- Importación del contexto --------------- */
import { CartContext } from "../../context/CartContext";

export default function CartIcon(){
    /* ------------- Se obtiene el valor del contexto ----------- */
    const { cart } = React.useContext(CartContext);

    let cartQuantity = cart.reduce((acc,item) => {
        return acc + item.quantity
    }, 0);
    return(
        <div>
            <NavLink to="/cart"><FontAwesomeIcon icon={faBasketShopping} size="2x" style={{ color: '#f07d78' }} /></NavLink>
            {cart.length > 0 && <span className="countNumber">{cartQuantity}</span>}
        </div>
    )
}
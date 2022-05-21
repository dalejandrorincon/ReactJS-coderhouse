import React from "react";
import {NavLink} from "react-router-dom"
/* ------------------- Importacion de libreria fontAwesome ------------------ */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
/* --------------- Importación del contexto --------------- */
import { CartContext } from "../../context/CartContext";

export default function CartIcon(){
    /* ------------- Se obtiene el valor del contexto con useContext en la const cart------------ */
    const { cart } = React.useContext(CartContext);
    return(
        <div>
            <NavLink to="/cart"><FontAwesomeIcon icon={faBasketShopping} size="2x" style={{ color: '#f07d78' }} /></NavLink>
            <span className="countNumber">{cart.length}</span>
        </div>
    )
}
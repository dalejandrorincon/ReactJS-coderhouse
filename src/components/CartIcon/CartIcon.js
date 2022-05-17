import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from "react-router-dom"
export default function CartIcon({count}){
    return(
        <div>
            <NavLink to="/cart"><FontAwesomeIcon icon={faBasketShopping} size="2x" style={{ color: '#f07d78' }} /></NavLink>
            <span className="countNumber">{count}</span>
        </div>
    )
}
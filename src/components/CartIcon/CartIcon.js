import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
export default function CartIcon({count}){
    return(
        <div>
            <FontAwesomeIcon icon={faBasketShopping} size="2x" style={{ color: '#f07d78' }} />
            <span className="countNumber">{count}</span>
        </div>
    )
}
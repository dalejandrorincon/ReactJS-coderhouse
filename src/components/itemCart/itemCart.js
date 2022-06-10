import React from "react";
/* ------------------------ Importación de librerias ------------------------ */
import { Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

/* ------------------------ Importacion del contexto ------------------------ */
import { CartContext } from "../../context/CartContext";

export default function ItemCart({ item }) {
  const { removeFromCart } = React.useContext(CartContext);
  const totalPrice = item.quantity * item.price;
  return (
    <tr>
      <td className="text-center">
        <Button className="btn btn-danger btn-rounded" onClick={() => removeFromCart(item)}>
          <FontAwesomeIcon icon={faCircleXmark} size="1x" />
        </Button>
      </td>
      <td className="text-center"><Image src={item.image} /></td>
      <td>{item.title}</td>
      <td>{item.quantity}</td>
      <td>{totalPrice} COP</td>
    </tr>
  )
}
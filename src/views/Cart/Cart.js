import React from "react"
import { Link } from "react-router-dom";
import { Row, Col, Button, Table, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import ItemCart from "../../components/itemCart/itemCart";
/* ------------------------ Importacion del contexto ------------------------ */
import { CartContext } from "../../context/CartContext";
export default function Cart() {

	/* ------------- Se obtiene el valor del contexto con useContext ------------ */
	const { cart, deleteAll } = React.useContext(CartContext);

	/* ------------------ Se calcula el valor total del carrito ----------------- */
	let cartTotal = cart.reduce((acc, item) => {
		return acc + (item.price * item.quantity)
	}, 0);
	/* --------- Renderizado condicional validando el tamaño del carrito -------- */
	return (
		!cart.length ?
			<Container>

				<Row className="empty-cart text-center">
					<Col>
						<span>
							Tu carrito se encuentra vacio<br />
							<Link to={"/productos"}><FontAwesomeIcon icon={faArrowLeftLong} /> Regresar a la tienda</Link>
						</span>
					</Col>
				</Row>
			</Container> :
			<Container className="mt-5">
				<h1>Carrito</h1>
				<Row>
					<Col>
						<Table striped className="mt-3 shopping-cart">
							<tbody>
								<tr>
									<th></th>
									<th></th>
									<th>Item</th>
									<th>Cantidad</th>
									<th>Precio</th>
								</tr>
								{cart.map((item) => (<ItemCart item={item} key={item.id} />))}
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td>Subtotal</td>
									<td>{cartTotal} COP</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
				<Row className="text-center mb-4 d-flex align-items-center justify-content-center">
					<Col md="auto"><Button variant="link" className="delete-all" onClick={() => deleteAll()}>Vaciar carrito</Button></Col>			
					<Col md="auto"><Link className="checkout-btn btn btn-rounded" to={"/checkout"}>Finalizar compra</Link></Col>
				</Row>
			</Container>
	)
}
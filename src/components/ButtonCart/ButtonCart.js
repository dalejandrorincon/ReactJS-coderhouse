import React from "react";
import { Row } from "react-bootstrap";

export default function ButtonCart({count, setCount, stock, onSubmit}) {
  /* ----------------------- funcion adicionar productos ---------------------- */
  const onAdd = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }
  /* ------------------------ Funcion restar productos ------------------------ */
  const onDecrease = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  /* ----------------------- Componente de presentación ----------------------- */
  const StockButton = ({ handleOnClick, text }) => {
    return <button className="stockButton" onClick={handleOnClick}>{text}</button>

  }
  /* ----------------------- Componente de presentación ----------------------- */
  const AddButton = ({ handleOnSubmit }) => {
    return <button className="addButton" onClick={handleOnSubmit}>Añadir al carrito</button>
  }
  return (
      <div className="addButton-container">
        <Row>
          <div className="counter mx-auto w-75">
            <span>Cant.</span>
            <StockButton text="-" handleOnClick={onDecrease} />
            <span className="countNumber">{count}</span>
            <StockButton text="+" handleOnClick={onAdd} />
          </div>
        </Row>
        <Row className="w-75 mx-auto mt-3">
          <AddButton handleOnSubmit={onSubmit} />
        </Row>
      </div>
  )
}
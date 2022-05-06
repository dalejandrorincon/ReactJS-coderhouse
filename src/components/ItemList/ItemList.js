import { Row } from "react-bootstrap"
import {productos}  from "../../data/productos"
import Item from "../Item/Item"
export default function ItemList() {
  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000)

  })
  task.then((result) => {
    console.log(result)
  }, err => {
    console.log(err)
  }).catch((err) => {
    console.log(err)
  })
  return (
    <Row className="justify-content-center">
      {productos.map((product) => (
        <Item product={product} key={product.id}/>)
      )}
    </Row>
  )
}
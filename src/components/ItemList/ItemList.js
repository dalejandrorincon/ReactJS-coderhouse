
import { Row } from "react-bootstrap";
import Item from "../Item/Item";
export default function ItemList({items}) {
  //console.log(items)
  return (
    <Row className="justify-content-center">
      {items.map((item) => ( <Item product={item} key={item.id}/>))} 
    </Row>
  )
}
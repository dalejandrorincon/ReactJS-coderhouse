import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Item from "../Item/Item";
import axios from "axios";
export default function ItemList({items}) {
  return (
    <Row className="justify-content-center">
      {items.map((item) => ( <Item product={item} key={item.id}/>))} 
    </Row>
  )
}
import { useEffect, useState } from "react";
import axios from "axios"
import { Container, Row } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const {productId} = useParams();
  const [item, setItem] = useState([]);
  const getItem = () => {
    axios.get("https://api.mercadolibre.com/sites/MLA/search?q=camisetas")
      .then((response) => setItem(response.data.results[productId]))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
      getItem();
  }, {})
  return (
    <Container>
        <ItemDetail item={item} key={item.id} />
    </Container>
  )
}
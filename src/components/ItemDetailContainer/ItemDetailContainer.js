import { useEffect, useState } from "react";
import axios from "axios"
import { Container, Row } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail"
export default function ItemDetailContainer({itemId, title}) {
  const [item, setItem] = useState([]);
  const getItem = () => {
    axios.get("https://api.mercadolibre.com/sites/MLA/search?q=camisetas&limit=8")
      .then((response) => setItem(response.data.results[itemId]))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    setTimeout(() => {
      getItem()
    }, 3000)
  }, [])
  return (
    <Container>
      <h2>{title}</h2>
        <ItemDetail item={item} key={item.id} />
    </Container>
  )
}
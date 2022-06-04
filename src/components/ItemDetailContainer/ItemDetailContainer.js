import React from "react";
import axios from "axios"
import { Container } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const {productId} = useParams();
  const [item, setItem] = React.useState({});
  const getItem = () => {
    axios.get("https://api.mercadolibre.com/sites/MLA/search?q=camisetas")
      .then((response) => {
        setItem(response.data.results.find(element => element.id === productId)); 
      })
      .catch((err) => console.log(err)) 
  }
  React.useEffect(() => {
      getItem();
  }, [productId]) 
  return (
    <Container>
        <ItemDetail item={item} />
    </Container>
  )
}
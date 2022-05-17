import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { Container, Row, Col } from "react-bootstrap"
import axios from "axios";
export default function ItemListContainer({ title, categoryName }) {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      if(categoryName){
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${categoryName}&limit=9`)
        .then((response) => { setProductList(response.data.results) })
        .catch((err) => console.log(err))
      }
      else{
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=camisetas&limit=9`)
        .then((response) => { setProductList(response.data.results) })
        .catch((err) => console.log(err))
      }
    }, 3000)
  }, [categoryName])
  console.log(productList)
  return (

    <Container className="itemList-Container">
      <Row>
        <Col className="my-4"><h2>{title}</h2></Col>
      </Row>
      <ItemList items={productList} />
    </Container>
  )
}
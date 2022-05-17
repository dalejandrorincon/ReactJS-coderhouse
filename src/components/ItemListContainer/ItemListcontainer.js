import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { Container, Row, Col } from "react-bootstrap"
import axios from "axios";
import { useParams } from "react-router-dom";
export default function ItemListContainer({ title }) {
  const {categoryName} = useParams();
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      if(categoryName){
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${categoryName}&limit=2`)
        .then((response) => { 
          setProductList(response.data.results)
          console.log(productList) })
        .catch((err) => console.log(err))
      }
      else{
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=camisetas&limit=9`)
        .then((response) => { setProductList(response.data.results) })
        .catch((err) => console.log(err))
      }
    }, 3000)
  }, [categoryName])

  return (

    <Container className="itemList-Container">
      <Row>
        <Col className="my-4"><h2>{title} {categoryName}</h2></Col>
      </Row>
      <ItemList items={productList} />
    </Container>
  )
}
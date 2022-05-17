import ItemList from "../ItemList/ItemList";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ItemListContainer({ title }) {
  const {categoryName} = useParams();
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      if(categoryName){
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${categoryName}&limit=12`)
        .then((response) => { 
          setProductList(response.data.results)
          console.log(productList) })
        .catch((err) => console.log(err)) 
      }
      else{
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=camisetas&limit=12`)
        .then((response) => { setProductList(response.data.results) }) 
        .catch((err) => console.log(err))
      }
    }, 3000)
  }, [categoryName])

  return (
    <Container>
      <Row>
        <Col className="my-4"><h2>{title}</h2></Col>
      </Row>
      <ItemList items={productList}/>
    </Container>
  )
}
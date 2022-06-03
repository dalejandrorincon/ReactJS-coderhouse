import ItemList from "../ItemList/ItemList";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ItemListContainer({ title }) {
  const {categoryName} = useParams();
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    
      if(categoryName){
        setTimeout(() => {
          setIsLoading(false);
        }, 2000)
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${categoryName}&limit=12`)
        .then((response) => { 
          setProductList(response.data.results)
          console.log(productList) })
        .catch((err) => console.log(err)) 
      }
      else{
        setTimeout(() => {
          setIsLoading(false);
        }, 2000)
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=camisetas&limit=12`)
        .then((response) => { setProductList(response.data.results) }) 
        .catch((err) => console.log(err))
      }
    
  }, [categoryName, isLoading])

  return isLoading ? (
    <Container className="text-center">
      <Spinner animation="grow" />
    </Container>
  ) :(
    <Container>
      <Row>
        <Col className="my-4"><h2>{title}</h2></Col>
      </Row>
      <ItemList items={productList}/>
    </Container>
  )
}
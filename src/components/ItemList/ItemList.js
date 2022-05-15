import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Item from "../Item/Item";
import axios from "axios";
export default function ItemList() {
  const [productList, setProductList] = useState([]);
  const loadProducts = new Promise((resolve, reject) => {
    resolve(axios.get("https://api.mercadolibre.com/sites/MLA/search?q=camisetas&limit=6"))
  })
  useEffect(() => {
    setTimeout(() => {
      loadProducts.then((response) => {
        setProductList(response.data.results);
      }).catch((err) => console.log(err))
    },2000)
  }, [])
  return (
    <Row className="justify-content-center">
      {productList.map((item) => (
        <Item product={item} key={item.id}/>)
      )} 
    </Row>
  )
}
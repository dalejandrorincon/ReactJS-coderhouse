import { useEffect, useState } from "react";
import { Row } from "react-bootstrap"
import {products}  from "../../data/products"
import Item from "../Item/Item"
export default function ItemList() {
  const [productList , setProductList] = useState([]);
  const loadProducts = new Promise((resolve, reject) => {
    let condition = true;
    setTimeout(() => {
      if (condition){
        resolve(products);
      }
      else{
        reject('Los productos no se cargaron correctamente');
      }
    }, 3000)
  })
  useEffect(() =>{
    loadProducts.then((res)=>{
      setProductList(res)
    },err => {
      console.log(err)
    }).catch((err) => {
      console.log(err)
    })
  },[])
  return (
    <Row className="justify-content-center">
      {productList.map((product) => (
        <Item product={product} key={product.id}/>)
      )}
    </Row>
  )
}
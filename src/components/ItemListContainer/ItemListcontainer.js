import ItemList from "../ItemList/ItemList";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import React from "react";
//import axios from "axios";
import { getFirestore, collection, getDocs, query, where, limit } from "firebase/firestore";

export default function ItemListContainer({ title }) {
  const { categoryName } = useParams();
  const [productList, setProductList] = React.useState([]);

  React.useEffect(() => {
    const db = getFirestore();
    /* ------------------------- Importar la coleccion ------------------------ */
    const productsRef = collection(db, "productos");
    if (categoryName) {
      const querySearch = query(
        collection(db, "productos"),
        where("categoryName", "==", categoryName),
        limit(6)
      );
      getDocs(querySearch).then(snapshots => {
        if (snapshots.size === 0) {
          console.log("No hay productos")
        }
        setProductList(snapshots.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      })
    } else {
      getDocs(productsRef).then(snapshots => {
        if (snapshots.size === 0) {
          console.log("No hay productos")
        }
        setProductList(snapshots.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      })
    }

  }, [categoryName])
  return (
    <Container>
      <Row>
        <Col className="my-4"><h2>{title}</h2></Col>
      </Row>
      <ItemList items={productList} />
    </Container>
  )
}
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import React from "react";
//import axios from "axios";
import { getFirestore, collection, getDocs, query, where, limit } from "firebase/firestore";

export default function ItemListContainer({ title }) {
  const { categoryName } = useParams();
  const [productList, setProductList] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const db = getFirestore();
    /* ------------------------- Importar la coleccion ------------------------ */
    const productsRef = collection(db, "productos");
    if (categoryName) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      const querySearch = query(
        collection(db, "productos"),
        where("categoryName", "==", categoryName),
        limit(6)
      );
      getDocs(querySearch).then(snapshots => {
        if (snapshots.size === 0) {
          console.log("No hay productos");
        }
        setProductList(snapshots.docs.map(doc => ({ id: doc.id, ...doc.data() })));

      })
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      getDocs(productsRef).then(snapshots => {
        if (snapshots.size === 0) {
          console.log("No hay productos");
        }
        setProductList(snapshots.docs.map(doc => ({ id: doc.id, ...doc.data() })));

      })
    }

  }, [categoryName]);

  return isLoading ? <Loading /> : (
    <Container>
      <Row>
        <Col className="my-4"><h2>{title}{categoryName}</h2></Col>
      </Row>
      <ItemList items={productList} />
    </Container>)
}

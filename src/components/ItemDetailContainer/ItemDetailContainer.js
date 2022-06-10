import React from "react";
import axios from "axios"
import { Container } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default function ItemDetailContainer() {
  const {productId} = useParams();
  const [item, setItem] = React.useState({});

  const db = getFirestore();

  React.useEffect(() => {
    const productRef = doc(db, "productos", productId);
    getDoc(productRef).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
    });
  }, [productId]) 
  return (
    <Container>
        <ItemDetail item={item} />
    </Container>
  )
}
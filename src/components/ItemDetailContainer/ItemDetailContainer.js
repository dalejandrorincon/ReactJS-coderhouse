import React from "react";
import { Container } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Loading from "../Loading/Loading";

export default function ItemDetailContainer() {
  const {productId} = useParams();
  const [item, setItem] = React.useState({});
  const [isLoading, setLoading] = React.useState(true);

  const db = getFirestore();

  React.useEffect(() => {
    setTimeout(()=>{
      setLoading(false);
    }, 1000)
    const productRef = doc(db, "productos", productId);
    getDoc(productRef).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
    });
  }, [productId, isLoading]) 
  return isLoading ? <Loading/> : (
    <Container>
        <ItemDetail item={item} />
    </Container>
  )
}
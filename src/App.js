import { BrowserRouter, Routes, Route } from "react-router-dom";
/* ----------------- importacion componentes de presentacion ---------------- */
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
/* -------------------------- importacion de vistas ------------------------- */
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";
import Checkout from "./views/Checkout/Checkout"
/* ------------------------ Importacion del contexto ------------------------ */
import {CartProvider} from "./context/CartContext"

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/productos" element={<ItemListContainer title={"Nuestros productos"} />} />
          <Route exact path="/producto/:productId" element={<ItemDetailContainer />} />
          <Route exact path="/categoria/:categoryName" element={<ItemListContainer title={"Listado de productos"} />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
      <Footer brand={"Mulana"} />
    </BrowserRouter>
  );
}
export default App;

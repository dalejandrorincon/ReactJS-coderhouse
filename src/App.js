import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListcontainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import Product from "./views/Product/Product";
import Category from "./views/Category/Category";
import Cart from "./views/Cart/Cart";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/productos" element={<Products/>}/>
        <Route exact path="/producto/:id" element={<Product/>}/>
        <Route exact path="/categoria/:categoryName" element={<Category/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    {/* <div className="App">
      <Header />
      <main>
          <ItemListContainer title={"Productos"}/>
          <ItemDetailContainer itemId={3} title="Detalle del producto"/>
      </main>
      <Footer greeting={"Mulana"} />
    </div> */}
    </>
  );
}

export default App;

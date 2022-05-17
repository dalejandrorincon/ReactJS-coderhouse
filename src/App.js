import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListcontainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/productos" element={<ItemListContainer title={"Nuestros productos"}/>}/>
        <Route exact path="/:categoria/:productId" element={<ItemDetailContainer/>}/>
        <Route exact path="/categoria/:categoryName" element={<ItemListContainer title={"Categoria"}/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer brand={"Mulana"} />
    </BrowserRouter>
  );
}

export default App;

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListcontainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
          <ItemListContainer title={"Productos"}/>
          <ItemDetailContainer itemId={3} title="Detalle del producto"/>
      </main>
      <Footer greeting={"Mulana"} />
    </div>
  );
}

export default App;

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListcontainer";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
          <ItemListContainer title={"Productos"}/>
      </main>
      <Footer greeting={"Mulana"} />
    </div>
  );
}

export default App;

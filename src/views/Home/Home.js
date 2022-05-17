import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Container } from "react-bootstrap"
import ItemListContainer from "../../components/ItemListContainer/ItemListcontainer"
export default function Home() {
  return (
      <div className="App">
        <Header />
        <main>
          <ItemListContainer title={"Nuestros productos"}/>
        </main>
        <Footer brand={"Mulana"} />
      </div>
  )
}
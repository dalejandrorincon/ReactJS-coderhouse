import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import ItemListContainer from "../../components/ItemListContainer/ItemListcontainer"
export default function Products() {
  return (
    <> 
      <Header/>
      <ItemListContainer title={"Conoce todos nuestros productos"} />
      <Footer brand={"Mulana"}/>
    </>
  )
}
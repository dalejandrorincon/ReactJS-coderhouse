import { useParams } from "react-router-dom"
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ItemListContainer from "../../components/ItemListContainer/ItemListcontainer";
export default function Category(){
    const {categoryName} = useParams();
    console.log(categoryName)
    return(
        <>
        <Header/>
        <h1>Categoria de productos - {categoryName}</h1> 
        <ItemListContainer categoryName={categoryName}/> 
        <Footer brand={"Mulana"}/>
        </>
    )
}
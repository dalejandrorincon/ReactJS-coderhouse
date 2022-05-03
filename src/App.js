import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Container} from "react-bootstrap";
function App() {
    return (
        <div className="App">
            <Navbar/>
            <main>
                <Container>

                </Container>
            </main>
            <Footer greeting={"Mulana"}/>
        </div>
    );
}

export default App;

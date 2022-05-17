import React from "react"
import {Container} from "react-bootstrap";
export default function Footer({brand}){
    return(
        <footer>
            <Container>
                <h2 style={{textAlign: "center"}}><span>{brand}</span></h2>
            </Container>
        </footer>
    )
}
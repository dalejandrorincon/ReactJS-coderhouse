import React from "react"
import {Container} from "react-bootstrap";
export default function Footer({greeting}){
    return(
        <footer>
            <Container>
                <h2 style={{textAlign: "center"}}><span>{greeting}</span></h2>
            </Container>
        </footer>
    )
}
import React, { Component } from "react";
import "./Contact.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import photo1 from "./ContactImg/screenshot1.png"
import photo2 from "./ContactImg/screenshot2.png"
import photo4 from "./ContactImg/screenshot4.png"

class Contact extends Component {

    render() {
        return (
            <Container>
                <Card className="colorOnly topCard">
                    <CardBody>
                        <CardTitle id="mainHeader">Contact</CardTitle>
                    </CardBody>
                </Card>
            </Container>
        )
    }
}

export default Contact;
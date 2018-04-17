import React, { Component } from "react";
import "./Contact.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

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
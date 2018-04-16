import React, { Component } from "react";
import "./HomePage.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Nav, NavLink, NavItem, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import photo1 from "./screenshot1.png"
import photo2 from "./screenshot2.png"

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Container>
                <div className="video-background">
                    <div className="video-foreground">
                        <iframe src="http://www.youtube.com/embed/M4mQJE4Lao0?autoplay=1&amp;controls=0&amp;loop=1&amp;playlist=M4mQJE4Lao0" frameborder="0" allowfullscreen title="background-movie"></iframe>
                    </div>
                </div>
                <Row id="nav">
                    <Col>
                        <Nav>
                                <NavItem>
                                    <NavLink href="#">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Making the Game</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">How to Play</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Media Gallery</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Contact</NavLink>
                                </NavItem>
                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href="#">
                            <Card id="card">
                                <CardBody>
                                    <CardTitle id="mainHeader">Crystal Collector</CardTitle>
                                    <CardSubtitle>The Game</CardSubtitle>
                                    <CardText>Crystal Collector is a desktop game that currently in development. Be sure to check back for updates!</CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" lg="6">
                        <a href="#">
                            <Card id="card1">
                                <CardImg top width="100%" src={photo1} alt="Game Screenshot 1" />
                                <CardBody>
                                    <CardTitle>Making the Game</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </Col>
                    <Col sm="12" lg="6">
                        <a href="#">
                            <Card id="card2">
                                <CardImg top width="100%" src={photo2} alt="Game Screenshot 1" />
                                <CardBody>
                                    <CardTitle>How to Play</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" lg="6">
                        <a href="#">
                            <Card id="card3">
                                <CardImg top width="100%" src={photo1} alt="Game Screenshot 1" />
                                <CardBody>
                                    <CardTitle>Media Gallery</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </Col>
                    <Col sm="12" lg="6">
                        <a href="#">
                            <Card id="card4">
                                <CardImg top width="100%" src={photo2} alt="Game Screenshot 1" />
                                <CardBody>
                                    <CardTitle>Contact</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default HomePage;
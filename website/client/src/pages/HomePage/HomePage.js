import React, { Component } from "react";
import "./HomePage.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Nav, NavLink, NavItem, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
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
                        <iframe src="https://www.youtube.com/embed/XIrgNRtObyY?autoplay=1&amp;controls=0&amp;loop=1&amp;playlist=XIrgNRtObyY" frameborder="0" allowfullscreen title="background-movie"></iframe>
                    </div>
                </div>
                <Row id="nav">
                    <Col>
                        <Nav>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/MakingTheGame">Making the Game</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/HowToPlay">How to Play</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/MediaGallery">Media Gallery</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card id="card">
                            <CardBody>
                                <CardTitle id="mainHeader">Crystal Collector</CardTitle>

                                <CardText>Crystal Collector is a desktop game that was developed for private use as part of a final project for the University of California, Irvine Web Development Bootcamp Spring 2018 by Tricia Leavitt.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" lg="6">
                        <a href="/MakingTheGame">
                            <Card id="card1">
                                <CardImg top width="100%" src={photo1} alt="Game Screenshot 1" />
                                <CardBody>
                                    <CardTitle>Making the Game</CardTitle>
                                    <CardText>Click here for information about how the game was made, the inspiration for the game, and links to resources.</CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </Col>
                    <Col sm="12" lg="6">
                        <a href="HowToPlay">
                            <Card id="card2">
                                <CardImg top width="100%" src={photo2} alt="Game Screenshot 1" />
                                <CardBody>
                                    <CardTitle>How to Play</CardTitle>
                                    <CardText>Interested in finding out more about how the game works and where to play?</CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" lg="6">
                        <a href="MediaGallery">
                            <Card id="card3">
                                <CardImg top width="100%" src={photo1} alt="Game Screenshot 1" />
                                <CardBody>
                                    <CardTitle>Media Gallery</CardTitle>
                                    <CardText>Visit the media gallery to see content photos and video, as well as behind-the-scenes clips.</CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </Col>
                    <Col sm="12" lg="6">
                        <a href="Contact">
                            <Card id="card4">
                                <CardImg top width="100%" src={photo2} alt="Game Screenshot 1" />
                                <CardBody>
                                    <CardTitle>Contact</CardTitle>
                                    <CardText>Have comments, questions, or suggestions? Visit the Contact section to let me know!</CardText>
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
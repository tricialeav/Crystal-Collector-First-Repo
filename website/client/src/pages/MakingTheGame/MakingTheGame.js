import React, { Component } from "react";
import "./MakingTheGame.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Nav, NavLink, NavItem, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

class MakingTheGame extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Nav>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="MakingTheGame">Making the Game</NavLink>
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
                <Col lg={{size:"10", offset:"1"}}>
                    <Card id="card5">
                        <CardBody>
                            <CardTitle>The Idea</CardTitle>
                            <CardText>As my final project for the University of California, Irvine Web Development Bootcamp Spring 2018, I decided that I wanted to fully embrace the idea that learning new concepts and stepping outside of my comfort zone are now a consistent part of my life and career. For this reason, I chose develop a project in which I would need to utilize an entirely new skill set, in addition to those that I developed during the course of the program. Having always been a fan of video games, I was excited by the challenge that creating my own would provide. Thanks to countless resources, the Unity 3D Game Engine, and the developers who created the artwork found on the Unity Asset Store, this idea turned into a reality with the Crystal Collector game. </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Row>
                    <Col sm="12" md="6">
                        <Card id="card6">
                            <CardBody>
                                <CardTitle>Unity 3D Game Engine</CardTitle>
                                <CardText>Crystal Collector was made using the Unity 3D Game Engine and C# Scripts. The game art, animations, and music were obtained from the Unity Asset store, and can be found by clicking on the links to the right. I have also included links to several resources that were utilized during development.</CardText>
                                <a href="https://unity3d.com/" target="_blank"><Button color="success" className="button">Visit the Unity 3D Website</Button></a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" md="6">
                        <Card id="card7">
                            <CardBody>
                                <CardTitle>Resources</CardTitle>
                                <CardText>
                                    Tutorials: 
                                    <hr />
                                    Unity &amp; C# Tutorials- <a href="https://teamtreehouse.com" target="_blank">Treehouse</a>
                                    <br />
                                    Unity Tutorials- <a href="https://unity3d.com/learn" target="_blank">Unity3D</a>
                                    <br />

                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default MakingTheGame;
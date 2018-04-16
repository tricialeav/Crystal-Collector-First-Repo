import React, { Component } from "react";
import "./MakingTheGame.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Nav, NavLink, NavItem, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Media } from 'reactstrap';
import TreehouseLogo from "./TreehouseLogo.png";
import UnityLogo from "./UnityLogo.png";
import landscape from "./landscape.jpg";
import RedDragon from "./RedDragon.jpg";
import chest from "./chest.jpg";
import waterWell from "./waterWell.jpg"; 
import rocks from "./rocks.jpg";
import crystals from "./crystals.jpg";

class MakingTheGame extends Component {
    render() {
        return (
            <Container>
                <Col>
                    <Card id="card5" className="colorOnly">
                        <CardBody>
                            <CardTitle>The Idea</CardTitle>
                            <CardText>As my final project for the University of California, Irvine Web Development Bootcamp Spring 2018, I wanted to fully embrace the idea that learning new concepts and stepping outside of my comfort zone are now a consistent part of my life and career. For this reason, I chose develop a project in which I would need to utilize an entirely new skill set, in addition to those that I developed during the course of the program. Having always been a fan of video games, I was excited by the challenge that creating my own would provide.
                            <br /><br />
                                Thanks to countless resources, the Unity 3D Game Engine, and the developers who created the artwork found on the Unity Asset Store, this idea turned into a reality with the Crystal Collector game.</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Row>
                    <Col sm="12" md="6">
                        <Card id="card6" className="colorNHover">
                            <CardBody>
                                <a href="https://unity3d.com/" target="_blank">
                                    <CardTitle>Unity 3D Game Engine</CardTitle>
                                    <img src={UnityLogo} alt="Unity Logo" className="logo" />
                                    <CardText>
                                        "Unity Technologies offers a platform for creating beautiful and engaging 2D, 3D, VR, and AR games and apps. A powerful graphics engine and full-featured editor enable you to realize your creative vision fast, and deliver your content to virtually any media or device. You can easily connect to your audiences on PCs, consoles, the web, mobile devices, home entertainment systems, embedded systems, or head-mounted displays.
                                    <br /><br />
                                        More than an engine, Unity helps you achieve ongoing success. It offers everything you need to develop quality content, boost your productivity, and connect with your audience. Tools and resources include the Unity Asset Store, Unity Cloud Build, Unity Analytics, Unity Ads, Unity Everyplay, and Unity Certification. Unity Technologies serves millions of registered developers including large publishers, indie studios, students and hobbyists around the globe."</CardText></a>
                            </CardBody>
                        </Card>
                        <Card id="card7" className="colorOnly">
                            <CardBody>
                                <CardTitle>Animation Triggers</CardTitle>
                                <CardSubtitle>By CubicBrain</CardSubtitle>
                                <iframe src="https://www.youtube.com/embed/N73EWquTGSY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            </CardBody>
                        </Card>
                        <Card id="card8" className="colorNHover">
                            <CardBody>
                                <a href="https://assetstore.unity.com/packages/3d/characters/small-red-dragon-52959" target="_blank">
                                    <CardTitle>Small Red Dragon</CardTitle>
                                    <CardSubtitle>By StoneSnail</CardSubtitle>
                                    <img src={RedDragon} alt="GAme Character Photo" className="logo" />
                                </a>
                            </CardBody>
                        </Card>
                        <Card id="card9" className="colorNHover">
                            <CardBody>
                                <a href="https://assetstore.unity.com/packages/3d/props/exterior/traditional-water-well-4477" target="_blank">
                                    <CardTitle>Water Well</CardTitle>
                                    <CardSubtitle>By 3DMondra</CardSubtitle>
                                    <img src={waterWell} alt="GAme Character Photo" className="logo" />
                                </a>
                            </CardBody>
                        </Card>
                        <Card id="card15" className="colorNHover">
                            <CardBody>
                                <a href="https://assetstore.unity.com/packages/3d/props/stylized-crystal-77275" target="_blank">
                                    <CardTitle>Crystals</CardTitle>
                                    <CardSubtitle>By LowlyPoly</CardSubtitle>
                                    <img src={crystals} alt="GAme Character Photo" className="logo" />
                                </a>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" md="6">
                        <Card id="card10" className="colorNHover">
                            <CardBody>
                                <a href="https://teamtreehouse.com/" target="_blank">
                                    <CardTitle>Treehouse</CardTitle>
                                    <img src={TreehouseLogo} alt="Treehouse Logo" className="logo" />
                                    <CardText>"As members of the Treehouse community, students can learn to build websites, create iPhone and Android apps, build web apps with Ruby on Rails and PHP, learn about user experience, how to start a business, and much more. All of which can be learned online in one comprehensive place. Through hundreds of courses comprised of video tutorials, quizzes, and code challenges created by expert teachers, students can learn to code in languages like Objective-C, HTML, CSS, PHP, Ruby, Swift, SQL, Python, Java and more."</CardText></a>
                            </CardBody>
                        </Card>
                        <Card id="card11" className="colorOnly">
                            <CardBody>
                                <CardTitle>In-Game Camera Controllers</CardTitle>
                                <CardSubtitle>By Jayanam</CardSubtitle>
                                <iframe src="https://www.youtube.com/embed/xcn7hz7J7sI" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            </CardBody>
                        </Card>
                        <Card id="card12" className="colorNHover">
                            <CardBody>
                                <a href="https://assetstore.unity.com/packages/3d/environments/nature-starter-kit-2-52977" target="_blank">
                                    <CardTitle>Game Landscape</CardTitle>
                                    <CardSubtitle>By Shapes</CardSubtitle>
                                    <img src={landscape} alt="Game Landscape Photo" className="logo" />
                                </a>
                            </CardBody>
                        </Card>
                        <Card id="card13" className="colorNHover">
                            <CardBody>
                            <a href="https://assetstore.unity.com/packages/3d/props/interior/treasure-set-free-chest-72345" target="_blank">
                                    <CardTitle>Treasure Chest</CardTitle>
                                    <CardSubtitle>By Fairy Shop</CardSubtitle>
                                    <img src={chest} alt="Treasure Chest Photo" className="logo"/>
                                </a>
                            </CardBody>
                        </Card>
                        <Card id="card14" className="colorNHover">
                            <CardBody>
                            <a href="https://assetstore.unity.com/packages/3d/props/exterior/3d-scanned-rocks-1-62937" target="_blank">
                                    <CardTitle>Rocks</CardTitle>
                                    <CardSubtitle>By Jasu</CardSubtitle>
                                    <img src={rocks} alt="Treasure Chest Photo" className="logo"/>
                                </a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default MakingTheGame;
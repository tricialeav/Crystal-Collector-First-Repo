import React, { Component } from "react";
import "./Contact.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Alert, Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: true
        };

        this.onDismiss = this.onDismiss.bind(this);
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    render() {
        return (
            <Container>
                <Alert isOpen={this.state.visible} toggle={this.onDismiss} id="formAlert">
                    I am an alert and I can be dismissed!
                </Alert>
                <Card className="colorOnly">
                    <CardBody>
                        <CardTitle id="mainHeader">Contact</CardTitle>
                    </CardBody>
                </Card>
                <Row>
                    <Col id="form" md="12" lg="6">
                    <Card className="colorOnly">
                        <Form>
                        <CardTitle>Submit a Comment</CardTitle>
                        <FormGroup>
                                <Label for="exampleName">Name</Label>
                                <Input type="name" name="name" id="exampleName" placeholder="with a placeholder" />
                            </FormGroup>
                        <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Text Area</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                    Join the mailing list
                                </Label>
                            </FormGroup>
                            <Button>Submit</Button>
                        </Form>
                        </Card>
                    </Col>
                    <Col id="returnComments" md="12" lg="6">
                    <Card className="colorOnly">
                        <ListGroup>
                        <CardTitle>Recent Comments</CardTitle>
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Morbi leo risus</ListGroupItem>
                            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>

            // TODO search by e-mail address
        )
    }
}

export default Contact;
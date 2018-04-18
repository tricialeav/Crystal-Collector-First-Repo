import React, { Component } from "react";
import "./Contact.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Alert, Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            name: "",
            email: "",
            comment: "",
            active: false
        };
    }

    toggle() {
        this.setState({
            visible: !this.state.visible
        })
    }

    toggleMail() {
        this.setState({
        active: !this.state.active
    })
    }

    onClick() {
        if(this.state.active === false) {
            this.setState({ active: true});
        } else {
            this.setState({ active: false});
        };
    }

    onSubmit() {
        this.setState({ visible: true });
        let options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                comment: this.state.comment,
                mailingList: this.state.mailingList,
                date: Date.now()
            })
        }

        fetch('url', options).then(response => {
            console.log('Success posting! ' + response.body);
        }).catch(err => {
            console.error('Error posting comment: ' + err);
        })

    }

    handleNameChange = evt => {
        this.setState({
            name: evt.target.value,
            email: evt.target.value,
            comment: evt.target.value,
            mailingList: evt.target.value
        })
    }

    render() {
        return (
            <Container>
                <Alert isOpen={this.state.visible} toggle={this.toggle.bind(this)} id="formAlert">
                    Your comment has been submitted!
                </Alert>
                <Card className="colorOnly">
                    <CardBody>
                        <CardTitle id="mainHeader">Forum</CardTitle>
                    </CardBody>
                </Card>
                <Row>
                    <Col id="form" md="12" lg="6">
                        <Card className="colorOnly">
                            <Form>
                                <CardTitle>Submit a Comment</CardTitle>
                                <FormGroup>
                                    <Label for="exampleName">Name</Label>
                                    <Input type="name" name="name" id="exampleName" placeholder="Jane Doe" onChange={this.handleNameChange.bind(this)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="email@email.com" onChange={this.handleNameChange.bind(this)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText">Text Area</Label>
                                    <Input type="textarea" name="comment" id="exampleText" onChange={this.handleNameChange.bind(this)} />
                                </FormGroup>
                                <FormGroup check id="mailingListOptIn">
                                    <Label check>
                                        <Input type="checkbox"
                                            toggleMail={this.state.active}
                                            onClick={this.onClick.bind(this)} />
                                        Join the mailing list
                                </Label>
                                </FormGroup>
                                <Button onClick={this.onSubmit.bind(this)} id="submitButton">Submit</Button>
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
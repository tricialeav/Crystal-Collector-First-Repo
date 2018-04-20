import React, { Component } from "react";
import "./Contact.css";
import 'bootstrap/dist/css/bootstrap.css';
import API from "../../utils/API";
import { Container, Row, Col, Alert, Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input, ListGroup, ListGroupItem } from 'reactstrap';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            name: "",
            email: "",
            comment: "",
            mailingList: false,
            loadedComments: []
        };
    }

    componentDidMount() {
        this.loadComments();
    }

    loadComments = () => {
        API.getComment()
            .then(res =>
                this.setState({ loadedComments: res.data })
            )
            .catch(err => console.log(err));
    };

    toggle() {
        this.setState({
            visible: !this.state.visible
        })
    }

    togglemail() {
        this.setState({
            active: !this.state.active
        })
    }

    onMailingListChanged() {
        if (this.state.mailingList === false) {
            this.setState({ mailingList: true });
        } else {
            this.setState({ mailingList: false });
        };
    }

    onSubmit(evt) {
        evt.preventDefault();
        this.setState({ 
            visible: true, 
            name: "",
            email: "",
            comment: "",
        }); 
        API.saveComment({
            name: this.state.name,
            email: this.state.email,
            comment: this.state.comment,
            mailingList: this.state.mailingList,
            date: Date.now()
        })
            .then(res => console.log(res))
            .then(res => this.loadComments())
            .catch(err => console.log(err));
    }


    handleNameChange = evt => {
        this.setState({
            name: evt.target.value
        })
    }

    handleEmailChange = evt => {
        this.setState({
            email: evt.target.value
        })
    }

    handleCommentChange = evt => {
        this.setState({
            comment: evt.target.value
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
                                    <Input type="name" name="name" id="exampleName" placeholder="Jane Doe"
                                        value={this.state.name}
                                        onChange={this.handleNameChange.bind(this)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="email@email.com" value={this.state.email}
                                        onChange={this.handleEmailChange.bind(this)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleText">Text Area</Label>
                                    <Input type="textarea" name="comment" id="exampleText" value={this.state.comment} onChange={this.handleCommentChange.bind(this)} />
                                </FormGroup>
                                <FormGroup check id="mailingListOptIn">
                                    <Label check>
                                        <Input type="checkbox"
                                            togglemail={this.state.active}
                                            value={this.state.mailingList}
                                            onClick={this.onMailingListChanged.bind(this)} />
                                        Join the mailing list
                                </Label>
                                </FormGroup>
                                <Button onClick={this.onSubmit.bind(this)} id="submitButton">Submit</Button>
                            </Form>
                        </Card>
                    </Col>
                    <Col id="returnComments" md="12" lg="6">
                        <Card className="colorOnly">
                        <CardTitle>Comments</CardTitle>
                            {this.state.loadedComments.length ? (
                                <ListGroup>
                                    {this.state.loadedComments.map(comments => (
                                        <ListGroupItem key={comments._id}>
                                                <strong>
                                                {comments.date}
                                                <br />{comments.comment}
                                                </strong>
                                            <Button onClick={() => this.deleteComment(comments._id)} />
                                        </ListGroupItem>
                                    ))}
                                </ListGroup>
                            ) : (
                                    <h3>No Results to Display</h3>
                                )}
                        </Card>
                    </Col>
                </Row>
            </Container>

            // TODO search by e-mail address
        )
    }
}

export default Contact;
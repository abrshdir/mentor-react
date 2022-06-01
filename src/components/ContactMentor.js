import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button, Col, Label, Row} from "reactstrap";
import {Control, Errors, Form, LocalForm} from "react-redux-form";
import {Loading} from "./LoadingComponent";

class ContactMentor extends Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log(values)
        this.props.sendMessagestoMentor(values.email, values.message, this.props.mentorId);
        // this.props.resetMessagesForm();
    }

    // debugger
    render() {
        const required = (val) => val && val.length;
        const validMessage = (val) => /^[A-Z0-9.-]/i.test(val);
        const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

        if (this.props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
            );
        } else if (this.props.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
            );
        } else if (this.props.mentor != null) {
            return (
                <div>
                    <div className="card">
                        <section>
                            <base-card>
                                <h2>{this.props.mentor.firstName} {this.props.mentor.lastName}</h2>
                                <h3>${this.props.mentor.hourlyRate}/hour</h3>
                            </base-card>
                        </section>
                    </div>
                    <div className="card">
                        <h2>Interested? Reach out now!</h2>
                        <h2>Contact a mentor now!</h2>
                        <LocalForm model="message" onSubmit = {(values) => this.handleSubmit(values)}  resetOnSubmit={true}>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                                  placeholder="Email"
                                                  className="form-control"
                                                  validators={{
                                                      required, validEmail
                                                  }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Message</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                                      placeholder="Message"
                                                      className="form-control"
                                                      type="message"
                                                      rows={6}
                                                      validators={{
                                                          required, validMessage
                                                      }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".message"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validMessage: 'Invalid Message. Must be between 8 and 14 characters'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Button type="submit" color="primary">
                                Contact
                            </Button>
                        </LocalForm>
                    </div>
                </div>
            )

        }
    }
}

export default ContactMentor;

import React, {useState, useContext, Component} from 'react';
import {LocalForm, Control, Errors} from "react-redux-form";
import {Button, Card, Col, Label, Row} from "reactstrap";
import '../css/login.css'
import '../css/BaseCard.css'
import '../css/Button.css'
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom';

export const Login = (props) => {

    const history = useHistory();

    //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState
    const [Text, setText] = useState(true);

    const changeSignUp = () => {
        setText(prevMode => !prevMode)
    };

    function handleSubmit(values) {
        if (!Text) {
            props.auth(values.email, values.password, 'Sign Up');
            history.push('/home');
        } else {
            props.auth(values.email, values.password, 'login');
            history.push("/home");
        }
        console.log('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }

    function goToContact() {
        return <Link to={'/home'}/>
    }


    const required = (val) => val && val.length;
    const validPassword = (val) => /^[A-Z0-9.-]{8,12}$/i.test(val);
    const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

    return (
        <div>
            <div className="card">
                <LocalForm onSubmit={(values) => handleSubmit(values)}>
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
                        <Label htmlFor="password" md={2}>Password</Label>
                        <Col md={10}>
                            <Control.text model=".password" id="password" name="password"
                                          placeholder="Password"
                                          className="form-control"
                                          type="password"
                                          validators={{
                                              required, validPassword
                                          }}
                            />
                            <Errors
                                className="text-danger"
                                model=".password"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    validPassword: 'Invalid Password. Must be between 8 and 14 characters'
                                }}
                            />
                        </Col>
                    </Row>
                    <Button type="submit"> {Text ? 'LOGIN' : 'SIGNUP'}</Button>
                </LocalForm>


                <Button type="button" color="primary" className="flat" onClick={changeSignUp}>
                    SWITCH TO {Text ? 'SIGNUP' : 'LOGIN'}
                </Button>
            </div>
        </div>
    );
}


import React, { useState } from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Input, Container, Row, Form, Label ,Col,Button, ButtonGroup} from 'reactstrap';
import {postReviewForproduct} from "../../../services/Reviews.Services";
import {RegisterHandler} from "../../../services/Register.Services";


const Register = () => {
    const [rSelected, setRSelected] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    function handleClick() {
        let datas1 = {username: username, firstName: firstname , lastName: lastname , email: email  , password: password , role : rSelected.toUpperCase()  };
        RegisterHandler(datas1).then(response => {
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <CommonLayout parent="home" title="register">
            <section className="register-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="12">
                            <h3>create account</h3>
                            <div className="theme-card">
                                <Form className="theme-form">
                                    <Row>
                                        <Col md="6">
                                            <Label for="fname">First Name</Label>
                                            <Input onChange={(e) => setFirstname(e.target.value)} type="text" className="form-control" id="fname" placeholder="First Name"
                                                required="" />
                                        </Col>
                                        <Col md="6">
                                            <Label for="review">Last Name</Label>
                                            <Input onChange={(e) => setLastname(e.target.value)} type="password" className="form-control" id="lname" placeholder="Last Name"
                                                required="" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <Label for="email">email</Label>
                                            <Input onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" id="email" placeholder="Email" required="" />
                                        </Col>
                                        <Col md="6">
                                            <Label for="review">Password</Label>
                                            <Input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="review"
                                                placeholder="Enter your password" required="" />
                                        </Col>


                                        <Col md="6">
                                            <h5>Choose Role</h5>
                                            <ButtonGroup>
                                                <Button color="danger" onClick={() => setRSelected("Buyer")} active={rSelected === 1}>Buyer</Button>
                                                <Button color="danger" onClick={() => setRSelected("Seller")} active={rSelected === 2}>Seller</Button>
                                            </ButtonGroup>
                                            <p>Role : {rSelected}</p>
                                        </Col>
                                        <Col md="6">
                                            <Label for="username">Username</Label>
                                            <Input onChange={(e) => setUsername(e.target.value)} type="text" className="form-control" id="username" placeholder="username" required="" />

                                        </Col>

                                        <a href="#" className="btn btn-solid" onClick={handleClick}>create Account</a>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Register
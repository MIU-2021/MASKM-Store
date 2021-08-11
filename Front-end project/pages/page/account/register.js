import React, { useState } from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Input, Container, Row, Form, Label ,Col,Button, ButtonGroup} from 'reactstrap';


const Register = () => {
    const [rSelected, setRSelected] = useState(null);
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
                                            <Label for="email">First Name</Label>
                                            <Input type="text" className="form-control" id="fname" placeholder="First Name"
                                                required="" />
                                        </Col>
                                        <Col md="6">
                                            <Label for="review">Last Name</Label>
                                            <Input type="password" className="form-control" id="lname" placeholder="Last Name"
                                                required="" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <Label for="email">email</Label>
                                            <Input type="text" className="form-control" id="email" placeholder="Email" required="" />
                                        </Col>
                                        <Col md="6">
                                            <Label for="review">Password</Label>
                                            <Input type="password" className="form-control" id="review"
                                                placeholder="Enter your password" required="" />
                                        </Col>
                                        <h5>Choose Role</h5>
                                        <Col md="6">
                                            <ButtonGroup>
                                                <Button color="danger" onClick={() => setRSelected("Buyer")} active={rSelected === 1}>Buyer</Button>
                                                <Button color="danger" onClick={() => setRSelected("Seller")} active={rSelected === 2}>Seller</Button>
                                            </ButtonGroup>
                                            <p>Role : {rSelected}</p>
                                        </Col>

                                        <a href="#" className="btn btn-solid">create Account</a>
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
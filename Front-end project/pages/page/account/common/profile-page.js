import React from 'react';
import { Container, Row, Form, Input, Label, Col } from 'reactstrap';
import { CurrentUser } from '../../../../services/User.Services';

const ProfilePage = (props) => {
    const user = props.user;
    console.log(user);
    return (
        <>
            <section className="contact-page register-page">
                <Container>
                    <Row>
                        <Col sm="12">
                            <h3>PERSONAL DETAIL</h3>
                            <Form className="theme-form">
                                <Row>
                                    <Col md="6">
                                        <Label for="name">First Namess</Label>
                                        <Input type="text" className="form-control" id="name" value={user.fname} placeholder="Enter Your name"
                                            required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="email">Last Name</Label>
                                        <Input type="text" className="form-control" id="last-name" value={user.lname} placeholder="Email" required="" />
                                    </Col>
                                   
                                    <Col md="6">
                                        <Label for="review">Phone number</Label>
                                        <Input type="text" maxLength='9' className="form-control" id="review" value={user.phone} placeholder="Enter your number"
                                            required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="email">Email</Label>
                                        <Input type="text" className="form-control" id="email" value={user.email} placeholder="Email" required="" />
                                    </Col>

                                </Row>
                                <Row>
                                    <Col md="12">
                                        <h3>SHIPPING ADDRESS</h3>
                                    </Col>
                                </Row>
                                {user.shippingAddress?
                                <Row>
                                    <Col md="6">
                                        <Label for="name">Address Line</Label>
                                        <Input type="text" className="form-control" id="home-ploat" value={user.shippingAddress.addressLine} placeholder="company name"
                                            required="" />
                                    </Col>
                                    <Col md="6" className="select_input">
                                        <Label for="review">Country *</Label>
                                        <Input type="text" className="form-control" id="address-two" value={user.shippingAddress.country} placeholder="Address"
                                            required="" />
                                        {/* <select className="form-control" size="1">
                                            <option value="India">India</option>
                                            <option value="UAE">UAE</option>
                                            <option value="U.K">U.K</option>
                                            <option value="US">US</option>
                                        </select> */}
                                    </Col>
                                    
                                    
                                    <Col md="6">
                                        <Label for="review">Region/State *</Label>
                                        <Input type="text" className="form-control" id="region-state" value={user.shippingAddress.state} placeholder="Region/state"
                                            required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="review">City *</Label>
                                        <Input type="text" className="form-control" id="city"  value={user.shippingAddress.city} placeholder="City" required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="email">Zip Code *</Label>
                                        <Input type="text" className="form-control" id="zip-code" value={user.shippingAddress.zipCode} placeholder="zip-code"
                                            required="" />
                                    </Col>
                                   
                                </Row>:''}

                                <Row>
                                    <Col md="12">
                                        <h3>BILLING ADDRESS</h3>
                                    </Col>
                                </Row>
                                {user.shippingAddress?
                                <Row>
                                    <Col md="6">
                                        <Label for="name">Address Line</Label>
                                        <Input type="text" className="form-control" id="home-ploat" value={user.billingAddress.addressLine} placeholder="company name"
                                            required="" />
                                    </Col>
                                    <Col md="6" className="select_input">
                                        <Label for="review">Country *</Label>
                                        <Input type="text" className="form-control" id="address-two" value={user.billingAddress.country} placeholder="Address"
                                            required="" />
                                        {/* <select className="form-control" size="1">
                                            <option value="India">India</option>
                                            <option value="UAE">UAE</option>
                                            <option value="U.K">U.K</option>
                                            <option value="US">US</option>
                                        </select> */}
                                    </Col>
                                    
                                    
                                    <Col md="6">
                                        <Label for="review">Region/State *</Label>
                                        <Input type="text" className="form-control" id="region-state" value={user.billingAddress.state} placeholder="Region/state"
                                            required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="review">City *</Label>
                                        <Input type="text" className="form-control" id="city"  value={user.billingAddress.city} placeholder="City" required="" />
                                    </Col>
                                    <Col md="6">
                                        <Label for="email">Zip Code *</Label>
                                        <Input type="text" className="form-control" id="zip-code" value={user.billingAddress.zipCode} placeholder="zip-code"
                                            required="" />
                                    </Col>
                                    <div className="col-md-12">
                                        <button className="btn btn-sm btn-solid" type="submit">Save setting</button>
                                    </div>
                                </Row>:''}
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProfilePage;
import React from 'react';
import { Container, Row, Form, Input, Label, Col } from 'reactstrap';

const ShipingAddress = (props) => {
    return (<React.Fragment>
        <h3>SHIPPING ADDRESS</h3>
        <Form className="theme-form">
            <Row>
                <Col md="6">
                    <Label for="name">flat / plot</Label>
                    <Input type="text" className="form-control" id="home-ploat" placeholder="company name"
                        required="" />
                </Col>
                <Col md="6">
                    <Label for="name">Address *</Label>
                    <Input type="text" className="form-control" id="address-two" placeholder="Address"
                        required="" />
                </Col>
                <Col md="6">
                    <Label for="email">Zip Code *</Label>
                    <Input type="text" className="form-control" id="zip-code" placeholder="zip-code"
                        required="" />
                </Col>
                <Col md="6" className="select_input">
                    <Label for="review">Country *</Label>
                    <select className="form-control" size="1">
                        <option value="India">India</option>
                        <option value="UAE">UAE</option>
                        <option value="U.K">U.K</option>
                        <option value="US">US</option>
                    </select>
                </Col>
                <Col md="6">
                    <Label for="review">City *</Label>
                    <Input type="text" className="form-control" id="city" placeholder="City" required="" />
                </Col>
                <Col md="6">
                    <Label for="review">Region/State *</Label>
                    <Input type="text" className="form-control" id="region-state" placeholder="Region/state"
                        required="" />
                </Col>
                <div className="col-md-12">
                    <button className="btn btn-sm btn-solid" type="submit">Save setting</button>
                </div>
            </Row>
        </Form>

    </React.Fragment>)
}


export default ShipingAddress;
import React from "react";
import {Button, Form, FormGroup, FormText} from "react-bootstrap";
import {Input, Label} from "reactstrap";

const EditProfile = () => {
    return(
        <Form>
            <FormGroup>
                <Label for="emailaddress">Email Address</Label>
                <Input type="text" name="emailaddress" id="emailaddress" placeholder="write the email address" />
            </FormGroup>
            <FormGroup>
                <Label for="userpassword">Account password</Label>
                <Input type="password" name="userpassword" id="userpassword" placeholder="new password" />
            </FormGroup>


            <Button>Make Changes</Button>
        </Form>
    )
}

export default EditProfile
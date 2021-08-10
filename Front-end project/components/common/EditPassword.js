import React from "react";
import { Button, Form, FormGroup, FormText } from "react-bootstrap";
import { Input, Label } from "reactstrap";
import { changePassword } from "../../services/User.Services";

const EditPassword = (props) => {

   const submitEventHandler = () => {
        changePassword(props.userId);
    }

    return (
         <Form onSubmit={submitEventHandler}>
           
            <FormGroup>
                <Label for="emailaddress">New Password</Label>
                <Input type="password" name="userpassword" id="userpassword" placeholder="New Password" />
            </FormGroup>
            <FormGroup>
                <Label for="userpassword">Repeat password</Label>
                <Input type="password" name="userpassword" id="userpassword" placeholder="Repeat password" />
            </FormGroup>
            {/* <input type='submit'>Make Changes</input> */}
        </Form>
    )
}

export default EditPassword
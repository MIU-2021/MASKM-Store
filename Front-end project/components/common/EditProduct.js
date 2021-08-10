import React from "react";
import {Button, Form, FormGroup, FormText} from "react-bootstrap";
import {Input, Label} from "reactstrap";


const EditProduct = (props) => {
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label for="productname">Product Name</Label>
                    <Input type="text" name="productname" id="productname" placeholder={props.EditProductId} />
                </FormGroup>
                <FormGroup>
                    <Label for="productprice">Product price</Label>
                    <Input type="number" name="productprice" id="productprice" placeholder="price here" />
                </FormGroup>
                <FormGroup>
                    <Label for="productdescription">product description</Label>
                    <Input type="textarea" name="productdescription" id="productdescription" />
                </FormGroup>
                <FormGroup>
                    <Label for="category">Category</Label>
                    <Input type="select" name="category" id="category">
                        <option>Footbal</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="subcategory">Sub Category</Label>
                    <Input type="select" name="subcategory" id="subcategory">
                        <option>subcat</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="productpicture">Picture</Label>
                    <Input type="file" name="productpicture" id="productpicture" />
                    <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                    </FormText>
                </FormGroup>

                <Button>Add Product</Button>
            </Form>
        </div>
    )
}

export default EditProduct
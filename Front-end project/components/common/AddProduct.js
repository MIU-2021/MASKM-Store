import React, {useState} from "react";
import {Button, Form, FormGroup, FormText} from "react-bootstrap";
import {Input, Label} from "reactstrap";
import {postReviewForproduct} from "../../services/Reviews.Services";
import {AddProductForSeller} from "../../services/Products.Services";


const AddProduct = () => {
    const [productName, setproductName] = useState(null);
    const [productPrice, setProductPrice] = useState(null);
    const [productDescription, setProductDescription] = useState(null);
    const [category, setCategory] = useState(null);
    const [picture, setPicture] = useState(null);
    function handleClick()  {
        alert(Category);

        let datas1 = {"title":"", "description":"nader Product description1", "price":36, "image":"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"};
        AddProductForSeller("nader" , 7 , datas1).then(response => {
            //console.log("product return",response);
            //setData(response);
            //setLoading(false);
            //return response.data;
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
            <Form>
                <FormGroup>
                    <Label for="productname">Product Name</Label>
                    <Input type="text" name="productname" id="productname" placeholder="write the product name" onChange={e => setproductName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="productprice">Product price</Label>
                    <Input type="number" name="productprice" id="productprice" placeholder="price here"  onChange={e => setProductPrice(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="productdescription">product description</Label>
                    <Input type="textarea" name="productdescription" id="productdescription"  onChange={e => setProductDescription(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="category">Category</Label>
                    <Input type="select" name="category" id="category" onChange={e => setCategory(e.target.selectedOptions[0].text)}>
                        <option name="7">Footbal</option>
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

                <Button onClick={handleClick}>Add Product</Button>
            </Form>
        </div>
    )
}

export default AddProduct
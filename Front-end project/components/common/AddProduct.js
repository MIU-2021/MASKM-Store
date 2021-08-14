import React, {useEffect, useState} from "react";
import {Button, Form, FormGroup, FormText} from "react-bootstrap";
import {Input, Label} from "reactstrap";
import {AddProductForSeller} from "../../services/Products.Services";
import {fecthAllCategories} from "../../services/Categories.Services";

const AddProduct = (props) => {
    const [categories,setCategories] = useState([]);
    const [productName, setproductName] = useState(null);
    const [productPrice, setProductPrice] = useState(null);
    const [productDescription, setProductDescription] = useState(null);
    const [category, setCategory] = useState(1);
    const [picture, setPicture] = useState(null);

    useEffect(() => {
        fecthAllCategories().then(response => {
            setCategories(response);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    function handleClick()  {
        let datas1 = {"title":productName,
            "description":productDescription,
            "price":productPrice,
            "image":picture
        };

        AddProductForSeller("milton" , category , datas1).then(response => {
            props.onProductAdd();
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
                    <Input type="select" name="category" id="category" onChange={e => setCategory(+e.target.value)}>
                        {categories.map((c, i) => {
                            return (
                                <option value={c.id} key={i}>
                                    {c.name}
                                </option>
                            );
                        })}
                    </Input>
                </FormGroup>


                <FormGroup>
                    <Label for="image">Picture</Label>
                    <Input type="text" name="image" id="image" onChange={e => setPicture(e.target.value)} />

                </FormGroup>

                <Button onClick={handleClick}>Add Product</Button>
            </Form>
        </div>
    )
}

export default AddProduct
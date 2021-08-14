import React, {useEffect, useRef, useState} from "react";
import {Button, Form, FormGroup, FormText} from "react-bootstrap";
import {Input, Label, Media} from "reactstrap";
import {fecthAllCategories} from "../../services/Categories.Services";
import {editProductByID} from "../../services/Products.Services";
import {fetchProductsBySellerUsername} from "../../services/Seller.Services";
import {UserAuthenticated} from "../../services/User.Services";


const EditProduct = ({product}) => {
    const formRef = useRef();
    const [categories,setCategories] = useState([]);

    useEffect(() => {
        fecthAllCategories().then(response => {
            setCategories(response);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        const form = formRef.current;
        form["productname"].value = product.title;
        form["productprice"].value = product.price;
        form["productdescription"].value = product.description;
        form["category"].value = product.productCategory?.id;
        form["productpicture"].value = product.image;
    }, [product]);

    const EditProductHandler = () => {
        const p = product;
        const form = formRef.current;
        p.title = form["productname"].value;
        p.price = form["productprice"].value;
        p.description = form["productdescription"].value;
        p.productCategory.id = form["category"].value ;
        p.image = form["productpicture"].value ;

        editProductByID(p.id,p).then(response => {
            console.log("resss" ,response);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <Form ref={formRef}>
                <FormGroup>
                    <Label for="productname">Product Name</Label>
                    <Input type="text" name="productname" id="productname"/>
                </FormGroup>
                <FormGroup>
                    <Label for="productprice">Product price</Label>
                    <Input type="number" name="productprice" id="productprice"/>
                </FormGroup>
                <FormGroup>
                    <Label for="productdescription">product description</Label>
                    <Input type="textarea" name="productdescription" id="productdescription" />
                </FormGroup>
                <FormGroup>
                    <Label for="category">Category</Label>
                    <Input type="select" name="category" id="category"
                        >
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
                    <Label for="productpicture">Picture</Label>
                    <Input type="text" name="productpicture" id="productpicture"/>
                </FormGroup>

                <Button onClick={EditProductHandler}>Edit Product</Button>
            </Form>
    )
}

export default EditProduct
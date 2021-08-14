import React from 'react';
import { ProductsbyOrder } from '../../../services/Order.Services';
import {
    Card,
    CardBody,
    CardHeader,
    Media, 
    Container,
    Row,
    Col,
} from "reactstrap";

const OrderDetail = (props) => {
    const productData = props.Order.lineItems;
    console.log(productData);
    const AllProduct = ({ img, productName, category, price, cant }) => {
        return (
            <tr>
                <td class="col-md-3">
                    <Media src={img} className="blur-up lazyloaded img-thumbnail  max-width: 150px;" />
                </td>
                <td>{productName}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{cant}</td>
            </tr>
        );
    };
    return (
        <React.Fragment>

            <Card className="dashboard-table mt-0">
                <CardHeader>
                    <div className="top-sec">
                        <h3>Order Detail</h3>
                    </div>
                </CardHeader>
                <CardBody>
                    <Container>
                        <Row>
                            <Col lg="4">
                                <div className="details">
                                    <div className="left">
                                        <h3>Order Date</h3>
                                    </div>
                                    <div className="right">
                                        <h6>{props.Order.createdOn}</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className="details">
                                    <div className="left">
                                        <h3>Status</h3>
                                    </div>
                                    <div className="right">
                                    <h6>{props.Order.orderStatus}</h6>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className="details">
                                    <div className="left">
                                        <h3>Total</h3>
                                    </div>
                                    <div className="right">
                                    <h6>{props.Order.price}</h6>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </CardBody>
            </Card>

            <Card className="dashboard-table mt-0">

                <CardHeader>
                    <div className="top-sec">
                        <h3>Products</h3>
                    </div>
                </CardHeader>
                <CardBody>
                    <table className="table-responsive-md table mb-0">
                        <thead>
                            <tr>
                                <th scope="col" ></th>
                                <th scope="col">product name</th>
                                <th scope="col">category</th>
                                <th scope="col">price</th>
                                <th scope="col">Cant</th>
                            </tr>
                        </thead>
                        {productData  ?
                        <tbody>
                            {productData.map((data, i) => {
                                return (
                                    <AllProduct
                                        key={i}
                                        img={data.product.image}
                                        productName={data.product.title}
                                        category={data.productCategory? data.productCategory.name:''}
                                        price={data.price}
                                        cant={data.quantity}
                                    />
                                );
                            })}
                        </tbody>
                        : ''
                        }
                    </table>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}
export default OrderDetail;
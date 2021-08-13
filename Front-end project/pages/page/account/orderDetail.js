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
    const productData = ProductsbyOrder(props.Order.id);
    const AllProduct = ({ img, productName, category, price, cant }) => {
        return (
            <tr>
                <th scope="row">
                    <Media src={img} className="blur-up lazyloaded" />
                </th>
                <td>{productName}e</td>
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
                                <th scope="col"></th>
                                <th scope="col">product name</th>
                                <th scope="col">category</th>
                                <th scope="col">price</th>
                                <th scope="col">Cant</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productData.map((data, i) => {
                                return (
                                    <AllProduct
                                        key={i}
                                        img={data.img}
                                        productName={data.title}
                                        category={data.category}
                                        price={data.price}
                                        cant={data.cant}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </React.Fragment>
    )
}
export default OrderDetail;
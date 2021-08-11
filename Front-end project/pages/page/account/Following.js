import React, { useEffect, useState } from 'react';
import { ProductsbyOrder } from '../../../services/Order.Services';
import {
    Card,
    CardBody,
    CardHeader,
    Media,
    Container,
    Row,
    Col,
    Button,
} from "reactstrap";

// const FollowingData = myFollows();



const Following = (props) => {

    const FollowingList = () => {
        console.log(props.Following.count);
        
          return (
            <React.Fragment>
                {props.Following && props.Following.count&&  props.Following.count >0 (<Row>
                    <Col lg="4">
                        <h4>{props.Following[0].fName}</h4>
                        <Button>Unfollow</Button>
                    </Col>
                    <Col lg="4">
                        <h4>{props.Following[2].fName}</h4>
                        <Button>Unfollow</Button>
                    </Col>
                    {
                        props.Following.forEach((f) => {
                            return (
                                <Col lg="4">
                                    <p>{f.fName}</p>
                                    Hii
                                </Col>
                            );
                        })}
                </Row>)}
            </React.Fragment >
        );
    };
    // const [following, setFollowing] = useState([]);
    // useEffect(() =>
    //     setFollowing(myFollows()), []);
    return (
        <React.Fragment>
            <Card className="dashboard-table mt-0">
                <CardHeader>
                    <div className="top-sec">
                        <h3>Following</h3>
                    </div>
                </CardHeader>
                <CardBody>
                    <Container>

                        <FollowingList></FollowingList>

                    </Container>
                </CardBody>
            </Card>
        </React.Fragment >
    )
}

export default Following;
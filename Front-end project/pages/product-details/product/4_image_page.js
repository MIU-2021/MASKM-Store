import React, { useState } from "react";
import imageOne from "../../../public/assets/images/fashion/pro/001.jpg";
import imageTwo from "../../../public/assets/images/fashion/pro/002.jpg";
import imageThree from "../../../public/assets/images/fashion/pro/003.jpg";
import imageFour from "../../../public/assets/images/fashion/pro/004.jpg";
import DetailsWithPrice from "../common/detail-price";
import { Col, Container, Row } from "reactstrap";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_SINGLE_PRODUCTS = gql`
  query product($id: Int!) {
    product(id: $id) {
      id
      title
      description
      type
      brand
      category
      price
      new
      sale
      discount
      stock
      variants {
        id
        color
        image_id
        variant_id
        size
      }
      images {
        image_id
        src
      }
    }
  }
`;

const imgData = [imageOne, imageTwo, imageThree, imageFour];

const FourImagePage = () => {
  var { data } = useQuery(GET_SINGLE_PRODUCTS, {
    variables: {
      id: 1,
    },
  });

  return (
    <section>
      <div className="collection-wrapper ratio_asos">
        <Container>
          <Row>
            <Col lg="6">
              <Row className="product_image_4">
                {imgData.map((data, index) => {
                  return (
                    <Col xs="6" key={index}>
                      <div>
                        <img
                          src={data}
                          alt=""
                          className="img-fluid blur-up lazyload bg-img"
                        />
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
            {data ? (
              <Col lg="6" className="rtl-text">
                <DetailsWithPrice item={data.product} />
              </Col>
            ) : (
              "false"
            )}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default FourImagePage;

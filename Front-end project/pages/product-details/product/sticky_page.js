import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Col } from "reactstrap";
import DetailsWithPrice from "../common/detail-price";

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

const StickyPage = () => {
  const [state, setState] = useState({ nav1: null, nav2: null });

  var { data } = useQuery(GET_SINGLE_PRODUCTS, {
    variables: {
      id: 1,
    },
  });

  const changeColorVar = (img_id) => {
    slider2.current.slickGoTo(img_id);
  };

  const { nav1, nav2 } = state;

  const ImgData = [
    "../assets/images/pro3/1.jpg",
    "../assets/images/pro3/2.jpg",
    "../assets/images/pro3/1.jpg",
    "../assets/images/pro3/4.jpg",
    "../assets/images/pro3/5.jpg",
  ];

  return (
    <section>
      <div className="collection-wrapper">
        <div className="container">
          <div className="row data-sticky_parent">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row">
                      <div
                        className="col-12 product_img_scroll image-scroll"
                        data-sticky_column
                      >
                        <div>
                          {ImgData.map((data, index) => {
                            return (
                              <div key={index}>
                                <img
                                  src={data}
                                  alt=""
                                  className="img-fluid blur-up lazyload"
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  {data ? (
                    <Col lg="6" className="rtl-text">
                      <div className="sticky-top-cls">
                        <DetailsWithPrice
                          item={data.product}
                          changeColorVar={changeColorVar}
                          stickyclassName="pro_sticky_info"
                        />
                      </div>
                    </Col>
                  ) : (
                    "false"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyPage;

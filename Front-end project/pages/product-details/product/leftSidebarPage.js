import React, { useState, useEffect, useRef } from "react";
import ProductTab from "../common/product-tab";
import Service from "../common/service";
import NewProduct from "../../shop/common/newProduct";
import Slider from "react-slick";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import ImageZoom from "../common/image-zoom";
import DetailsWithPrice from "../common/detail-price";
import Filter from "../common/filter";
import { Container, Row, Col, Media } from "reactstrap";
import { fecthProductByID } from "../../../services/Products.Services";
import { SellerbyProductId } from "../../../services/Seller.Services";
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

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
        sku
        size
        color
        image_id
      }
      images {
        alt
        src
      }
    }
  }
`;

const LeftSidebarPage = ({ pathId }) => {
  // var { loading, data } = useQuery(GET_SINGLE_PRODUCTS, {
  //   variables: {
  //     id: parseInt(pathId),
  //   },
  // });
  function fetchProductsHandler() {
    fecthProductByID(pathId).then(response => {
      setData(response);
      console.log(response);
      SellerbyProductId(response.id).then((sellerProd) => {
        setSeller(sellerProd);
      });
      setLoading(false);
      return response.data;
    }).catch((error) => {
      console.log(error);
    });
  }
  useEffect(fetchProductsHandler, []);

  const [state, setState] = useState({ nav1: null, nav2: null });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [seller, setSeller] = useState({});
  const slider1 = useRef();
  const slider2 = useRef();

  var products = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: true,
  };
  var productsnav = {
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    focusOnSelect: true,
  };

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, [data]);

  const { nav1, nav2 } = state;

  const filterClick = () => {
    document.getElementById("filter").style.left = "-15px";
  };


  return (
    <section className="">
      <div className="collection-wrapper">
        <Container>
          <Row>
            
            <Col sm="3" className="collection-filter">
              {/* <Filter /> */}
              <Service />
            </Col>
            <Col lg="9" sm="12" xs="12">
              <Container fluid={true}>
                <Row>
                  <Col cl="12">
                    <div className="filter-main-btn mb-2">
                      <span onClick={filterClick} className="filter-btn">
                        <i className="fa fa-filter" aria-hidden="true"></i>{" "}
                        filter
                      </span>
                    </div>
                  </Col>
                </Row>
                {!data ||
                  data.length === 0 ||
                  loading ? (
                  "loading"
                ) : (
                  <div>
                    <Row>
                    <Col lg="6" className="product-thumbnail"></Col>
                    
                    {seller && seller.user?
                    <Col lg="6" className="product-thumbnail">
                        Seller: {seller.user.fname}<span onClick={()=>{}}> <i class="fa fa-heart"></i></span>
                    </Col>
                    :''
                    }
                   </Row>
                  <Row>
                    
                    <Col lg="6" className="product-thumbnail">
                      <Slider
                        {...products}
                        asNavFor={nav2}
                        ref={(slider) => (slider1.current = slider)}
                        className="product-slick"
                      >

                        <div >
                          <ImageZoom image={data.image} />
                        </div>

                      </Slider>

                    </Col>
                    <Col lg="6" className="rtl-text">
                      <DetailsWithPrice
                        item={data}
                      />
                    </Col>
                  </Row>
                  </div>
                )}
              </Container>

              <ProductTab productid={data.id}/>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default LeftSidebarPage;

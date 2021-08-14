import React, { useState, useEffect, useRef } from "react";
import ProductTab from "../common/product-tab";
import Service from "../common/service";
import Slider from "react-slick";
import ImageZoom from "../common/image-zoom";
import DetailsWithPrice from "../common/detail-price";
import { Container, Row, Col, Media } from "reactstrap";
import { fecthProductByID } from "../../../services/Products.Services";
import { FollowingSellers, FollowSeller, SellerbyProductId, UnFollowSeller } from "../../../services/Seller.Services";
import { elementType } from "prop-types";

const LeftSidebarPage = ({ pathId }) => {
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
  const [sellersFollowing, setSellersFollowing] = useState({});
  const [isFollowing, setIsFollowing] = useState(false);
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

  useEffect(() => {
    FollowingSellers().then((resp) =>
      resp.forEach((elem) => {
        console.log(elem, seller);
        if (elem.uid == seller.iu) {
          setIsFollowing(true);
        }
      }))
      .catch((err) => console.log(err));
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

                      {seller && seller.user ?
                        <Col lg="6" className="product-thumbnail">
                          Seller: {seller.user.fname }  { seller.user.lname}

                          {isFollowing ? <a href="#" className="btn btn-solid"
                            onClick={() => {
                              UnFollowSeller(seller.user.fname).then(()=>setIsFollowing(false));
                              
                            }}>
                            unfollow
                          </a> :
                            <a href="#" className="btn btn-solid"
                              onClick={() => FollowSeller(seller.user.fname).then(()=>setIsFollowing(true))}>
                              Follow
                            </a>
                          }

                        </Col>
                        : ''
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

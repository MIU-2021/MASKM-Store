import React, { useState, useContext } from "react";
import { TabList, TabPanel, Tabs, Tab } from "react-tabs";
import { Col, Container, Row } from "reactstrap";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import ProductItem from "../product-box/ProductBox6";
import CartContext from "../../../helpers/cart/index";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import PostLoader from "../PostLoader";
import { CompareContext } from "../../../helpers/Compare/CompareContext";

const GET_PRODUCTS = gql`
  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {
    products(type: $type, indexFrom: $indexFrom, limit: $limit) {
      items {
        id
        title
        description
        type
        brand
        category
        price
        new
        sale
        stock
        discount
        variants {
          id
          sku
          size
          color
          image_id
        }
        images {
          image_id
          id
          alt
          src
        }
      }
    }
  }
`;
const TabContent = ({ data, loading, cartClass, startIndex, endIndex }) => {
  const context = useContext(CartContext);
  const wishListContext = useContext(WishlistContext);
  const compareContext = useContext(CompareContext);
  const quantity = context.quantity;
  return (
    <Row className=" no-slider five-product">
      {!data ||
      !data.products ||
      !data.products.items ||
      data.products.items.length === 0 ||
      loading ? (
        <div className="row mx-0 margin-default">
          <div className="col-xl-3 col-lg-4 col-6">
            <PostLoader />
          </div>
          <div className="col-xl-3 col-lg-4 col-6">
            <PostLoader />
          </div>
          <div className="col-xl-3 col-lg-4 col-6">
            <PostLoader />
          </div>
          <div className="col-xl-3 col-lg-4 col-6">
            <PostLoader />
          </div>
        </div>
      ) : (
        <>
          {data &&
            data.products.items
              .slice(startIndex, endIndex)
              .map((product, index) => (
                <ProductItem
                  product={product}
                  addToComapre={() => compareContext.addToCompare(product)}
                  addCart={() => context.addToCart(product, quantity)}
                  key={index}
                  addWishlist={() => wishListContext.addToWish(product)}
                  cartclassName={cartClass}
                />
              ))}
        </>
      )}
    </Row>
  );
};
const TabCollection = ({ type, cartClass }) => {
  const [activeTab, setActiveTab] = useState(type);

  var { loading, data } = useQuery(GET_PRODUCTS, {
    variables: {
      type: activeTab,
      indexFrom: 0,
      limit: 19,
    },
  });

  return (
    <>
      <div className="title1  section-t-space">
        <h4>special offer</h4>
        <h2 className="title-inner1">top collection</h2>
      </div>
      <section className="game-product ratio_asos pt-0">
        <Container>
          <Row>
            <Col lg="6" className="m-auto">
              <div className="product-para">
                <p className="text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Tabs className="theme-tab">
                <TabList className="tabs tab-title">
                  <Tab
                    className={activeTab == type ? "active" : ""}
                    onClick={() => setActiveTab(type)}
                  >
                    New Products
                  </Tab>
                  <Tab
                    className={activeTab == "game" ? "active" : ""}
                    onClick={() => setActiveTab("game")}
                  >
                    Featured Products
                  </Tab>
                  <Tab
                    className={activeTab == "game" ? "active" : ""}
                    onClick={() => setActiveTab("game")}
                  >
                    Best Sellers
                  </Tab>
                </TabList>
                <div className="tab-content-cls">
                  <TabPanel className="tab-content active default">
                    <TabContent
                      data={data}
                      loading={loading}
                      cartClass={cartClass}
                      startIndex={0}
                      endIndex={10}
                    />
                  </TabPanel>
                  <TabPanel className="tab-content">
                    <TabContent
                      data={data}
                      loading={loading}
                      cartClass={cartClass}
                      startIndex={9}
                      endIndex={19}
                    />
                  </TabPanel>
                  <TabPanel className="tab-content">
                    <TabContent
                      data={data}
                      loading={loading}
                      cartClass={cartClass}
                      startIndex={0}
                      endIndex={10}
                    />
                  </TabPanel>
                </div>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TabCollection;

import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Media, Container, Row } from "reactstrap";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import PostLoader from "../../../components/common/PostLoader";
import Lightbox from "react-image-lightbox";

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

const images = [
  require("../../../public/assets/images/pets/pro/9.jpg"),
  require("../../../public/assets/images/pets/pro/2.jpg"),
  require("../../../public/assets/images/pets/pro/12.jpg"),
  require("../../../public/assets/images/pets/pro/13.jpg"),
  require("../../../public/assets/images/pets/pro/10.jpg"),
  require("../../../public/assets/images/pets/pro/11.jpg"),
  require("../../../public/assets/images/pets/pro/14.jpg"),
  require("../../../public/assets/images/pets/pro/8.jpg"),
];

const fashionImages = [
  require("../../../public/assets/images/pro3/39.jpg"),
  require("../../../public/assets/images/pro3/3.jpg"),
  require("../../../public/assets/images/pro3/1.jpg"),
  require("../../../public/assets/images/pro3/8.jpg"),
  require("../../../public/assets/images/pro3/9.jpg"),
  require("../../../public/assets/images/pro3/11.jpg"),
  require("../../../public/assets/images/pro3/13.jpg"),
  require("../../../public/assets/images/pro3/14.jpg"),
];

const bagImages = [
  require("../../../public/assets/images/pro1/1.jpg"),
  require("../../../public/assets/images/pro1/4.jpg"),
  require("../../../public/assets/images/pro1/10.jpg"),
  require("../../../public/assets/images/pro1/2.jpg"),
  require("../../../public/assets/images/pro1/16.jpg"),
  require("../../../public/assets/images/pro1/7.jpg"),
  require("../../../public/assets/images/pro1/4.jpg"),
  require("../../../public/assets/images/pro1/12.jpg"),
];

const shoesImages = [
  require("../../../public/assets/images/pro/1.jpg"),
  require("../../../public/assets/images/pro/16.jpg"),
  require("../../../public/assets/images/pro/23.jpg"),
  require("../../../public/assets/images/pro/26.jpg"),
  require("../../../public/assets/images/pro/6.jpg"),
  require("../../../public/assets/images/pro/33.jpg"),
  require("../../../public/assets/images/pro/37.jpg"),
  require("../../../public/assets/images/pro/13.jpg"),
];
const watchImages = [
  require("../../../public/assets/images/pro2/2.jpg"),
  require("../../../public/assets/images/pro2/3.jpg"),
  require("../../../public/assets/images/pro2/6.jpg"),
  require("../../../public/assets/images/pro2/15.jpg"),
  require("../../../public/assets/images/pro2/8.jpg"),
  require("../../../public/assets/images/pro2/9.jpg"),
  require("../../../public/assets/images/pro2/13.jpg"),
  require("../../../public/assets/images/pro2/4.jpg"),
];

const GridTwoPage = ({ colClass, limit }) => {
  const l = parseInt(limit);
  const [activeTab, setActiveTab] = useState("pets");
  const initilindex = { index: 0, isOpen: false };
  const [photoIndex, setPhotoIndex] = useState(initilindex);

  var { loading, data } = useQuery(GET_PRODUCTS, {
    variables: {
      type: activeTab,
      indexFrom: 0,
      limit: parseInt(l),
    },
  });

  const MasterTabPannel = ({ img }) => {
    return (
      <>
        {!data ||
        !data.products ||
        data.products.items.length === 0 ||
        loading ? (
          <PostLoader />
        ) : (
          <>
            {data &&
              data.products.items.map((product, index) => (
                <div
                  className={`isotopeSelector filter fashion ${colClass}`}
                  key={index}
                >
                  <div className="overlay">
                    <div className="border-portfolio">
                      <a>
                        <div
                          className="overlay-background"
                          onClick={() =>
                            setPhotoIndex({
                              ...photoIndex,
                              index: index,
                              isOpen: true,
                            })
                          }
                        >
                          <i className="fa fa-plus" aria-hidden="true"></i>
                        </div>
                        <Media
                          src={product.images[0].src}
                          className="img-fluid blur-up lazyload bg-img"
                        />
                      </a>
                      {photoIndex.isOpen && (
                        <Lightbox
                          mainSrc={img[photoIndex.index]}
                          nextSrc={img[(photoIndex.index + 1) % img.length]}
                          prevSrc={
                            images[
                              (photoIndex.index + img.length - 1) % img.length
                            ]
                          }
                          imageTitle={photoIndex.index + 1 + "/" + img.length}
                          onCloseRequest={() =>
                            setPhotoIndex({
                              ...photoIndex,
                              isOpen: false,
                            })
                          }
                          onMovePrevRequest={() =>
                            setPhotoIndex({
                              ...photoIndex,
                              index:
                                (photoIndex.index + img.length - 1) %
                                img.length,
                            })
                          }
                          onMoveNextRequest={() =>
                            setPhotoIndex({
                              ...photoIndex,
                              index: (photoIndex.index + 1) % img.length,
                            })
                          }
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </>
        )}
      </>
    );
  };

  return (
    <section className="portfolio-section grid-portfolio ratio2_3 portfolio-padding">
      <Container>
        <Tabs>
          <TabList align="center" id="form1">
            <Tab
              className={`filter-button project_button ${
                activeTab == "pets" ? "active" : ""
              }`}
              onClick={() => setActiveTab("pets")}
              data-filter="all"
            >
              All
            </Tab>
            <Tab
              className={`filter-button project_button ${
                activeTab == "fashion" ? "active" : ""
              }`}
              onClick={() => setActiveTab("fashion")}
              data-filter="fashion"
            >
              Fashion
            </Tab>
            <Tab
              className={`filter-button project_button ${
                activeTab == "bags" ? "active" : ""
              }`}
              onClick={() => setActiveTab("bags")}
              data-filter="bags"
            >
              Bags
            </Tab>
            <Tab
              className={`filter-button project_button ${
                activeTab == "shoes" ? "active" : ""
              }`}
              onClick={() => setActiveTab("shoes")}
              data-filter="shoes"
            >
              Shoes
            </Tab>
            <Tab
              className={`filter-button project_button ${
                activeTab == "watch" ? "active" : ""
              }`}
              onClick={() => setActiveTab("watch")}
              data-filter="watch"
            >
              Watch
            </Tab>
          </TabList>
          <Row className="row zoom-gallery">
            <TabPanel>
              <MasterTabPannel img={images} />
            </TabPanel>
            <TabPanel>
              <MasterTabPannel img={fashionImages} />
            </TabPanel>
            <TabPanel>
              <MasterTabPannel img={bagImages} />
            </TabPanel>
            <TabPanel>
              <MasterTabPannel img={shoesImages} />
            </TabPanel>
            <TabPanel>
              <MasterTabPannel img={watchImages} />
            </TabPanel>
          </Row>
        </Tabs>
      </Container>
    </section>
  );
};

export default GridTwoPage;

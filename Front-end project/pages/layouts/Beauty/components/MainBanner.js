import React, { Fragment } from "react";
import HeaderOne from "../../../../components/headers/header-one";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "../../Fashion/Components/MasterBanner";

const Data = [
  {
    imgClass: "home34",
    title: "welcome to beauty",
    about: "beauty products",
    link: "#",
    btn: "shop now",
  },
  {
    imgClass: "home35",
    title: "save 30% off",
    about: "beauty products",
    link: "#",
    btn: "shop now",
  },
];

const Banner = ({ imgClass, title, about, btn }) => {
  return (
    <div>
      <div className={`home ${imgClass}`}>
        <Container>
          <Row>
            <Col>
              <div className="slider-contain">
                <div>
                  <h4>{title}</h4>
                  <h1>{about}</h1>
                  <a href={null} className="btn btn-solid">
                    {btn}
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
const MainBanner = () => {
  return (
    <Fragment>
      <title>MultiKart | Beauty Store</title>
      <HeaderOne logoName={"layout3/logo.png"} topClass="top-header" />
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          {Data.map((data, i) => {
            return (
              <MasterBanner
                key={i}
                img={data.imgClass}
                desc={data.about}
                title={data.title}
                link={data.link}
                classes={data.classes}
              />
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default MainBanner;

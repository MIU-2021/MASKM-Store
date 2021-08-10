import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Media, Row, Col, Card, CardBody } from "reactstrap";
import Slider from "react-slick";
import MasterBanner from "../layouts/Fashion/Components/MasterBanner";

const Data = [
  {
    classes: " p-center text-center",
    img: "home7",
    title: "welcome to fashion",
    desc: "women fashion",
    link: "#",
  },
  {
    classes: " p-center text-center",
    img: "home8",
    title: "welcome to fashion",
    desc: "men fashion",
    link: "#",
  },
];
const HomeSlider = () => {
  return (
    <CommonLayout parent="home" title="elements" subTitle="slider">
      <Container>
        <section className="section-b-space">
          <Slider className="slide-1 home-slider">
            {Data.map((data, index) => {
              return (
                <MasterBanner
                  key={index}
                  img={data.img}
                  link={data.link}
                  title={data.title}
                  desc={data.desc}
                  classes={data.classes}
                />
              );
            })}
          </Slider>
        </section>
      </Container>

      <Container className="section-b-space element-detail">
        <Row>
          <Col>
            <Card>
              <h5 className="card-header">Classes</h5>
              <CardBody>
                <h5 className="card-title">For Parallax Image - .parallax</h5>
                <h5>contain-align - .text-left, .text-center, .text-right</h5>
                <h5>contain-position - .p-left, .p-center, .p-right</h5>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </CommonLayout>
  );
};

export default HomeSlider;

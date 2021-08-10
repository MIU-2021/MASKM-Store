import React, { Fragment } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import banner4 from "../../../../public/assets/images/marijuana/banner/4.jpg";
import banner2 from "../../../../public/assets/images/marijuana/banner/2.jpg";

const Data = [
  {
    img: banner4,
    title: "50% off",
    desc: "oils",
    link: "#",
    classes: "p-left text-center",
  },
  {
    img: banner2,
    title: "20% save",
    desc: "liquid",
    link: "#",
    classes: "p-right text-center",
  },
];

const MasterBanner = ({ img, title, desc, link, classes }) => {
  return (
    <Col md="6">
      <a href="#">
        <div className={`collection-banner ${classes}`}>
          <div className="img-part">
            <Media
              src={img}
              className="img-fluid blur-up lazyload bg-img"
              alt=""
            />
          </div>
          <div className="contain-banner">
            <div>
              <h4>{title}</h4>
              <h2>{desc}</h2>
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};

const BannerSection = () => (
  <Fragment>
    <section className="p-t-0 section-b-space ratio_45">
      <Container>
        <Row className="partition2">
          {Data.map((data, i) => {
            return (
              <MasterBanner
                key={i}
                img={data.img}
                link={data.link}
                title={data.title}
                desc={data.desc}
                classes={data.classes}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  </Fragment>
);
export default BannerSection;

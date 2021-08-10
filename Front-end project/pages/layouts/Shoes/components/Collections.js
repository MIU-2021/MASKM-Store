import React, { Fragment } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import subBanner from "../../../../public/assets/images/sub-banner.png";
import subBanner1 from "../../../../public/assets/images/sub-banner1.png";

const Data = [
  {
    img: subBanner,
    title: "50% off",
    desc: "Men",
    link: "#",
    classes: "p-right text-center",
  },
  {
    img: subBanner1,
    title: "20% save",
    desc: "women",
    link: "#",
    classes: "p-right text-center",
  },
];

const MasterCollection = ({ img, title, link, desc, classes }) => {
  return (
    <Col md="6">
      <a href={link}>
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
              <h4 className="text-white">{title}</h4>
              <h2>{desc}</h2>
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};

const Collections = () => {
  return (
    <Fragment>
      <section className="section-b-space p-t-0 ratio_40">
        <Container>
          <Row className="partition2">
            {Data.map((data, i) => {
              return (
                <MasterCollection
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
};

export default Collections;

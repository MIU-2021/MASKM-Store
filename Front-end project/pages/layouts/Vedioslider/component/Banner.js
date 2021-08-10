import React, { Fragment } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import Banner5 from "../../../../public/assets/images/fashion/banner/5.jpg";
import Banner6 from "../../../../public/assets/images/fashion/banner/6.jpg";
import Banner8 from "../../../../public/assets/images/fashion/banner/8.jpg";

const Data = [
  {
    img: Banner5,
    title: "casual collection",
    desc: "festival sale",
    link: "#",
    classes: "p-left text-left",
  },
  {
    img: Banner6,
    title: "going out collection",
    desc: "upto 80% off",
    link: "#",
    classes: "p-left text-left",
  },
  {
    img: Banner8,
    title: "shoes & sandle",
    desc: "new collection",
    link: "#",
    classes: "p-left text-left",
  },
];

const MasterBanner = ({ img, title, desc, link, classes }) => {
  return (
    <Col md="4">
      <a href={link}>
        <div className={`collection-banner ${classes}`}>
          <Media
            src={img}
            alt=""
            className="img-fluid blur-up lazyload bg-img"
          />
          <div className="absolute-contain">
            <h3>{title}</h3>
            <h4>{desc}</h4>
          </div>
        </div>
      </a>
    </Col>
  );
};

const Banner = () => {
  return (
    <Fragment>
      <section className="banner-padding banner-furniture absolute_banner ratio3_2">
        <Container>
          <Row className="partition3">
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
};

export default Banner;

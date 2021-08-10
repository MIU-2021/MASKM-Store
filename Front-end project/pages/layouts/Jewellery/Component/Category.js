import React, { Fragment } from "react";
import Slider from "react-slick";
import {
  Slider6,
  svgDiamond,
  svgEarings,
  svgLongEarings,
  svgNeckles,
  svgPearsing,
  svgRings,
  svgTiara,
  svgWatch,
} from "../../../../services/script";
import { Container, Row, Col } from "reactstrap";

const Data = [
  {
    img: svgRings,
    title: "rings",
    desc: "23 items",
    link: "#",
  },
  {
    img: svgDiamond,
    title: "diamons",
    desc: "54 items",
    link: "#",
  },
  {
    img: svgNeckles,
    title: "neckles",
    desc: "15 items",
    link: "#",
  },
  {
    img: svgWatch,
    title: "watches",
    desc: "62 items",
    link: "#",
  },
  {
    img: svgPearsing,
    title: "pearsing",
    desc: "12 items",
    link: "#",
  },
  {
    img: svgTiara,
    title: "tiara",
    desc: "33 items",
    link: "#",
  },
  {
    img: svgEarings,
    title: "earings",
    desc: "21 items",
    link: "#",
  },
  {
    img: svgLongEarings,
    title: "long earings",
    desc: "18 items",
    link: "#",
  },
];

const MasterCategory = ({ img, title, desc, link }) => {
  return (
    <div className="category-block">
      <a href={link}>
        <div className="category-image svg-image">
          <div dangerouslySetInnerHTML={{ __html: img }}></div>
        </div>
      </a>
      <div className="category-details">
        <a href={link}>
          <h5>{title}</h5>
        </a>
        <h6>{desc}</h6>
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <Fragment>
      <Container>
        <section className="section-b-space border-section border-top-0">
          <Row>
            <Col>
              <Slider {...Slider6} className="slide-6 no-arrow">
                {Data.map((data, i) => {
                  return (
                    <MasterCategory
                      key={i}
                      img={data.img}
                      link={data.link}
                      title={data.title}
                      desc={data.desc}
                    />
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </section>
      </Container>
    </Fragment>
  );
};

export default Category;

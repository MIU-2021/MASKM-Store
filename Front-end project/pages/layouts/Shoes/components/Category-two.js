import React, { Fragment } from "react";
import { Container, Media, Row, Col } from "reactstrap";
import cart1 from "../../../../public/assets/images/cat1.jpg";
import cart2 from "../../../../public/assets/images/cat2.jpg";
import cart3 from "../../../../public/assets/images/cat3.jpg";

const Data = [
  {
    img: cart1,
    title: "men",
    link: "#",
  },
  {
    img: cart2,
    title: "women",
    link: "#",
  },
  {
    img: cart3,
    title: "kids",
    link: "#",
  },
];

const MasterCategory = ({ img, title, link }) => {
  return (
    <Col sm="4" className="border-padding">
      <div className="category-banner">
        <div>
          <Media
            src={img}
            className="img-fluid blur-up lazyload bg-img"
            alt=""
          />
        </div>
        <div className="category-box">
          <a href={link}>
            <h2>{title}</h2>
          </a>
        </div>
      </div>
    </Col>
  );
};

const CategoryTwo = () => (
  <Fragment>
    <section className="p-0 ratio2_1">
      <Container fluid={true}>
        <Row className="category-border">
          {Data.map((data, i) => {
            return <MasterCategory key={i} img={data.img} title={data.title} />;
          })}
        </Row>
      </Container>
    </section>
  </Fragment>
);

export default CategoryTwo;

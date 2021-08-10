import React from "react";
import Slider from "react-slick";
import { Product5 } from "../../../../services/script";
import { Container, Row, Col, Media } from "reactstrap";
import cart from "../../../../public/assets/images/icon/cat1.png";
import cart2 from "../../../../public/assets/images/icon/cat2.png";
import cart3 from "../../../../public/assets/images/icon/cat3.png";
import cart4 from "../../../../public/assets/images/icon/cat4.png";
import cart5 from "../../../../public/assets/images/icon/cat5.png";
import cart6 from "../../../../public/assets/images/icon/cat6.png";

const Data = [
  { img: cart, title: "sport shoes", link: "#" },
  { img: cart2, title: "casual shoes", link: "#" },
  { img: cart3, title: "formal shoes", link: "#" },
  { img: cart4, title: "flat", link: "#" },
  { img: cart5, title: "heels", link: "#" },
  { img: cart6, title: "boots", link: "#" },
  { img: cart2, title: "casual shoes", link: "#" },
  { img: cart2, title: "casual shoes", link: "#" },
];

const MasterCategory = ({ img, title, link }) => {
  return (
    <div className="category-block">
      <a href={link}>
        <div className="category-image">
          <Media src={img} alt="" />
        </div>
      </a>
      <div className="category-details">
        <a href={link}>
          <h5>{title}</h5>
        </a>
      </div>
    </div>
  );
};
const Category = () => {
  return (
    <Container>
      <section className="section-b-space border-section border-top-0">
        <Row>
          <Col>
            <Slider {...Product5} className="slide-6 no-arrow">
              {Data.map((data, i) => {
                return (
                  <MasterCategory
                    key={i}
                    img={data.img}
                    link={data.link}
                    title={data.title}
                  />
                );
              })}
            </Slider>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Category;

import React, { Fragment } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import Slider from "react-slick";
import { Slider4 } from "../../../../services/script";
import cart1 from "../../../../public/assets/images/watch/cat1.png";
import cart2 from "../../../../public/assets/images/watch/cat2.png";
import cart3 from "../../../../public/assets/images/watch/cat3.png";

const Data = [
  {
    img: cart1,
    title: "watch models",
    features: [
      { title: "d1 milano", link: "#" },
      { title: "damaskeening", link: "#" },
      { title: "diving watch", link: "#" },
      { title: "dollar watch", link: "#" },
    ],
    link: "#",
  },
  {
    img: cart2,
    title: "calculator watch",
    features: [
      { title: "shock-resistant watch", link: "#" },
      { title: "skeleton watch", link: "#" },
      { title: "slow watch", link: "#" },
      { title: "solar-powered watch", link: "#" },
    ],
    link: "#",
  },
  {
    img: cart3,
    title: "antimegnatic watch",
    features: [
      { title: "watchmaking conglomarates", link: "#" },
      { title: "breitling SA", link: "#" },
      { title: "casio watch", link: "#" },
      { title: "citizen watch", link: "#" },
    ],
    link: "#",
  },
  {
    img: cart2,
    title: "history of watches",
    features: [
      { title: "Manufacture D'horlogerie", link: "#" },
      { title: "mechanical watche", link: "#" },
      { title: "microbrand watches", link: "#" },
      { title: "MIL-W-46374", link: "#" },
    ],
    link: "#",
  },
  {
    img: cart1,
    title: "watch models",
    features: [
      { title: "d1 milano", link: "#" },
      { title: "damaskeening", link: "#" },
      { title: "diving watch", link: "#" },
      { title: "dollar watch", link: "#" },
    ],
    link: "#",
  },
];

const MasterCategory = ({ img, title, features, link }) => {
  return (
    <div>
      <div className="category-wrapper">
        <div>
          <div>
            <Media
              src={img}
              className="img-fluid blur-up lazyload bg-img"
              alt=""
            />
          </div>
          <h4>{title}</h4>
          <ul className="category-link">
            {features.map((data, i) => {
              return (
                <li key={i}>
                  <a href={data.link}>{data.title}</a>
                </li>
              );
            })}
          </ul>
          <a href={link} className="btn btn-outline">
            view more
          </a>
        </div>
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <Fragment>
      <section className="section-b-space ratio_portrait">
        <Container>
          <Row>
            <Col>
              <Slider {...Slider4} className="slide-4 category-m no-arrow">
                {Data.map((data, i) => {
                  return (
                    <MasterCategory
                      key={i}
                      img={data.img}
                      link={data.link}
                      title={data.title}
                      features={data.features}
                    />
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Category;

import React, { Fragment } from "react";
import { Container, Col, Row, Media } from "reactstrap";
import banner1 from "../../../../public/assets/images/banner1.jpg";
import banner2 from "../../../../public/assets/images/banner2.jpg";
import banner from "../../../../public/assets/images/banner.jpg";

const Data = [
  {
    img: banner1,
    title: "minimum 10% off",
    desc: "new watch",
    link: "#",
    classes: " p-left",
  },
  {
    img: banner2,
    title: "",
    desc: "",
    link: "#",
    classes: "p-left text-center",
  },
  {
    img: banner,
    title: "minimum 50% off",
    desc: "gold watch",
    link: "#",
    classes: "p-left ",
  },
];

const MasterCollection = ({ img, title, desc, link, classes }) => {
  return (
    <Col mf="4">
      <a href="#">
        <div className={`collection-banner ${classes}`}>
          <div className="img-part">
            <Media
              src={img}
              className="img-fluid blur-up lazyload bg-img"
              alt=""
            />
          </div>
          <div className="contain-banner banner-3">
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

const Collection = () => {
  return (
    <Fragment>
      <section className="ratio_45">
        <Container>
          <Row className="partition3">
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

export default Collection;

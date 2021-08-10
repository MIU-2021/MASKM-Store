import React, { Fragment } from "react";
import { Media, Container, Row, Col } from "reactstrap";
import banner1 from "../../../../public/assets/images/furniture/2banner1.jpg";
import banner2 from "../../../../public/assets/images/furniture/2banner2.jpg";
import banner3 from "../../../../public/assets/images/furniture/2banner3.jpg";

const Data = [
  {
    img: banner1,
    about: "sofa",
    offer: "save 30%",
    link: "#",
    class: "p-right text-right",
  },
  {
    img: banner2,
    about: "new arrival",
    offer: "save 60%",
    link: "#",
    class: "p-right text-right",
  },
  {
    img: banner3,
    about: "chair",
    offer: "save 60%",
    link: "#",
    class: " p-right text-right",
  },
];

const MasterCollectionBanner = ({ img, about, offer, link, classes }) => {
  return (
    <Col md="4">
      <a href={link}>
        <div className={`collection-banner ${classes}`}>
          <div className="img-part">
            <Media
              src={img}
              alt=""
              className="img-fluid blur-up lazyload bg-img"
            />
          </div>
          <div className="contain-banner banner-3">
            <div>
              <h4>{offer}</h4>
              <h2>{about}</h2>
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
      <section className="banner-furniture ratio_45">
        <Container fluid={true}>
          <Row className="partition3">
            {Data.map((data, i) => {
              return (
                <MasterCollectionBanner
                  key={i}
                  img={data.img}
                  about={data.about}
                  link={data.link}
                  offer={data.offer}
                  classes={data.class}
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

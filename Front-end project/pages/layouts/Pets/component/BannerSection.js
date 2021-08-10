import React, { Fragment } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import banner1 from "../../../../public/assets/images/pets/banner/1.jpg";
import banner2 from "../../../../public/assets/images/pets/banner/2.jpg";
import banner3 from "../../../../public/assets/images/pets/banner/3.jpg";
import banner4 from "../../../../public/assets/images/pets/banner/4.jpg";
import banner5 from "../../../../public/assets/images/pets/banner/5.jpg";
import banner6 from "../../../../public/assets/images/pets/banner/6.jpg";

const Data = [
  {
    img: banner1,
    title: "clothes",
    link: "#",
    classes: "p-left",
  },
  {
    img: banner2,
    title: "groom",
    link: "#",
    classes: "p-right text-right",
  },
  {
    img: banner3,
    title: "food",
    link: "#",
    classes: "p-left",
  },
  {
    img: banner4,
    title: "home",
    link: "#",
    classes: "p-right ",
  },
  {
    img: banner5,
    title: "cats",
    link: "#",
    classes: "p-right text-right",
  },
  {
    img: banner6,
    title: "bowls",
    link: "#",
    classes: "p-right",
  },
];

const MasterBannerSection = ({ img, title, link, classes }) => {
  return (
    <Col md="4">
      <a href={link}>
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
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};

const BannerSection = () => {
  return (
    <Fragment>
      <section className="pt-0 banner-6 ratio2_1">
        <Container>
          <Row className="partition3">
            {Data.map((data, i) => {
              return (
                <MasterBannerSection
                  key={i}
                  img={data.img}
                  link={data.link}
                  title={data.title}
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

export default BannerSection;

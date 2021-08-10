import React from "react";
import Slider from "react-slick";
import { Slider6 } from "../../services/script";
import { Container, Row, Media, Col } from "reactstrap";

const LogoBlock = ({ designClass }) => {
  const imgData = [
    "/assets/images/logos/1.png",
    "/assets/images/logos/2.png",
    "/assets/images/logos/3.png",
    "/assets/images/logos/4.png",
    "/assets/images/logos/5.png",
    "/assets/images/logos/6.png",
    "/assets/images/logos/7.png",
    "/assets/images/logos/8.png",
  ];
  return (
    <section className={designClass}>
      <Container>
        <Row>
          <Col md="12">
            <Slider {...Slider6} className="slide-6 no-arrow">
              {imgData.map((imgSrc, i) => {
                return (
                  <div key={i}>
                    <div className="logo-block">
                      <a href={null}>
                        <Media src={imgSrc} alt="" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LogoBlock;

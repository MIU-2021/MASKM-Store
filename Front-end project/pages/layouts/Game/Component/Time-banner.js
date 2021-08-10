import React from "react";
import { Container, Row, Col } from "reactstrap";
import CountdownComponent from "../../../../components/common/widgets/countdownComponent";

const TimeBanner = () => {
  return (
    <section className="game-banner">
      <Container>
        <Row className="banner-timer">
          <Col md="6">
            <div className="banner-text">
              <h2>
                Save <span>30% off</span> Digital Watch
              </h2>
            </div>
          </Col>
          <Col md="6">
              <CountdownComponent />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TimeBanner;

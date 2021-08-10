import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  svgFastEfficient,
  svgFreeShipping,
  svgpayment,
  svgservice,
} from "../../../services/script";
import MasterServiceContent from "./MasterServiceConternt";

const Data = [
  {
    link: svgFreeShipping,
    title: "free shipping",
    service: "on orders over $50",
  },
  {
    link: svgpayment,
    title: "online payment",
    service: "instantly pay online",
  },
  {
    link: svgservice,
    title: "24 X 7 service",
    service: "Our service is available 24/7",
  },
  {
    link: svgFastEfficient,
    title: "fast & efficient",
    service: "fast and qualitative product",
  },
];

const Service = () => {
  return (
    <Container>
      <section className="service small-section pb-0">
        <Row className="partition4">
          {Data.map((data, index) => {
            return (
              <Col
                lg="2"
                xs="6"
                className={`${index === 0 ? "offset-lg-2" : ""} service-block1`}
                key={index}
              >
                <MasterServiceContent
                  title={data.title}
                  link={data.link}
                  service={data.service}
                  marijuana={true}
                />
              </Col>
            );
          })}
        </Row>
      </section>
    </Container>
  );
};
export default Service;
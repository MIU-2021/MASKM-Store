import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  svgFreeShipping,
  svgservice,
  svgoffer,
  svgpayment,
} from "../../../services/script";
import MasterServiceContent from "./MasterServiceConternt";

const Data = [
  {
    link: svgFreeShipping,
    title: "free shipping",
    service: "free shipping world wide",
  },
  {
    link: svgservice,
    title: "24 X 7 service",
    service: "online service for new customer",
  },
  {
    link: svgoffer,
    title: "festival offer",
    service: "new online special festival offer",
  },
  {
    link: svgpayment,
    title: "online payment",
    service: "new online special festival offer",
  },
];

const Service = ({ layoutClass, hrLine }) => {
  return (
    <Fragment>
      <section className={layoutClass}>
        <Container className="absolute-bg">
          <div className="service p-0 ">
            <Row>
              {Data.map((data, i) => {
                return (
                  <Col
                    key={i}
                    lg="3"
                    sm="6"
                    className={` ${
                      hrLine ? "service-block1" : "service-block"
                    }`}
                  >
                    <MasterServiceContent
                      link={data.link}
                      title={data.title}
                      service={data.service}
                      hrLine={hrLine}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default Service;

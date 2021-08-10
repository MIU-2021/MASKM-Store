import { Fragment } from "react";
import { Container, Col, Row } from "reactstrap";
import MasterServiceContent from "../../../../components/common/Service/MasterServiceConternt";
import {
  svgFreeShipping,
  svgoffer,
  svgservice,
} from "../../../../services/script";

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
];

const Collections = () => {
  return (
    <Fragment>
      <section className="banner-padding absolute-banner pb-0">
        <Container className="absolute-bg">
          <div className="service p-0">
            <Row>
              {Data.map((data, i) => {
                return (
                  <Col md="4" className="service-block" key={i}>
                    <MasterServiceContent
                      link={data.link}
                      title={data.title}
                      service={data.service}
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

export default Collections;

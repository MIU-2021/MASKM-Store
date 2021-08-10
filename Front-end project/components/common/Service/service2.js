import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import service1 from "../../../public/assets/images/icon/service1.png";
import service2 from "../../../public/assets/images/icon/service2.png";
import service3 from "../../../public/assets/images/icon/service3.png";
import service4 from "../../../public/assets/images/icon/service4.png";
const Data = [
  {
    img: service1,
    title: "free shipping",
    service:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. ",
  },
  {
    img: service2,
    title: "24 X 7 service",
    service:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    img: service3,
    title: "festival offer",
    service:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
  {
    img: service4,
    title: "online payment",
    service:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
];

const ServiceContent = ({ img, title, service }) => {
  return (
    <Col lg="3" md="6" className="service-block1">
      <Media src={img} alt="" />
      <h4>{title}</h4>
      <p>{service} </p>
    </Col>
  );
};
const Service = () => {
  return (
    <Container>
      <section className="service section-b-space  border-section border-top-0">
        <Row className="partition4 ">
          {Data.map((data, i) => {
            return (
              <ServiceContent
                key={i}
                img={data.img}
                title={data.title}
                service={data.service}
              />
            );
          })}
        </Row>
      </section>
    </Container>
  );
};

export default Service;

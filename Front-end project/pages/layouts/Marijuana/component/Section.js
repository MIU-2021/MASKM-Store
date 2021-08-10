import React from "react";
import { Container, Row, Col } from "reactstrap";
import { svgLeaf } from "../../../../services/script";

const Data = [
  {
    img: svgLeaf,
    title: "19+ Only",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis cupiditate deleniti",
  },
  {
    img: svgLeaf,
    title: "30g limit",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis cupiditate deleniti",
  },
  {
    img: svgLeaf,
    title: "trusted source",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis cupiditate deleniti",
  },
];

const MasterSection = ({ img, title, desc }) => {
  return (
    <Col md="4">
      <div className="detail_section">
        <div>
          <div dangerouslySetInnerHTML={{ __html: img }}></div>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </Col>
  );
};

const Sections = () => (
  <section className="section-b-space detail-cannabis bg-grey">
    <Container>
      <Row>
        {Data.map((data, i) => {
          return (
            <MasterSection
              key={i}
              img={data.img}
              title={data.title}
              desc={data.desc}
            />
          );
        })}
      </Row>
    </Container>
  </section>
);

export default Sections;

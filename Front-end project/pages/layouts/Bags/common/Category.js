import React from "react";
import { Row, Col } from "reactstrap";

const Category = () => {
  const bagTypes = [
    "airbag",
    "burn bag",
    "briefcase",
    "carpet bag",
    "money bag",
    "tucker bag",
  ];
  return (
    <div className="container category-button">
      <section className="section-b-space border-section border-bottom-0">
        <Row className="partition1">
          {bagTypes.map((type, i) => (
            <Col>
              <a key={i} href="#" className="btn btn-outline btn-block">
                {type}
              </a>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Category;

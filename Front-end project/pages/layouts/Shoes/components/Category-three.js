import React, { Fragment } from "react";
import { Container, Col, Row } from "reactstrap";

const CategoryThree = () => {
  const size = ["size 06", "size 07", "size 08", "size 09", "size 10"];
  return (
    <Fragment>
      <section className="p-0">
        <Container>
          <Row className="background">
            {size.map((size, i) => {
              return (
                <Col key={i}>
                  <a href="#">
                    <div className="contain-bg">
                      <h4 data-hover="size 06">{size}</h4>
                    </div>
                  </a>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default CategoryThree;

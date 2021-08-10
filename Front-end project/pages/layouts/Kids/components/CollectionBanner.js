import React, { Fragment } from "react";
import { Media, Container, Row, Col } from "reactstrap";
import kids2 from "../../../../public/assets/images/kids/2.jpg";
import kids1 from "../../../../public/assets/images/kids/1.jpg";

const Data = [
  {
    img: kids2,
    title: "save 30%",
    desc: "outfit",
    link: "#",
  },
  {
    img: kids1,
    title: "save 60%",
    desc: "toys",
    link: "#",
  },
];

const MasterCollection = ({ img, title, desc, link }) => {
  return (
    <Col md="6">
      <a href={link}>
        <div className="collection-banner p-right text-center">
          <div>
            <Media src={img} className="img-fluid  bg-img" alt="" />
          </div>
          <div className="contain-banner">
            <div>
              <h4>{title}</h4>
              <h2>{desc}</h2>
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};

const CollectionBanner = () => {
  return (
    <Fragment>
      {/*collection banner layout*/}
      <section className="banner-padding absolute-banner pb-0 ratio2_1">
        <Container className="absolute-bg">
          <Row className="partition2">
            {Data.map((data, i) => {
              return (
                <MasterCollection
                  key={i}
                  img={data.img}
                  link={data.link}
                  title={data.title}
                  desc={data.desc}
                />
              );
            })}
          </Row>
        </Container>
      </section>
      {/*collection banner layout end*/}
    </Fragment>
  );
};

export default CollectionBanner;

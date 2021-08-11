import React from "react";
import vendor from "../../../../public/assets/images/about/vendor.jpg";
import { Container, Row, Col, Input, Form } from "reactstrap";
import {
  svgLowCost,
  svgHighGrowth,
  svgPickUp,
  svgApproach,
} from "../../../../services/script";

const FeatureData = [
  {
    img: svgLowCost,
    title: "lowest cost",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. ",
  },
  {
    img: svgHighGrowth,
    title: "HIGH GROWTH RATE",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. ",
  },
  {
    img: svgPickUp,
    title: "dedicated pickup",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. ",
  },
  {
    img: svgApproach,
    title: "most approachable",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. ",
  },
];

const FeatureComponent = ({ img, title, desc }) => {
  return (
    <Col lg="3" md="6" className="service-block1">
      <div dangerouslySetInnerHTML={{ __html: img }}></div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </Col>
  );
};

const BannerData = [
  {
    no: "1",
    title: "List your products & Get support service provider",
    desc:
      "Register your business for free and create a productcatalogue. Sell under your own private label or sell an existing brand. Get your documentation & cataloging done with ease from our Professional Services network.",
  },
  {
    no: "2",
    title: "Receive Orders & Schedule A Pickup",
    desc:
      "Once listed, your products will be available to millions of users.Get orders and manage your online business via our Seller Panel and Seller Zone Mobile App.",
  },
  {
    no: "3",
    title: "Receive Quick Payment & Grow Your Business",
    desc:
      "Receive quick and hassle-free payments in your account once your orders are fulfilled. Expand your business with low interest & collateral-free loans.",
  },
];

const BannerComponent = ({ no, title, desc }) => {
  return (
    <Col lg="4">
      <div className="step-box">
        <div>
          <div className="steps">{no}</div>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </Col>
  );
};

const Become = () => {
  return (
    <>
      <section className="about-page section-b-space">
        <Container>
          <Row>
            <Col lg="12">
              <div className="banner-section">
                <img
                  src={vendor}
                  className="img-fluid blur-up lazyload"
                  alt=""
                />
              </div>
            </Col>
            <Col sm="12">
              <h4>
                Start your business with Multikart & reach customers across the
                World...
              </h4>
              <p className="mb-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium,
              </p>
              <p>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame belongs to those who fail in their duty through weakness
                of will, which is the same as saying through shrinking from toil
                and pain. These cases are perfectly simple and easy to
                distinguish. In a free hour, when our power of choice is
                untrammelled and when nothing prevents our being able to do what
                we like best, every pleasure is to be welcomed and every pain
                avoided. But in certain circumstances and owing to the claims of
                duty or the obligations of business it will frequently occur
                that pleasures have to be repudiated and annoyances accepted.
                The wise man therefore always holds in these matters to this
                principle of selection: he rejects pleasures to secure other
                greater pleasures, or else he endures pains to avoid worse
                pains.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* // <!-- service section start --> */}
      <Container>
        <section className="service section-b-space pt-0 ">
          <Row className="partition4 ">
            {FeatureData.map((feature, i) => {
              return (
                <FeatureComponent
                  key={i}
                  img={feature.img}
                  title={feature.title}
                  desc={feature.desc}
                />
              );
            })}
          </Row>
        </section>
      </Container>
      {/* // <!-- service section end --> */}

      {/* <!-- how to start section start --> */}
      <section className="section-b-space become-vendor">
        <Container>
          <h4>doing business on multikart is really easy</h4>
          <div className="step-bg">
            <Row>
              {BannerData.map((banner, i) => {
                return (
                  <BannerComponent
                    key={i}
                    no={banner.no}
                    title={banner.title}
                    desc={banner.desc}
                  />
                );
              })}
            </Row>
          </div>
        </Container>
      </section>
      {/* <!-- how to start section end --> */}

      {/* <!-- start selling section start --> */}
      <section className="start-selling section-b-space">
        <Container>
          <Col>
            <div>
              <h4>start selling</h4>
              <p>
                Multikart marketplace is India’s leading platform for selling
                online. Be it a manufacturer, vendor or supplier, simply sell
                your products online on Multikart and become a top ecommerce
                player with minimum investment. Through a team of experts
                offering exclusive seller workshops, training, seller support
                and convenient seller portal, Multikart focuses on educating and
                empowering sellers across India. Selling on Multikart.com is
                easy and absolutely free. All you need is to register, list your
                catalogue and start selling your products.
              </p>
              <Form>
                <Row>
                  <Col sm="6">
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Email ID"
                    />
                  </Col>
                  <Col sm="6">
                    <Input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </Col>
                </Row>
              </Form>
              <a href="#" className="btn btn-solid btn-sm">
                start selling
              </a>
            </div>
          </Col>
        </Container>
      </section>
      {/* <!-- start selling section end --> */}
    </>
  );
};

export default Become;

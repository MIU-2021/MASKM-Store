import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Collapse,
} from "reactstrap";
import LogoImage from "../../headers/common/logo";
import CopyRight from "./copyright";

const MasterFooter = ({
                        containerFluid,
                        logoName,
                        layoutClass,
                        footerClass,
                        footerLayOut,
                        footerSection,
                        belowSection,
                        belowContainerFluid,
                        copyRightFluid,
                        newLatter,
                      }) => {
  const [isOpen, setIsOpen] = useState();
  const [collapse, setCollapse] = useState(0);
  const width = window.innerWidth < 750;
  useEffect(() => {
    const changeCollapse = () => {
      if (window.innerWidth < 750) {
        setCollapse(0);
        setIsOpen(false);
      } else setIsOpen(true);
    };

    window.addEventListener("resize", changeCollapse);

    return () => {
      window.removeEventListener('resize', changeCollapse)
    }

  }, []);
  return (
      <div>
        <footer  className="{footerClass}">
          {newLatter ? (
              <div className="d-none">
                <Container fluid={containerFluid ? containerFluid : ""}>
                  <section className={footerSection}>
                    <Row>
                      <Col lg="6">
                        <div className="subscribe">
                          <div>
                            <h4>KNOW IT ALL FIRST!</h4>
                            <p>
                              Never Miss Anything From Multikart By Signing Up To
                              Our Newsletter.
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col lg="6">
                        <Form className="form-inline subscribe-form">
                          <FormGroup className="mx-sm-3">
                            <Input
                                type="text"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Enter your email"
                            />
                          </FormGroup>
                          <Button type="submit" className="btn btn-solid">
                            subscribe
                          </Button>
                        </Form>
                      </Col>
                    </Row>
                  </section>
                </Container>
              </div>
          ) : (
              ""
          )}

          <section className="d-none">
            <Container fluid={belowContainerFluid ? belowContainerFluid : ""}>
              <Row className="footer-theme partition-f">
                <Col lg="4" md="6">
                  <div
                      className={`footer-title ${
                          isOpen && collapse == 1 ? "active" : ""
                      } footer-mobile-title`}
                  >
                    <h4
                        onClick={() => {
                          setCollapse(1);
                          setIsOpen(!isOpen);
                        }}
                    >
                      about
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <Collapse
                      isOpen={width ? (collapse === 1 ? isOpen : false) : true}
                  >
                    <div className="footer-contant">
                      <div className="footer-logo">
                        <LogoImage logo={logoName} />
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam,
                      </p>
                      <div className="footer-social">
                        <ul>
                          <li>
                            <a href="https://www.facebook.com" target="_blank">
                              <i
                                  className="fa fa-facebook"
                                  aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://plus.google.com" target="_blank">
                              <i
                                  className="fa fa-google-plus"
                                  aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com" target="_blank">
                              <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com" target="_blank">
                              <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://rss.com" target="_blank">
                              <i className="fa fa-rss" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Collapse>
                </Col>
                <Col className="offset-xl-1">
                  <div className="sub-title">
                    <div
                        className={`footer-title ${
                            isOpen && collapse == 2 ? "active" : ""
                        } `}
                    >
                      <h4
                          onClick={() => {
                            if (width) {
                              setIsOpen(!isOpen);
                              setCollapse(2);
                            } else setIsOpen(true);
                          }}
                      >
                        my account
                        <span className="according-menu"></span>
                      </h4>
                    </div>
                    <Collapse
                        isOpen={width ? (collapse === 2 ? isOpen : false) : true}
                    >
                      <div className="footer-contant">
                        <ul>
                          <li>
                            <Link href={`/shop/left_sidebar`}>
                              <a>womens</a>
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop/left_sidebar`}>
                              <a> clothing </a>
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop/left_sidebar`}>
                              <a>accessories</a>
                            </Link>
                          </li>
                          <li>
                            <Link href={`/shop/left_sidebar`}>
                              <a> featured </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Collapse>
                  </div>
                </Col>
                <Col>
                  <div className="sub-title">
                    <div
                        className={`footer-title ${
                            isOpen && collapse == 3 ? "active" : ""
                        } `}
                    >
                      <h4
                          onClick={() => {
                            if (width) {
                              setIsOpen(!isOpen);
                              setCollapse(3);
                            } else setIsOpen(true);
                          }}
                      >
                        why we choose
                        <span className="according-menu"></span>
                      </h4>
                    </div>
                    <Collapse
                        isOpen={width ? (collapse === 3 ? isOpen : false) : true}
                    >
                      <div className="footer-contant">
                        <ul>
                          <li>
                            <a href="#">shipping & return</a>
                          </li>
                          <li>
                            <a href="#">secure shopping</a>
                          </li>
                          <li>
                            <a href="#">gallary</a>
                          </li>
                          <li>
                            <a href="#">affiliates</a>
                          </li>
                          <li>
                            <a href="#">contacts</a>
                          </li>
                        </ul>
                      </div>
                    </Collapse>
                  </div>
                </Col>
                <Col>
                  <div className="sub-title">
                    <div
                        className={`footer-title ${
                            isOpen && collapse == 4 ? "active" : ""
                        } `}
                    >
                      <h4
                          onClick={() => {
                            if (width) {
                              setIsOpen(!isOpen);
                              setCollapse(4);
                            } else setIsOpen(true);
                          }}
                      >
                        store information
                        <span className="according-menu"></span>
                      </h4>
                    </div>
                    <Collapse
                        isOpen={width ? (collapse === 4 ? isOpen : false) : true}
                    >
                      <div className="footer-contant">
                        <ul className="contact-list">
                          <li>
                            <i className="fa fa-map-marker"></i>Multikart Demo
                            Store, Demo store India 345-659
                          </li>
                          <li>
                            <i className="fa fa-phone"></i>Call Us: 123-456-7898
                          </li>
                          <li>
                            <i className="fa fa-envelope-o"></i>Email Us:{" "}
                            <a href="#">Support@Fiot.com</a>
                          </li>
                          <li>
                            <i className="fa fa-fax"></i>Fax: 123456
                          </li>
                        </ul>
                      </div>
                    </Collapse>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <CopyRight
              layout={layoutClass}
              fluid={copyRightFluid ? copyRightFluid : ""}
          />
        </footer>
      </div>
  );
};
export default MasterFooter;

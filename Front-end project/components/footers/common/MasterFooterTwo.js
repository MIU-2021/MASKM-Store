import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Collapse } from "reactstrap";
import LogoImage from "../../headers/common/logo";
import CopyRight from "./copyright";

const MasterFooterTwo = ({
  layoutClass,
  logoName,
  footerClass,
  footerSection,
  logoImg,
  footerLogoClass,
  btnGreen,
  myAccount,
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
    <Fragment>
      <footer className={footerClass}>
        <div className="dark-layout">
          <Container>
            <section className={`section-b-space ${footerSection}`}>
              <Row className="footer-theme2">
                <Col lg="3">
                  <div
                    className={`footer-title 	${
                      isOpen && collapse == 1 ? "active" : ""
                    }  footer-mobile-title`}
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
                      <div className={`footer-logo ${footerLogoClass}`}>
                        {logoImg ? (
                          <LogoImage logo={logoName} />
                        ) : (
                          <img src={logoName} alt="" />
                        )}
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et.Lorem
                        ipsum dolor sit amet, consectetur adipiscing
                      </p>
                    </div>
                  </Collapse>
                </Col>
                <Col lg="6" className="subscribe-wrapper">
                  <div className="subscribe-block">
                    <h2>newsletter</h2>
                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput3"
                          placeholder="Enter your email"
                        />
                        <button
                          type="submit"
                          className={`btn btn-solid ${
                            btnGreen ? "btn-green" : ""
                          }`}
                        >
                          subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
                <Col lg="3">
                  <div
                    className={`footer-title 	${
                      isOpen && collapse == 2 ? "active" : ""
                    } `}
                  >
                    <h4
                      onClick={() => {
                        setCollapse(2);
                        setIsOpen(!isOpen);
                      }}
                    >
                      store information
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <Collapse
                    isOpen={width ? (collapse === 2 ? isOpen : false) : true}
                  >
                    <div className="footer-contant">
                      <ul className="contact-details">
                        <li>Multikart Demo Store, Demo store India 345-659</li>
                        <li>Call Us: 123-456-7898</li>
                        <li>
                          Email Us: <a href={null}>Support@Fiot.com</a>
                        </li>
                        <li>Fax: 123456</li>
                      </ul>
                    </div>
                  </Collapse>
                </Col>
              </Row>
            </section>
          </Container>
        </div>
        {myAccount ? (
          <div className="dark-layout">
            <Container>
              <section className="small-section">
                <Row className="footer-theme2">
                  <Col className="p-set">
                    <div className="footer-link">
                      <div
                        className={`footer-title ${
                          isOpen && collapse == 3 ? "active" : ""
                        } `}
                      >
                        <h4
                          onClick={() => {
                            setCollapse(3);
                            setIsOpen(!isOpen);
                          }}
                        >
                          my account
                          <span className="according-menu"></span>
                        </h4>
                      </div>
                      <Collapse
                        isOpen={
                          width ? (collapse === 3 ? isOpen : false) : true
                        }
                      >
                        <div className="footer-contant">
                          <ul>
                            <li>
                              <a href={null}>mens</a>
                            </li>
                            <li>
                              <a href={null}>womens</a>
                            </li>
                            <li>
                              <a href={null}>clothing</a>
                            </li>
                            <li>
                              <a href={null}>accessories</a>
                            </li>
                            <li>
                              <a href={null}>featured</a>
                            </li>
                          </ul>
                        </div>
                      </Collapse>
                    </div>
                    <div className="footer-link-b">
                      <div
                        className={`footer-title ${
                          isOpen && collapse == 4 ? "active" : ""
                        } `}
                      >
                        <h4
                          onClick={() => {
                            setCollapse(4);
                            setIsOpen(!isOpen);
                          }}
                        >
                          why we choose
                          <span className="according-menu"></span>
                        </h4>
                      </div>
                      <Collapse
                        isOpen={
                          width ? (collapse === 4 ? isOpen : false) : true
                        }
                      >
                        <div className="footer-contant">
                          <ul>
                            <li>
                              <a href={"#"}>shipping & return</a>
                            </li>
                            <li>
                              <a href={"#"}>secure shopping</a>
                            </li>
                            <li>
                              <a href={"#"}>gallary</a>
                            </li>
                            <li>
                              <a href={"#"}>affiliates</a>
                            </li>
                            <li>
                              <a href={"#"}>contacts</a>
                            </li>
                          </ul>
                        </div>
                      </Collapse>
                    </div>
                  </Col>
                </Row>
              </section>
            </Container>
          </div>
        ) : (
          ""
        )}

        <CopyRight layout={layoutClass ? layoutClass : ""} />
      </footer>
    </Fragment>
  );
};

export default MasterFooterTwo;

import React, { useState, useEffect } from "react";
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import Currency from "./common/currency";
import CartContainer from "../containers/CartContainer";
import TopBar from "./common/topbar";
import { Media, Container, Row, Col } from "reactstrap";
import LogoImage from "./common/logo";
import search from "../../public/assets/images/icon/search.png";
import settings from "../../public/assets/images/icon/setting.png";
import cart from "../../public/assets/images/icon/layout4/cart.png";
import SearchOverlay from "./common/search-overlay";

const HeaderTen = ({ logoName, topClass, headerClass }) => {
  /*=====================
         Pre loader
		 ==========================*/
  useEffect(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display:none";
    }, 2000);
  }, []);

  const openNav = () => {
    var openmyslide = document.getElementById("mySidenav");
    if (openmyslide) {
      openmyslide.classList.add("open-side");
    }
  };
  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };

  return (
    <div>
      <header id="sticky" className={headerClass}>
        <div className="mobile-fix-option"></div>
        {/*Top Header Component*/}
        <TopBar topClass={topClass} />
        <div className="metro">
          <Container className="layout3-menu">
            <Row>
              <Col sm="12">
                <Row className="main-menu">
                  <Col>
                    <div className="menu-left around-border">
                      <div className="navbar">
                        <a href="!#" onClick={openNav}>
                          <div className="bar-style">
                            {" "}
                            <i
                              className="fa fa-bars sidebar-bar"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </a>
                        {/*SideBar Navigation Component*/}
                        <SideBar />
                      </div>
                      <div className="menu-right pull-right">
                        <NavBar />
                      </div>
                    </div>
                  </Col>
                  <div className="absolute-logo">
                    <div className="brand-logo">
                      <LogoImage logo={logoName} />
                    </div>
                  </div>
                  <div>
                    <div className="menu-right pull-right">
                      <div>
                        <div className="icon-nav">
                          <ul>
                            <li className="onhover-div mobile-search">
                              <div>
                                <Media
                                  src={search}
                                  onClick={openSearch}
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                            </li>
                            <Currency icon={settings} />
                            {/*Header Cart Component */}
                            <CartContainer icon={cart} />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <SearchOverlay />
    </div>
  );
};

export default HeaderTen;

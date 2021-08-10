import React, { useState, useEffect } from "react";
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import Cart from "../containers/Cart";
import CartContainer from "../containers/CartContainer";
import TopBarDark from "./common/topbar-dark";
import { Media, Container, Row, Col } from "reactstrap";
import LogoImage from "./common/logo";
import search from "../../public/assets/images/icon/search.png";
import settings from "../../public/assets/images/icon/setting.png";
import cart from "../../public/assets/images/icon/cart.png";
import Currency from "./common/currency";
import { useRouter } from "next/router";
import SearchOverlay from "./common/search-overlay";

const HeaderOne = ({
  logoName,
  headerClass,
  topClass,
  noTopBar,
  direction,
}) => {
  const router = useRouter();

  /*=====================
		 Pre loader
		 ==========================*/
  useEffect(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display:none";
    }, 2000);

    if (router.asPath !== "/layouts/Christmas")
      window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number >= 300) {
      if (window.innerWidth < 576)
        document.getElementById("sticky").classList.remove("fixed");
      else document.getElementById("sticky").classList.add("fixed");
    } else document.getElementById("sticky").classList.remove("fixed");
  };

  const openNav = () => {
    var openmyslide = document.getElementById("mySidenav");
    if (openmyslide) {
      openmyslide.classList.add("open-side");
    }
  };
  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };

  // eslint-disable-next-line
  const load = () => {
    setIsLoading(true);
    fetch().then(() => {
      // deal with data fetched
      setIsLoading(false);
    });
  };

  return (
    <div>
      <header id="sticky" className={`sticky ${headerClass}`}>
        <div className="mobile-fix-option"></div>
        {/*Top Header Component*/}
        {noTopBar ? "" : <TopBarDark topClass={topClass} />}

        <Container>
          <Row>
            <Col>
              <div className="main-menu">
                <div className="menu-left">
                  <div className="navbar">

                      <div className="bar-style">
                        <i
                          className="fa fa-bars sidebar-bar"
                          aria-hidden="true"
                        ></i>
                      </div>

                    {/*SideBar Navigation Component*/}

                  </div>
                  <div className="brand-logo">
                    <LogoImage logo={logoName} />
                  </div>
                </div>
                <div className="menu-right pull-right">
                  {/*Top Navigation Bar Component*/}
                  <NavBar />

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

                        {/*Header Cart Component */}
                        {direction === undefined ? (
                          <CartContainer layout={direction} icon={cart} />
                        ) : (
                          <Cart layout={direction} icon={cart} />
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      <SearchOverlay />
    </div>
  );
};

export default HeaderOne;

import React, { Fragment, useEffect } from "react";
import { withApollo } from "../../../helpers/apollo/apollo";
import HeaderOne from "../../../components/headers/header-one";
import Banner from "./components/Banner";
import MasonryProduct from "./components/MasonryProduct";
import ModalComponent from "../../../components/common/Modal";
import MasterFooter from "../../../components/footers/common/MasterFooter";

const Lights = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#ff4c3b");
  });
  return (
    <Fragment>
      <ModalComponent />
      <HeaderOne logoName={"logo.png"} topClass="top-header top-header-dark3" />
      <Banner />
      <MasonryProduct type="light" cartClass="cart-info cart-wrap" />
      <MasterFooter
        footerClass={`footer-light`}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
        logoName={"logo.png"}
      />
    </Fragment>
  );
};

export default withApollo(Lights);

import React, { useEffect } from "react";
import HeaderOne from "../../../components/headers/header-one";
import LookbookSection from "./component/Lookbook";
import MasterFooter from "../../../components/footers/common/MasterFooter";

const Lookbook = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#ff4c3b");
  });
  return (
    <>
      <HeaderOne topClass="top-header" logoName="logo.png" />
      <LookbookSection />
      <MasterFooter
        footerClass={`footer-light`}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
      />
    </>
  );
};

export default Lookbook;

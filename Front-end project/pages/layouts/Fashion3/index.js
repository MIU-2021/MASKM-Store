import React, { useEffect } from "react";
import ModalComponent from "../../../components/common/Modal";
import HeaderOne from "../../../components/headers/header-one";
import { withApollo } from "../../../helpers/apollo/apollo";
import HomeSlider from "./Component/Home";
import TopCollection from "../../../components/common/Collections/Collection1";
import { Product4 } from "../../../services/script";
import Paragraph from "../../../components/common/Paragraph";
import { Container } from "reactstrap";
import SpecialProducts from "../../../components/common/Collections/TabCollection1";
import MasterParallaxBanner from "../Fashion/Components/MasterParallaxBanner";
import MasterFooter from "../../../components/footers/common/MasterFooter";

const Fashion3 = () => {
  useEffect(() => {
    document.body.classList.add("box-layout-body");
  }, []);
  return (
    <>
      <ModalComponent />
      <HeaderOne logoName={"logo.png"} topClass="top-header" />
      <HomeSlider />
      <div className="container box-layout bg-image">
        <section className="section-b-space ratio_asos">
          {/* <Container className="section-t-space"> */}
          <Container>
            <Paragraph
              title="title1"
              subtitle="special offer"
              inner="title-inner1"
            />
            <TopCollection
              backImage={true}
              type="fashion"
              noTitle="null"
              productSlider={Product4}
              designClass="section-b-space p-t-0 ratio_asos"
              noSlider="true"
              cartClass="cart-info cart-wrap"
            />
          </Container>
        </section>
        <MasterParallaxBanner
          bg="parallax-banner16"
          parallaxClass="text-center p-left"
          title="2021"
          subTitle1="fashion trends"
          subTitle2="special offer"
        />
        <SpecialProducts
          type="fashion"
          heading="exclusive products"
          backImage={true}
          productSlider={Product4}
          line={true}
          title="title1 section-t-space"
          inner="title-inner1"
          designClass="section-b-space p-t-0 ratio_asos"
          noSlider="true"
          cartClass="cart-info cart-wrap"
        />
      </div>
      <MasterFooter
        footerClass={`footer-light`}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
        logoName={"logo.png"}
      />
    </>
  );
};

export default withApollo(Fashion3);

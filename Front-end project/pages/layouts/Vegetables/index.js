import React, { useEffect } from "react";
import { withApollo } from "../../../helpers/apollo/apollo";
import HeaderTwo from "../../../components/headers/header-two";
import Banner from "./components/Banner";
import Collections from "./components/Collections";
import TopCollection from "../../../components/common/Collections/Collection4";
import SpecialProducts from "../../../components/common/Collections/Collection5";
import Blog from "../../../components/common/Blog/blog1";
import { Product5 } from "../../../services/script";
import ModalComponent from "../../../components/common/Modal";
import MasterParallaxBanner from "../Fashion/Components/MasterParallaxBanner";
import MasterFooter from "../../../components/footers/common/MasterFooter";

const Vegetables = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#ff4c3b");
  });
  return (
    <>
      <ModalComponent />
      <HeaderTwo logoName={"logo.png"} topClass="top-header" />
      <Banner />
      <Collections />
      <TopCollection
        titleClass="title4"
        inner="title-inner4"
        line={true}
        type="vegetables"
        productSlider={Product5}
        title="trending products"
        designClass="section-b-space addtocart_count ratio_square"
        productSlider={Product5}
        noSlider="true"
        cartClass="cart-info cart-wrap"
      />
      <MasterParallaxBanner
        bg="parallax-banner15"
        parallaxClass="text-left p-left"
        title="2021"
        subTitle1="food market"
        subTitle2="special offer"
      />
      <div className="section-b-space">
        <SpecialProducts
          type="vegetables"
          cartClass="cart-info cart-wrap"
          designClass="addtocart_count ratio_square"
        />
      </div>
      <Blog
        type="vegetables"
        sectionClass="blog blog-bg section-b-space ratio2_3"
        inner="title-inner4"
        title="title4"
      />
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

export default withApollo(Vegetables);

import React from "react";
import ModalComponent from "../../../components/common/Modal";
import HeaderTen from "../../../components/headers/Header-ten";
import Collection from "./Component/Collection";
import HomeSlider from "./Component/Home";
import SpecialProducts from "../../../components/common/Collections/TabCollection1";
import ProductSlider from "../../../components/common/Collections/Collection9";
import { withApollo } from "../../../helpers/apollo/apollo";
import { Product4 } from "../../../services/script";
import Instagram from "../../../components/common/instagram/instagram1";
import MasterParallaxBanner from "../Fashion/Components/MasterParallaxBanner";
import MasterFooterTwo from "../../../components/footers/common/MasterFooterTwo";

const Fashion2 = () => {
  return (
    <>
      <ModalComponent />
      <HeaderTen logoName={"logo/12.png"} topClass="top-header-dark2" />
      <HomeSlider />
      <Collection first />
      <Collection />
      <SpecialProducts
        type="fashion"
        backImage={true}
        productSlider={Product4}
        line={true}
        title="title1 section-t-space"
        inner="title-inner1"
        designClass="section-b-space p-t-0 ratio_asos"
        noSlider="true"
        cartClass="cart-info cart-wrap"
      />
      <MasterParallaxBanner
        bg="parallax-banner13"
        parallaxClass="text-center p-left"
        title="2021"
        subTitle1="fashion trends"
        subTitle2="special offer"
      />
      <ProductSlider type="fashion" />
      <Instagram type="fashion" />
      <MasterFooterTwo
        footerSection=" border-b"
        footerLogoClass="text-center"
        logoName={"logo/f3.png"}
        logoImg={true}
        myAccount={true}
        layoutClass={"darker-subfooter"}
      />
    </>
  );
};

export default withApollo(Fashion2);

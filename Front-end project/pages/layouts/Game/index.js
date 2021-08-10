import React, { Fragment, useEffect } from "react";
import HeaderOne from "../../../components/headers/header-one";
import HomeSlider from "./Component/Home-slider";
import Category from "./Component/Category";
import SpecialProducts from "../../../components/common/Collections/TabCollection8";
import { withApollo } from "../../../helpers/apollo/apollo";
import TimeBanner from "./Component/Time-banner";
import ProductSlider from "../../../components/common/Collections/Collection9";
import TopCollection from "../../../components/common/Collections/Collection13";
import LogoBlock from "../../../components/common/logo-block";
import Paragraph from "../../../components/common/Paragraph";
import ModalComponent from "../../../components/common/Modal";
import MasterParallaxBanner from "../Fashion/Components/MasterParallaxBanner";
import MasterFooterTwo from "../../../components/footers/common/MasterFooterTwo";

const Game = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#ff4c3b");
  });
  return (
    <Fragment>
      <ModalComponent />
      <HeaderOne
        logoName={"logo.png"}
        headerClass="color-dark"
        topClass="top-header top-header-dark2"
      />
      <HomeSlider />
      <Category />
      <SpecialProducts
        type="game"
        designClass="ratio_asos game-product section-b-space"
        noSlider="true"
        cartClass="cart-info cart-wrap"
      />
      <TimeBanner />
      <ProductSlider
        type="game"
        designClass="ratio_asos game-product section-b-space"
        noSlider="true"
        cartClass="cart-info cart-wrap"
      />
      <MasterParallaxBanner
        parallaxSectionClass="game-parallax effect-cls"
        bg="parallax-banner20"
        parallaxClass="text-center p-center"
        title="2019"
        subTitle1="xbox games"
        subTitle2="special offer"
      />
      <Paragraph title="title1  section-t-space" inner="title-inner1" />
      <TopCollection
        type="game"
        designClass="ratio_asos game-product section-b-space"
        noSlider="true"
        cartClass="cart-info cart-wrap"
      />
      <div className="section-b-space">
        <LogoBlock />
      </div>
      <MasterFooterTwo
        footerClass={`bg-img-gym overlay-cls effect-cls footer-effect bg-size blur-up lazyloaded`}
        footerSection=" border-b"
        footerLogoClass="text-center"
        logoName={"footerlogo.png"}
        logoImg={true}
        myAccount={true}
        layoutClass={`darker-subfooter`}
      />
    </Fragment>
  );
};

export default withApollo(Game);

import React, { Fragment } from "react";
import Slider from "react-slick";

const HomeSlider = () => {
  const banners = ["home41", "home42"];
  return (
    <Fragment>
      <section className="p-0 effect-cls">
        <Slider className="slide-1 home-slider">
          {banners.map((data, i) => {
            return (
              <div key={i}>
                <div className={`home text-center p-center ${data}`}></div>
              </div>
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default HomeSlider;

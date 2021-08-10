import React, { Fragment } from "react";
import Slider from "react-slick";
import MasterBanner from "../../Fashion/Components/MasterBanner";

const Data = [
  {
    img: "home47",
    title: "summer salean exemplart gateway to happiness",
    desc: "all jewellery",
    link: "#",
    classes: "text-center bg-size blur-up lazyloaded ",
  },
  {
    img: "home48",
    title: "an exemplart gateway to happiness",
    desc: "flat 20% off",
    link: "#",
    classes: "text-center bg-position p-right",
  },
];

const Banner = () => {
  return (
    <Fragment>
      <section className="p-0 height-100">
        <div className="home-slider">
          <Slider>
            {Data.map((data, i) => {
              return (
                <MasterBanner
                  key={i}
                  img={data.img}
                  link={data.link}
                  title={data.title}
                  desc={data.desc}
                  classes={data.classes}
                />
              );
            })}
          </Slider>
        </div>
      </section>
    </Fragment>
  );
};

export default Banner;

import React, { Fragment } from "react";
import Slider from "react-slick";
import MasterBanner from "../../Fashion/Components/MasterBanner";

const Data = [
  {
    img: "home14",
    title: "10% discount",
    desc: "light up your home",
    link: "#",
    classes: "text-left p-left",
  },
];

const Banner = () => {
  return (
    <Fragment>
      <section className="p-0 layout-7">
        <Slider className="slide-1 home-slider">
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
          })}{" "}
        </Slider>
      </section>
    </Fragment>
  );
};

export default Banner;

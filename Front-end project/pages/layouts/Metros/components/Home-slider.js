import React, { Fragment } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "../../Fashion/Components/MasterBanner";

const Data = [
  {
    img: "home54",
    title: "welcome to multikart",
    desc: "flat 10% off",
    link: "#",
  },
  {
    img: "home53",
    title: "welcome to fashion",
    desc: "woman fashion",
    link: "#",
  },
];

const HomeSlider = () => {
  return (
    <Fragment>
      <section className="p-0 gym-slider metro-slider">
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
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default HomeSlider;

import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import MasterBanner from "../../Fashion/Components/MasterBanner";

const Data = [
  {
    img: "home36",
    title: "20%off",
    desc: "men collection",
    link: "#",
    classes: "",
  },
  {
    img: "home37",
    title: "welcome to fashion",
    desc: "women collection",
    link: "#",
    classes: "p-right text-center",
  },
];

const HomeSlider = () => {
  return (
    <section className="p-0">
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
  );
};

export default HomeSlider;

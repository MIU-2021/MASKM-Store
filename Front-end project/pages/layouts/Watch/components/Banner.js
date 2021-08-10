import React, { Fragment } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "../../Fashion/Components/MasterBanner";

const Data = [
  {
    img: "home9",
    title: "every time",
    desc: "mittnalier",
    link: "#",
    classes: "p-left text-left",
  },
  {
    img: "home10",
    title: "welcome to fashion",
    desc: "men's shoes",
    link: "#",
    classes: "p-left text-left",
  },
  {
    img: "home11",
    title: "welcome to fashion",
    desc: "men's shoes",
    link: "#",
    classes: "p-left text-left",
  },
];

const Banner = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Banner;

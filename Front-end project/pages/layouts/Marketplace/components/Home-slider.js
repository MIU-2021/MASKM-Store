import React, { Fragment } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "../../Fashion/Components/MasterBanner";

const Data = [
  {
    img: "home8",
    title: "Headset for all style",
    desc: "starting $19",
    link: "#",
    classes: "p-left text-left",
  },
  {
    img: "home12",
    title: "furnishing deals",
    desc: "upto 70% off",
    link: "#",
    classes: "p-left text-left",
  },
];

const HomeSlider = () => {
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
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default HomeSlider;

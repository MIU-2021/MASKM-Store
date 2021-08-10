import React, { Fragment } from "react";
import Slider from "react-slick";
// import { Container, Row, Col } from "reactstrap";
import MasterBanner from "../../Fashion/Components/MasterBanner";

const Data = [
  {
    img: "home55",
    title: "welcome to fashion",
    desc: "men fashion",
    link: "#",
  },
  {
    img: "home56",
    title: "welcome to fashion",
    desc: "women fashion",
    link: "#",
  },
];

const HomeSlider = () => {
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
              />
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default HomeSlider;

import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import Service from "../../../../components/common/Service/service4";
import MasterBanner from "../../Fashion/Components/MasterBanner";

const Data = [
  {
    img: "home51",
    title: "special offer",
    desc: "buy marijuana",
    link: "#",
    classes: "p-center text-center",
  },
  {
    img: "home52",
    title: "special offer",
    desc: "cannabis weed",
    link: "#",
    classes: "p-center text-center",
  },
];

const HomeSlider = () => (
  <Fragment>
    <section className="p-0 service_slide">
      <Slider className="slide-1 home-slider text-white">
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
      <div className="service-home">
        <Service />
      </div>
    </section>
  </Fragment>
);

export default HomeSlider;

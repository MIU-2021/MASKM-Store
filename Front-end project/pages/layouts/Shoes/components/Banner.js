import React, { Fragment } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "../../Fashion/Components/MasterBanner";

const Data = [
  {
    img: "home3",
    title: "special offer",
    desc: "men's shoes",
    link: "#",
  },
  {
    img: "home4",
    title: "special offer",
    desc: "men's shoes",
    link: "#",
  },
  {
    img: "home5",
    title: "special offer",
    desc: "men's shoes",
    link: "#",
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
              />
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default Banner;

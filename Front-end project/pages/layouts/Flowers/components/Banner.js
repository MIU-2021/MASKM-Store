import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import MasterBanner from "../../Fashion/Components/MasterBanner";

const Data = [
  {
    img: "home30",
    title: "save upto 20%",
    desc: "creative & decor",
    link: "/left-sidebar/collection",
  },
  {
    img: "home31",
    title: "save upto 10%",
    desc: "creative & decor",
    link: "/left-sidebar/collection",
  },
];

const Banner = () => {
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
            />
          );
        })}
      </Slider>
    </section>
  );
};

export default Banner;

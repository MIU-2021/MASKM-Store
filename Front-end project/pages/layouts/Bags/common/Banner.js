import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "../../Fashion/Components/MasterBanner";

const Data = [
  {
    img: "home6",
    title: "summer sale",
    desc: "the bag",
    link: "# ",
    classes: "p-center text-center",
  },
  {
    img: "home7",
    title: "summer sale",
    desc: "the bag",
    link: "# ",
    classes: "p-center text-center",
  },
  {
    img: "home8",
    title: "summer sale",
    desc: "the bag",
    link: "# ",
    classes: "p-center text-center",
  },
];

const Banner = () => {
  const bg = ["home6", "home7", "home8"];
  return (
    <section className="p-0">
      <Slider className="slide-1 home-slider">
        {Data.map((data, i) => {
          return (
            <MasterBanner
              key={i}
              img={data.img}
              desc={data.desc}
              title={data.title}
              link={data.link}
              classes={data.classes}
            />
          );
        })}{" "}
      </Slider>
    </section>
  );
};

export default Banner;

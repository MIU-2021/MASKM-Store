import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "../../Fashion/Components/MasterBanner";

const Data = [
  {
    img: "home46",
    title: "every pet is different",
    desc: "let's shop",
    link: "#",
    classes: "text-left",
  },
  {
    img: "home45",
    title: "anything that pets want",
    desc: "save 20%",
    link: "#",
    classes: "text-left",
  },
];

const MainBanner = () => {
  return (
    <>
      <title>MultiKart | Pets Store</title>
      <section className="p-0 small-slider">
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
    </>
  );
};

export default MainBanner;

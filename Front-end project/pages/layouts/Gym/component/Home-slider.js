import React, { Fragment } from "react";
// import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import MasterBanner from "../../Fashion/Components/MasterBanner";

const Data = [
  {
    img: "home43",
    title: "summer sale",
    desc: "Protien Powder",
    link: "#",
    classes: "p-right text-right",
  },
  {
    img: "home44",
    title: "summer sale",
    desc: "Protien Shake",
    link: "#",
    classes: "p-right text-right",
  },
];

const HomeSlider = () => {
  return (
    <Fragment>
      <section className="p-0 gym-slider">
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
                btnClass=" btn-gradient"
                btn="save upto 50%off"
              />
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default HomeSlider;

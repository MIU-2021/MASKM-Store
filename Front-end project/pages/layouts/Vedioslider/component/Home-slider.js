import React, { Fragment } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "../../Fashion/Components/MasterBanner";

const Data = [
  {
    img: "home1",
    title: "welcome to fashion",
    desc: "women fashion",
    link: "/left-sidebar/collection",
    classes: "text-center overflow-hidden",
  },
];

const HomeSlider = () => {
  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          <div>
            <div className="home position-relative p-center  text-center overflow-hidden">
              <video
                id="background-video"
                className="videoClass"
                autoPlay
                playsInline
                muted
              >
                <source src="/assets/video/2.mp4" type="video/mp4" />
                <source src="/assets/video/2.mp4" type="video/ogg" />
              </video>
            </div>
          </div>
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

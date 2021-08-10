import React from "react";
import { Media, Container, Row, Col } from "reactstrap";
// import four from '../../../../public/assets/images/parallax/4.jpg';
// import five from '../../../../public/assets/images/parallax/5.jpg';
// import six from '../../../../public/assets/images/parallax/6.jpg';
// import seven from '../../../../public/assets/images/parallax/7.jpg';

const Data = [
  {
    class: "parallax-banner4",
    yr: "2021",
    title: "fashion trends",
    offer: "special offer",
  },
  {
    class: "parallax-banner5",
    yr: "2021",
    title: "the summer",
    offer: "special offer",
  },
  {
    class: "parallax-banner6",
    yr: "2021",
    title: "top trends",
    offer: "special offer",
  },
  {
    class: "parallax-banner7",
    yr: "2021",
    title: "new collection",
    offer: "special offer",
  },
];

const Section = ({ classes, yr, title, offer }) => {
  return (
    <section className="p-0">
      <div
        className={`full-banner parallax-layout parallax text-center p-right ${classes}`}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="banner-contain">
                <h2>{yr}</h2>
                <h3>{title}</h3>
                <h4>{offer}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ParallaxSection = () => {
  return (
    <div className="parallax-cls">
      {Data.map((data, i) => {
        return (
          <Section
            key={i}
            classes={data.class}
            yr={data.yr}
            title={data.title}
            offer={data.offer}
          />
        );
      })}
    </div>
  );
};

export default ParallaxSection;
